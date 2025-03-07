import {
  addMovieToFavorites,
  isMovieInFavorites,
  removeMovieFromFavorites,
} from "@/utils/favorites";
import { useEffect, useState } from "react";
import { Movie } from "@/utils/types";

interface UseFavoritesResult {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const useFavorites = (
  movie: Pick<Movie, "id" | "title" | "poster_path">
): UseFavoritesResult => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(isMovieInFavorites(movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeMovieFromFavorites(movie.id);
    } else {
      addMovieToFavorites({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      });
    }
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorites;
