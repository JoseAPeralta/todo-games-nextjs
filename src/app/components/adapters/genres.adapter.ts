import { GenresApi, Genre } from "@/models";

export const GenreAdapter = (Genre: Genre) => {
  return {
    id: Genre.id,
    name: Genre.name,
    slug: Genre.slug,
    games_count: Genre.games_count,
    image_background: Genre.image_background,
    games: Genre.games,
  };
};

export const GenresAdapter = (Genres: GenresApi): GenresApi => {
  return {
    count: Genres.count,
    next: Genres.next,
    previous: Genres.previous,
    results: Genres.results.map((genre) => GenreAdapter(genre)),
  };
};
