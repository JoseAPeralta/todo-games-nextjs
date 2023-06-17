import { Genre } from "@/models";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: any[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: null;
  metacritic: null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  community_rating: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: null;
  tags: Tags[];
  esrb_rating: EsrbRating;
  short_screenshots: ShortScreenshot[];
}

export interface PlatformElement {
  platform: Platform;
  released_at: null;
  requirements_en: PlatformRequirements | null;
  requirements_ru: PlatformRequirements | null;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: null;
  games_count: number;
  image_background: string;
}

export interface PlatformRequirements {
  minimum: string;
}

export interface ParentPlatform {
  platform: EsrbRating;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export enum Language {
  Eng = "eng",
}

export interface Store {
  id: number;
  store: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    domain: string;
  };
}

export interface Tags extends Genre {
  language: "es" | "eng";
}

export interface ShortScreenshot {
  id: number;
  image: string;
}
