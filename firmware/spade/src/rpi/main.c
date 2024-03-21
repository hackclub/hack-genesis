#include "hardware/spi.h"
#include "hardware/timer.h"
#include "hardware/watchdog.h"
#include "hardware/adc.h"
#include "pico/stdlib.h"
#include "pico/multicore.h"
#include "pico/util/queue.h"
#include "jerryscript.h"

#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#ifdef SPADE_AUDIO
#include "shared/audio/audio.h"
#endif

// Device integration
#include "ST7735_TFT.h"

// Sprig application logic
#include "constants.h"
#include "upload.h"
#include "lights.h"
#include "buttons.h"
#include "shared/ui/errorbuf.h"

// Other imports
#include "shared/sprig_engine/base_engine.c"



#include "shared/sprig_engine/module_native.c"

// Jerryscript
#include "shared/js_runtime/jerry_mem.h"
#include "shared/js_runtime/jerryxx.c"
#include "shared/js_runtime/js.h"

// Externs for shared/ui/errorbuf.h
char errorbuf[512] = "";
Color errorbuf_color; // Initialized in main()
static void fatal_error()
{
	// On fatal error, start an infinite loop rendering the errorbuf.
	errorbuf_color = color16(255, 0, 0); // Make sure it's red
	while (1)
	{
		text_clear();
		render_errorbuf();
		st7735_fill_start();
		render(st7735_fill_send);
		st7735_fill_finish();
	}
}

/**
 * Seed the random number generator with entropy from
 * random electricity as well as temperature readings.
 */
static void rng_init(void)
{
	adc_init();
	uint32_t seed = 0;

	// Read some random electricity
	for (int i = 0; i < 4; i++)
	{
		adc_select_input(4);
		sleep_ms(1);
		seed ^= adc_read();
	}

	// Read some temperature data
	adc_set_temp_sensor_enabled(true);
	adc_select_input(4);
	sleep_ms(1);
	seed ^= adc_read();
	adc_set_temp_sensor_enabled(false);

	srand(seed);
}

// Wait for a game to be uploaded.
static int load_new_scripts(void)
{
	return upl_stdin_read();
}

/**
 * Implementations for PianoOpts (see src/shared/audio/piano.h)
 *
 * p (the song object) is type erased because that's an implementation detail
 * for us. It's actually a jerry_value_t, not a void pointer, so we gotta cast.
 */
#ifdef SPADE_AUDIO
void piano_jerry_song_free(void *p)
{
	jerry_value_t jvt = (jerry_value_t)p;
	jerry_release_value(jvt);
}

int piano_jerry_song_chars(void *p, char *buf, int buf_len)
{
	jerry_value_t jvt = (jerry_value_t)p;
	int read = jerry_string_to_char_buffer(jvt, (jerry_char_t *)buf, (jerry_size_t)buf_len);
	return read;
}
#endif

int main()
{
	// Overclock the RP2040!
	set_sys_clock_khz(270000, true);

	errorbuf_color = color16(0, 255, 255); // cyan

	power_lights();	  // Turn on the power lights
	stdio_init_all(); // Init serial port
	st7735_init();	  // Init display
	rng_init();		  // Init RNG

	// Init JerryScript
	jerry_init(JERRY_INIT_MEM_STATS);
	init(sprite_free_jerry_object); // TODO: document

	while (!save_read())
	{
		// No game stored in memory
		strcpy(errorbuf, "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "    PLEASE UPLOAD   \n"
						 "       A GAME       \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 " sprig.hackclub.com \n");
		render_errorbuf();
		st7735_fill_start();
		render(st7735_fill_send);
		st7735_fill_finish();

		load_new_scripts();
	}

	// Start a core to listen for keypresses.
	multicore_launch_core1(button_handler);

	/**
	 * We get a bunch of fake keypresses at startup, so we need to
	 * drain them from the FIFO queue.
	 *
	 * What really needs to be done here is to have button_init
	 * record when it starts so that we can ignore keypresses after
	 * that timestamp.
	 */
	sleep_ms(50);
	while (multicore_fifo_rvalid())
		multicore_fifo_pop_blocking();

	/**
	 * Wait for a keypress to start the game.
	 *
	 * This is important so games with e.g. infinite loops don't
	 * brick the device as soon as they start up.
	 */
	while (!multicore_fifo_rvalid())
	{
		strcpy(errorbuf, "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "    PRESS ANY KEY   \n"
						 "       TO RUN       \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 "                    \n"
						 " sprig.hackclub.com \n");
		render_errorbuf();
		st7735_fill_start();
		render(st7735_fill_send);
		st7735_fill_finish();

		load_new_scripts();
	}

	// Wow, we can actually run a game now!

	// Clear the errorbuf and make it red
	memset(errorbuf, 0, sizeof(errorbuf));
	errorbuf_color = color16(255, 0, 0);
	text_clear();

	// Drain any remaining keypresses
	while (multicore_fifo_rvalid())
		multicore_fifo_pop_blocking();

	// Run the code!
	js_run(save_read(), strlen(save_read()));

#ifdef SPADE_AUDIO
	// Initialize audio
	piano_init((PianoOpts){
		.song_free = piano_jerry_song_free,
		.song_chars = piano_jerry_song_chars,
	});
	audio_init();
#endif

	// Current time for timer handling (see frame_cb in shared/sprig_engine/engine.js)
	absolute_time_t last = get_absolute_time();
	dbg("okay launching game loop");

	// Event loop!
	while (1)
	{
		// Handle any new button presses
		while (multicore_fifo_rvalid())
		{
			spade_call_press(multicore_fifo_pop_blocking());
		}

		// Run async code
		js_promises();

		// setTimeout/setInterval impl
		absolute_time_t now = get_absolute_time();
		int elapsed = us_to_ms(absolute_time_diff_us(last, now));
		last = now;
		spade_call_frame(elapsed);

#ifdef SPADE_AUDIO
		// Get any audio to the speaker
		audio_try_push_samples();
#endif

		// Break if they're trying to upload a new game
		if (load_new_scripts())
			break;

		// Render
		render_errorbuf();
		st7735_fill_start();
		render(st7735_fill_send);
		st7735_fill_finish();
	}

	/**
	 * User uploaded a new game mid-game. We're gonna try to reboot here,
	 * but just in case it doesn't work, we'll print a message nicely
	 * asking them to reboot. They'll never know there was a bug!
	 *
	 * (Unless they read this code. Which is encouraged. shhhhhhhhhhh~)
	 */

	errorbuf_color = color16(50, 205, 50); // lime green
	strcpy(errorbuf, "                    \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 "    PLEASE REBOOT   \n"
					 "     YOUR SPRIG     \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 "                    \n"
					 " sprig.hackclub.com \n");
	render_errorbuf();
	st7735_fill_start();
	render(st7735_fill_send);
	st7735_fill_finish();

	/**
	 * Watchdog is a mechanism designed to catch infinite loops. It will
	 * automatically reboot the device if another function, watchdog_update()
	 * is not called rapidly enough.
	 *
	 * Enabling watchdog with a timeout of 0 will cause the Pico to reboot
	 * right away.
	 */
	watchdog_enable(0, false);
	while (1)
	{
	}
}
