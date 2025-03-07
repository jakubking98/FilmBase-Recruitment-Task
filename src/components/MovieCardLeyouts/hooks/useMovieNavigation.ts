import { useRouter } from "next/router";
import { Movie } from "@/utils/types";

const useMovieNavigation = (movie: Pick<Movie, "id">) => {
  const router = useRouter();

  const navigateToMovie = () => {
    router.push(`/movie/${movie.id}`);
  };

  return { navigateToMovie };
};

export default useMovieNavigation;
