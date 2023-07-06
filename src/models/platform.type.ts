export interface Platform {
  background_image: string;
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: null;
  year_start: null;
  year_end: null;
  games: Game[];
}

interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface PlatformsApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: Platform[];
}
