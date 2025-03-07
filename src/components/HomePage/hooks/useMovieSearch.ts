import { useState, useEffect, useDeferredValue } from "react";
import {
  getMoviesBySearch,
  getMoviesByCategory,
  getRandomMovies,
} from "@/utils/api";
import {
  Movie,
  UseMovieSearchParams,
  UseMovieSearchResult,
} from "@/utils/types";

const useMovieSearch = ({
  searchTerm,
  selectedCategory,
  selectedYear,
  selectedRating,
}: UseMovieSearchParams): UseMovieSearchResult => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        let data;
        if (deferredSearchTerm) {
          data = await getMoviesBySearch(
            deferredSearchTerm,
            selectedYear || "",
            selectedRating
          );
        } else if (selectedCategory) {
          data = await getMoviesByCategory(
            selectedCategory,
            selectedYear || "",
            selectedRating
          );
        } else {
          data = await getRandomMovies();
        }
        setMovieList(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovieList([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [deferredSearchTerm, selectedCategory, selectedYear, selectedRating]);

  return { movieList, isLoading };
};

export default useMovieSearch;
