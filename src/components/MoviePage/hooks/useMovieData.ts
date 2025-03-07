import { useState, useEffect } from "react";
import { getMovieDetails, getMovieVideos, getMovieCredits } from "@/utils/api";
import {
  CastMember,
  MovieDetails,
  MovieVideo,
  UseMovieDataResult,
} from "@/utils/types";

const useMovieData = (
  id: string | string[] | undefined
): UseMovieDataResult => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const movieData = await getMovieDetails(Number(id));
          setMovie(movieData);

          const videosData = await getMovieVideos(Number(id));
          const trailer = videosData.results.find(
            (video: MovieVideo) =>
              video.site === "YouTube" && video.type === "Trailer"
          );
          setTrailerKey(trailer?.key || null);

          const creditsData = await getMovieCredits(Number(id));
          setCast(creditsData.cast.slice(0, 10));
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setMovie(null);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchMovie();
  }, [id]);

  return { movie, isLoading, trailerKey, cast };
};

export default useMovieData;
