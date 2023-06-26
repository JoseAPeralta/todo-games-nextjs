import { GenresApi, Game } from "@/models";

export const GameAdapter = (Game: Game) => {
  return {
    id: Game.id,
    slug: Game.slug,
    name: Game.name,
    description: Game.description,
    description_raw: Game.description_raw,
    released: Game.released,
    tba: Game.tba,
    background_image: Game.background_image,
    background_image_additional: Game.background_image_additional,
    website: Game.website,
    rating: Game.rating,
    rating_top: Game.rating_top,
    ratings: Game.ratings,
    ratings_count: Game.ratings_count,
    reviews_text_count: Game.reviews_text_count,
    added: Game.added,
    added_by_status: Game.added_by_status,
    metacritic: Game.metacritic,
    metacritic_url: Game.metacritic_url,
    playtime: Game.playtime,
    reddit_url: Game.reddit_url,
    suggestions_count: Game.suggestions_count,
    updated: Game.updated,
    user_game: Game.user_game,
    reviews_count: Game.reviews_count,
    community_rating: Game.community_rating,
    saturated_color: Game.saturated_color,
    dominant_color: Game.dominant_color,
    platforms: Game.platforms,
    parent_platforms: Game.parent_platforms,
    genres: Game.genres,
    stores: Game.stores,
    clip: Game.clip,
    tags: Game.tags,
    esrb_rating: Game.esrb_rating,
  };
};

// export const GenresAdapter = (Genres: GenresApi): GenresApi => {
//   return {
//     count: Genres.count,
//     next: Genres.next,
//     previous: Genres.previous,
//     results: Genres.results.map((genre) => GenreAdapter(genre)),
//   };
// };
