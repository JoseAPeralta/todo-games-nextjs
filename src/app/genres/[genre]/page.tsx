import { GamesApi } from "@/models";
import Image from "next/image";
import { Badge, Card } from "@/app/styled";
import { toLocaleDate } from "@/helpers";

async function fetchGames(genre: string): Promise<GamesApi> {
  const url = `${process.env.GAMES_API_URL}/games?key=${process.env.GAMES_API_KEY}&genres=${genre}`;
  return await fetch(url).then((res) => res.json());
  // .then((res) => GenresAdapter(res));
}

export default async function Page({ params }: { params: { genre: string } }) {
  const games = await fetchGames(params.genre);
  return (
    <section>
      <header>
        <h2 className="capitalize text-center mb-6 border-b border-gray-500">
          {params.genre}
        </h2>
      </header>

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
              {/* <section className="flex flex-wrap gap-1">
                {game.stores.map((store) => (
                  <div key={`${game.id}-${store.store.id}`}>
                    {store.store.slug}
                  </div>
                ))}
              </section> */}
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
    </section>
  );
}
