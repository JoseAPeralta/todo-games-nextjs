import Image from "next/image";
import Link from "next/link";
import { PlatformsApi } from "@/models";
import { GenresAdapter } from "@/adapters";
import { Card } from "../styled";

async function fetchGenres(): Promise<PlatformsApi> {
  const url = `${process.env.GAMES_API_URL}/platforms?key=${process.env.GAMES_API_KEY}&ordering=id`;
  return await fetch(url).then((res) => res.json());
}

const Genres = async () => {
  const platforms = await fetchGenres();
  const imageStyle = {
    maxHeight: 150,
    minHeight: 150,
  };
  return (
    <section className="text-center">
      <header className="mb-6 border-b border-gray-500">
        <h2 className="mb-0">Genres</h2>
      </header>

      <div className="flex flex-wrap justify-center gap-6 ">
        {platforms.results.map((platform) => (
          <Link key={platform.id} href={`/platforms/${platform.id}/1`}>
            <Card as="article" className="border-amber-600">
              <header className="bg-inherit">
                <h3 className="mb-0 border-b border-amber-600">
                  {platform.name}
                </h3>
              </header>
              <Image
                src={platform.image_background}
                width={300}
                height={120}
                alt={`${platform.name} banner`}
                style={imageStyle}
              />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Genres;
