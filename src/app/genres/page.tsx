import Image from "next/image";
import Link from "next/link";
import { GenresApi } from "@/models";
import { GenresAdapter } from "@/adapters";
import { Card } from "../styled";
import { GenreBadge } from "@/app/components";
async function fetchGenres(): Promise<GenresApi> {
  const url = `${process.env.GAMES_API_URL}/genres?key=${process.env.GAMES_API_KEY}&ordering=id`;
  return await fetch(url)
    .then((res) => res.json())
    .then((res) => GenresAdapter(res));
}

const Genres = async () => {
  const genres = await fetchGenres();
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
        {genres.results.map((genre) => (
          <Link key={genre.id} href={`/genres/${genre.slug.toLowerCase()}/1`}>
            <Card as="article" className="border-amber-600">
              <header className="bg-inherit">
                <h3 className="mb-0 border-b border-amber-600">{genre.name}</h3>
                <GenreBadge>{genre.name}</GenreBadge>
              </header>
              <Image
                src={genre.image_background}
                width={300}
                height={120}
                alt={`${genre.name} banner`}
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
