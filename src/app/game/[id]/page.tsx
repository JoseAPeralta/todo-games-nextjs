import { Game } from "@/models";
import Image from "next/image";
import {
  BsFillCalendarCheckFill,
  BsReddit,
  BsClockHistory,
  BsInfoCircle,
} from "react-icons/bs";
import { Badge, Card } from "@/app/styled";
import { toLocaleDate } from "@/helpers";
import { IfExist } from "@/app/components";
import { GameAdapter } from "@/adapters";

async function fetchGame(id: number): Promise<Game> {
  const url = `${process.env.GAMES_API_URL}/games/${id}?key=${process.env.GAMES_API_KEY}`;
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => GameAdapter(res));
}

type pageType = {
  params: { id: number };
};

export default async function Page({ params }: pageType) {
  const game = await fetchGame(params.id);
  return (
    <article>
      <Card as="header" className="bg-stone-800 p-3">
        <h2 className="capitalize m-2">{game.name}</h2>
      </Card>
      <section className="flex border">
        <Image
          src={game.background_image}
          width={300}
          height={300}
          alt={`${game.name} banner`}
          style={{ maxHeight: 300 }}
          className="w-full md:w-1/2"
        />
        <Image
          src={game.background_image_additional}
          width={300}
          height={300}
          alt={`${game.name} banner`}
          style={{ maxHeight: 300 }}
          className="hidden md:w-1/2 md:block"
        />
      </section>
      <Card className="flex flex-wrap justify-between items-center pb-4 px-6 bg-stone-800">
        <IfExist prop={game?.released}>
          <div className="flex gap-1 content-center pt-4">
            <BsFillCalendarCheckFill className="mt-1" />
            {toLocaleDate(game.released)}
          </div>
        </IfExist>

        <div className="flex flex-wrap gap-2 items-center pt-4">
          <IfExist prop={game.esrb_rating?.name}>
            <div className="bg-yellow-600 rounded p-1 text-slate-100">
              {game.esrb_rating?.name}
            </div>
          </IfExist>
          <IfExist prop={game?.metacritic}>
            <div className="flex gap-1 bg-yellow-600 rounded p-1 text-slate-100">
              <Image
                src="/images/metacritic-icon.svg"
                width={30}
                height={30}
                alt={`${game.name} banner`}
              />
              {game.metacritic}
            </div>
          </IfExist>
          <IfExist prop={game?.rating}>
            <div className="flex gap-1 bg-yellow-600 rounded p-1 text-slate-100">
              {game.rating}
            </div>
          </IfExist>
          <IfExist prop={game?.reddit_url}>
            <div className="bg-yellow-600 rounded p-2">
              <a
                target="_blank"
                href={game.reddit_url}
                className="text-slate-100"
              >
                <BsReddit />
              </a>
            </div>
          </IfExist>
          <IfExist prop={game?.playtime}>
            <div className="flex gap-1 bg-yellow-600 rounded p-1 text-slate-100">
              <BsClockHistory className="mt-1" />
              {game.playtime}
            </div>
          </IfExist>
          <IfExist prop={game?.website}>
            <div className="flex gap-1 bg-yellow-600 rounded p-2 text-slate-100">
              <a target="_blank" href={game.website} className="text-slate-100">
                <BsInfoCircle />
              </a>
            </div>
          </IfExist>
        </div>
      </Card>
      <Card className="flex flex-wrap lg:flex-nowrap  p-3 bg-stone-800">
        <section className="w-full lg:w-3/5   p-3">
          <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
        </section>
        <section className="w-full lg:w-2/5 mx-4 p-3">
          <ul className="flex flex-wrap gap-1">
            Genres:
            {game.genres.map((genre) => (
              <Badge as="li" key={genre.id} className="list-none inline ">
                {genre.name}
              </Badge>
            ))}
          </ul>
          <ul>
            Platforms:{" "}
            {game.platforms.map((platform) => (
              <li
                key={platform.platform.id}
                className="list-none inline mx-1 p-1 rounded bg-slate-300"
              >
                <Image
                  key={`${game.id}-${platform.platform.id}`}
                  src={`/images/platforms/${platform.platform.slug}.png`}
                  width={20}
                  height={20}
                  alt={`${platform.platform.name} banner`}
                  style={{ width: 20, height: 20, display: "inline" }}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-1">
            Tags:
            {game.tags.map((tag) => (
              <Badge as="li" key={tag.id} className="list-none ">
                {tag.name}
              </Badge>
            ))}
          </ul>
        </section>
      </Card>
    </article>
  );
}
