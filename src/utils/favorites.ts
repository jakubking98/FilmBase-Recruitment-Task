interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const FAVORITES_KEY = "favoriteMovies";

export const getFavoriteMovies = (): Movie[] => {
  if (typeof window !== "undefined") {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  }
  return [];
};

export const addMovieToFavorites = (movie: Movie) => {
  if (typeof window !== "undefined") {
    const favorites = getFavoriteMovies();
    const isMovieInFavorites = favorites.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (!isMovieInFavorites) {
      const updatedFavorites = [...favorites, movie];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    }
  }
};

export const removeMovieFromFavorites = (movieId: number) => {
  if (typeof window !== "undefined") {
    const favorites = getFavoriteMovies();
    const updatedFavorites = favorites.filter(
      (favMovie) => favMovie.id !== movieId
    );
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  }
};

export const isMovieInFavorites = (movieId: number): boolean => {
  if (typeof window !== "undefined") {
    const favorites = getFavoriteMovies();
    return favorites.some((favMovie) => favMovie.id === movieId);
  }
  return false;
};
