export interface GenresApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games?: GenreGameApi[];
}

interface GenreGameApi {
  id: number;
  slug: string;
  name: string;
  added: number;
}
