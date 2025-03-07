import { useState, useEffect } from "react";
import { getMovieDetails } from "@/utils/api";
import { Movie } from "@/utils/types";

export const useHeaderImage = (selectedMovie: Movie | null) => {
  const [headerImage, setHeaderImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeaderImage = async () => {
      if (selectedMovie) {
        try {
          const movieDetails = await getMovieDetails(selectedMovie.id);
          const imageUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
          setHeaderImage(imageUrl);
        } catch (error) {
          console.error("Error fetching header image:", error);
          setHeaderImage(null);
        }
      } else {
        setHeaderImage(null);
      }
    };

    fetchHeaderImage();
  }, [selectedMovie]);

  return headerImage;
};
