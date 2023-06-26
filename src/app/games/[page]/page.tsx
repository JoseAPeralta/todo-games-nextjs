import { GamesApi } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/app/styled";
import { toLocaleDate } from "@/helpers";
import { GenreBadge, Pagination } from "@/app/components";

interface PageGamesApi extends GamesApi {
  page_size: number;
  page: number;
}
async function fetchGames(genre: string, page: number): Promise<PageGamesApi> {
  const page_size = 40;
  const url = `${process.env.GAMES_API_URL}/games?key=${process.env.GAMES_API_KEY}&page_size=${page_size}&page=${page}`;
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => ({ ...res, page_size, page }));
}

type pageType = {
  params: { games: string; page: number };
};
export default async function Page({ params }: pageType) {
  const games = await fetchGames(params.games, params.page);
  return (
    <section>
      <header>
        <h2 className="capitalize text-center mb-6 border-b border-gray-500">
          All Games
        </h2>
      </header>
      <Pagination
        totalItems={500}
        currentPage={games.page}
        itemsPerPage={games.page_size}
        renderPageLink={(page) => `/games/${page}`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {games.results.map((game) => (
          <Card key={game.id} as="article" className="grid grid-cols-1">
            <section>
              <Image
                src={game.background_image}
                width={400}
                height={160}
                alt={`${game.name} image`}
                style={{ width: "100%", height: 160 }}
              />
            </section>
            <section className="pl-3 pr-3">
              <header>
                <h3 className="mb-0 p-0">
                  <Link href={`/games/${game.id}`} className="text-slate-300">
                    {game.name}
                  </Link>
                </h3>
              </header>
              <section className="text-xs pb-1">
                {toLocaleDate(game.released)}
              </section>
              <section className="flex flex-wrap gap-1 text-xs pb-2">
                {game.genres.map((genre) => (
                  <GenreBadge key={`${game.id}-${genre.id}`}>
                    {genre.name}
                  </GenreBadge>
                ))}
              </section>
            </section>
            <section className="flex flex-wrap gap-2 content-center bg-slate-200 p-2">
              {game.platforms.map((platform) => (
                <Image
                  key={`${game.id}-${platform.platform.id}`}
                  src={`/images/platforms/${platform.platform.slug}.png`}
                  width={20}
                  height={20}
                  alt={`${platform.platform.name} banner`}
                  style={{ width: 20, height: 20 }}
                />
              ))}
            </section>
          </Card>
        ))}
      </div>
      <Pagination
        totalItems={500}
        currentPage={games.page}
        itemsPerPage={games.page_size}
        renderPageLink={(page) => `/games/${page}`}
      />
    </section>
  );
}
