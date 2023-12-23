import { useState, useEffect } from "preact/hooks";
import { loadThumbnailUrl } from "../../lib/thumbnail";
import { GameMetadata } from "../../lib/game-saving/gallery";
import Button from "../../components/design-system/button";
import Input from "../../components/design-system/input";
import { IoCaretDown, IoSearch } from "react-icons/io5";
import "./gallery.css";

type SortOrder = "chronological" | "ascending" | "descending";
type GalleryGameMetadata = GameMetadata & { show: boolean };
type Filter = {
	query: string,
	tag: string,
	sort: SortOrder
};
export default function Gallery({ games, tags }: { games: GameMetadata[], tags: string[] }) {
	const [gamesState, setGamesState] = useState<GalleryGameMetadata[]>([]);
	const [filter, setFilter] = useState<Filter>({query: "", sort: "chronological", tag: ""});

	useEffect(() => {
		const lowerCaseQuery = filter.query.toLowerCase();
		const _games = games.filter(
				game => game.title.toLowerCase().includes(lowerCaseQuery) || 
				game.author.toLowerCase().includes(lowerCaseQuery)
			) // filter by query
			.filter(game => filter.tag.length === 0 ? game : game.tags.includes(filter.tag)) // filter by tags
		setGamesState(sortGames(_games, filter.sort).map(game => ({ ...game, show: true })) as GalleryGameMetadata[]);

	}, [filter]);

	function sortGames(games: GameMetadata[], order: SortOrder): GameMetadata[] {
		const _games = [...games];
		if (order === "chronological") {
			_games.sort((a, b) => Date.parse(b.addedOn) - Date.parse(a.addedOn))
				.slice(0, 10)
				.forEach(game => (game.isNew = true));
		}
		if (order === "ascending") _games.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
		if (order === "descending") _games.sort((a, b) => b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1);

		// put tutorials first
		_games.sort((a, _) => a.tags.includes("tutorial") ? -1 : 1)
		return _games;
	}

	useEffect(() => {
		interface GameCard {
			element: HTMLLIElement;
			filename: string;
			title: string;
			author: string;
			tags: string[];
			isNew: boolean;
		}
		for (const element of document.querySelectorAll("#games > .game")) {
			element.querySelector("img")?.setAttribute("data-loaded", "false");
		}

		const loadImage = async (gameCard: GameCard): Promise<void> => {
			const img = gameCard.element.querySelector(
				"img"
			) as HTMLImageElement;
			if (["loading", "true"].includes(img.dataset.loaded!)) return;
			img.dataset.loaded = "loading";
			img.src = await loadThumbnailUrl(gameCard.filename);
			img.dataset.loaded = "true";
		};

		const gameCards: GameCard[] = [];
		for (const _element of document.querySelectorAll(
			"#games > .game"
		)) {
			const element = _element as HTMLLIElement;
			const gameCard = {
				element,
				filename: element.dataset.filename!,
				title: element.dataset.title!,
				author: element.dataset.author!,
				tags: element.dataset.tags!.split(","),
				isNew: element.dataset.isNew === "true",
			};

			gameCards.push(gameCard);
			new IntersectionObserver((_update) => {
				const update = (_update[0] ||
					_update) as IntersectionObserverEntry;
				if (update.isIntersecting) loadImage(gameCard);
			}).observe(element);
		}

		setTimeout(() => {
			for (const gameCard of gameCards) loadImage(gameCard);
		}, 500);
	}, [gamesState]);

	return (
		<div>
			<div class="info-split">
				<div class="search-container">
					<p>
						We currently have {games.length} games made by Hack Clubbers.
						Click on any to play in the browser and hack on the code
						in our editor!
					</p>

					<div class="search-controls">
						<div class="select">
							<select onChange={(event) => {
								setFilter(_filter => ({ ..._filter, tag: (event.target! as HTMLSelectElement).value }))
							}} id="tag-select">
								<option value="">Filter by tag...</option>
								{
									tags.map((tag) => (
										<option value={tag}>#{tag}</option>
									))
								}
								<option value="_new">Recently added</option>
							</select>

							<IoCaretDown aria-hidden="true" />
						</div>

						<div class="select">
							<select 
							value={filter.sort}
							onChange={(event) => {
								setFilter(_filter => ({ ..._filter, sort: (event.target! as HTMLSelectElement).value! as SortOrder }));
							}}>
								<option value="">Sort by...</option>
								<option value="chronological">Release date</option>
								<option value="ascending">A-Z</option>
								<option value="descending">Z-A</option>
							</select>

							<IoCaretDown aria-hidden="true" />
						</div>

						<div class="search">
							<IoSearch aria-hidden="true" />
							<Input
								value={filter.query}
								onChange={event => {
									setFilter(_filter => ({ ..._filter, query: event.target.value }));
								}}
								id="search-input"
								placeholder="Search gallery"
							/>
						</div>
					</div>
				</div>
				<div class="join-container">
					<p>
						Add your game to the gallery and get your very own Sprig
						console.
					</p>
					<a href="/get"><Button accent>Add your game</Button></a>
				</div>
			</div>

			<div id="games">
				{
					gamesState.map((game: GalleryGameMetadata) => (						
						<a
							style={`display:${game.show ? "block" : "none"}`}
							class="game"
							href={`/gallery/${game.filename}`}
							target="_blank"
							data-filename={game.filename}
							data-title={game.title}
							data-author={game.author}
							data-tags={game.tags.join(",")}
							data-is-new={String(game.isNew)}
						>
							{game.tags.includes("tutorial") ? (
								<span class="badge tutorial">Tutorial</span>
							) : game.isNew ? (
								<span class="badge new">New</span>
							) : null}

							<img
								src={`gallery/${game.img}`}
								alt={`preview of ${game.filename}.js`}
							/>
							<h3>{game.title}</h3>
							<p class="author">by @{game.author}</p>
							<p class="tags">
								{game.tags.map((tag) => `#${tag}`).join(", ")}
							</p>
						</a>
					))
				}
			</div>
		</div>
	)
}