import { useState, useEffect } from "react";
import { Movie } from "@/utils/types";

interface useHeaderMovieProps {
  movies: Movie[];
}

interface useHeaderMovieReturnType {
  selectedMovie: Movie | null;
  activeIndex: number;
  handleMovieClick: (movie: Movie, index: number) => void;
}

export const useHeaderMovie = ({
  movies,
}: useHeaderMovieProps): useHeaderMovieReturnType => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (movies.length > 0) {
      setSelectedMovie(movies[0]);
      setActiveIndex(0);
    }
  }, [movies]);

  const handleMovieClick = (movie: Movie, index: number) => {
    setSelectedMovie(movie);
    setActiveIndex(index);
  };

  return { selectedMovie, activeIndex, handleMovieClick };
};
