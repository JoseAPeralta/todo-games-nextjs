import { GamesApi } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/app/styled";
import { toLocaleDate } from "@/helpers";
import { GenreBadge, Pagination } from "@/app/components";

interface IObjectKeys {
  [key: string]: string;
}
const platformId: IObjectKeys = {
  1: "Xbox One",
  3: "iOS",
  4: "Pc",
  5: "macOS",
  6: "Linux",
  7: "Nintendo Switch",
  8: "Nintendo 3DS",
  9: "Nintendo DS",
  10: "Wii U",
  11: "Wii",
  12: "Neo Geo",
  13: "NintendoDSi",
  14: "Xbox 360",
  15: "PlayStation 2",
  16: "PlayStation 3",
  17: "PSP",
  18: "PlayStation 4",
  19: "PS Vita",
  21: "Android",
  22: "Atari Flashback",
  23: "Atari 2600",
  24: "Game Boy Advance",
  25: "Atari 8-bit",
  26: "Game Boy",
  27: "PlayStation",
  28: "Atari 7800",
  31: "Atari 5200",
  34: "Atari ST",
  41: "Apple II",
  43: "Game Boy Color",
  46: "Atari Lynx",
  49: "NES",
  50: "Atari XEGS",
  55: "Classic Macintosh",
  74: "SEGA Master System",
  77: "Game Gear",
  79: "SNES",
  80: "Xbox",
  83: "Nintendo 64",
  105: "GameCube",
  106: "Dreamcast",
  107: "SEGA Saturn",
  111: "3DO",
  112: "Jaguar",
  117: "SEGA 32X",
  119: "SEGA CD",
  166: "Commodore / Amiga",
  167: "Genesis",
  171: "Web",
  186: "Xbox Series S/X",
};

interface PageGamesApi extends GamesApi {
  page_size: number;
  page: number;
}
async function fetchGames(
  platform: string,
  page: number
): Promise<PageGamesApi> {
  const page_size = 40;
  const url = `${process.env.GAMES_API_URL}/games?key=${process.env.GAMES_API_KEY}&platforms=${platform}&page_size=${page_size}&page=${page}`;
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => ({ ...res, page_size, page }));
}

type pageType = {
  params: { platform: string; page: number };
};

export default async function Page({ params }: pageType) {
  const platforms = await fetchGames(params.platform, params.page);

  return (
    <section>
      <header>
        <h2 className="capitalize text-center mb-6 border-b border-gray-500">
          {platformId[params.platform]}
        </h2>
      </header>
      <Pagination
        totalItems={500}
        currentPage={platforms.page}
        itemsPerPage={platforms.page_size}
        renderPageLink={(page) => `/platforms/${params.platform}/${page}`}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {platforms.results.map((platform) => (
          <Card key={platform.id} as="article" className="grid grid-cols-1">
            <section>
              <Image
                src={platform.background_image}
                width={400}
                height={160}
                alt={`${platform.name} image`}
                style={{ width: "100%", height: 160 }}
              />
            </section>
            <section className="pl-3 pr-3">
              <header>
                <h3 className="mb-0 p-0">
                  <Link
                    href={`/game/${platform.id}`}
                    className="text-slate-300"
                  >
                    {platform.name}
                  </Link>
                </h3>
              </header>
              <section className="text-xs pb-1">
                {toLocaleDate(platform.released)}
              </section>
              <section className="flex flex-wrap gap-1 text-xs pb-2">
                {platform.genres.map((genre) => (
                  <GenreBadge key={`${platform.id}-${genre.id}`}>
                    {genre.name}
                  </GenreBadge>
                ))}
              </section>
            </section>
            <section className="flex flex-wrap gap-2 content-center bg-slate-200 p-2">
              {platform.platforms.map((platform) => (
                <Image
                  key={`${platform.id}-${platform.platform.id}`}
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
        currentPage={platforms.page}
        itemsPerPage={platforms.page_size}
        renderPageLink={(page) => `/platforms/${params.platform}/${page}`}
      />
    </section>
  );
}
