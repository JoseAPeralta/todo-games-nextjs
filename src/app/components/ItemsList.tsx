import Link from "next/link";
import { Card } from "../styled";
import Image from "next/image";
import { PlatformsApi, GenresApi, GamesApi } from "@/models";

type FetchType = (PlatformsApi & GenresApi) & GamesApi;

async function fetchList(
  search: string,
  page_size: number
): Promise<FetchType> {
  const url = `${process.env.GAMES_API_URL}/${search}?key=${process.env.GAMES_API_KEY}&page_size=${page_size}`;
  return await fetch(url).then((res) => res.json());
}

type PageType = {
  search: string;
  page_size?: number;
  page_title: string;
  className?: string;
};

const ItemsList = async ({
  search,
  page_size = 40,
  page_title,
  className,
}: PageType) => {
  const list = await fetchList(search, page_size);
  const isGames = search == "games" ? true : false;
  const isPlatform = search == "platforms" ? true : false;

  return (
    <section className={`text-center ${className}`}>
      <header className="mb-6 border-b border-gray-500">
        <h2 className="mb-0">{page_title}</h2>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        {list.results.map((item) => (
          <Card key={item.id} as="article" className="border-amber-600">
            <Link
              href={`/${isGames ? "game" : search}/${
                isPlatform ? item.id : item.slug
              }/${isGames ? "" : "/1"}`}
            >
              <header className="bg-inherit">
                <h3
                  className="mb-0 border-b border-amber-600"
                  style={{ inlineSize: "300px", overflowWrap: "break-word" }}
                >
                  {item.name}
                </h3>
              </header>

              <Image
                src={isGames ? item.background_image : item.image_background}
                width={300}
                height={120}
                alt={`${item.name} banner`}
                style={{ maxHeight: 150, minHeight: 150 }}
              />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ItemsList;
