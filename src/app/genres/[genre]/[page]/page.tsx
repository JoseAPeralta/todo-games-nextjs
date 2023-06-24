import { GamesApi } from "@/models";
import Image from "next/image";
import { Badge, Card } from "@/app/styled";
import { toLocaleDate } from "@/helpers";
import Pagination from "@/app/components/Pagination";
import { type } from "os";

interface PagesGamesApi extends GamesApi {
  page_size: number;
  page: number;
}
async function fetchGames(genre: string, page: number): Promise<PagesGamesApi> {
  const page_size = 40;
  const url = `${process.env.GAMES_API_URL}/games?key=${process.env.GAMES_API_KEY}&genres=${genre}&page_size=${page_size}&page=${page}`;
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => ({ ...res, page_size, page }));
  // .then((res) => GenresAdapter(res));
}

type pageType = {
  params: { genre: string; page: number };
};
export default async function Page({ params }: pageType) {
  const games = await fetchGames(params.genre, params.page);
  return (
    <section>
      <header>
        <h2 className="capitalize text-center mb-6 border-b border-gray-500">
          {params.genre}
        </h2>
      </header>
      <Pagination
        totalItems={500}
        currentPage={games.page}
        itemsPerPage={games.page_size}
        renderPageLink={(page) => `/genres/${params.genre}/${page}`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {games.results.map((game) => (
          <Card key={game.id} as="article">
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
                <h3 className="mb-0 p-0">{game.name}</h3>
              </header>
              <section className="text-xs pb-1">
                {toLocaleDate(game.released)}
              </section>
              <section className="flex flex-wrap gap-1 text-xs pb-2">
                {game.genres.map((genre) => (
                  <Badge key={`${game.id}-${genre.id}`} className="bg-red-900">
                    {genre.name}
                  </Badge>
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
        renderPageLink={(page) => `/genres/${params.genre}/${page}`}
      />
    </section>
  );
}
