import { memo } from "react";
import { MovieCardProps } from "@/utils/types";
import MovieCardContainer from "./components/MovieCardContainer";
import FavoriteButton from "./components/FavoriteButton";
import useFavorites from "./hooks/useFavorites";
import useMovieNavigation from "./hooks/useMovieNavigation";
import CardMovieInfo from "./components/CardMovieInfo";
import CardMoviePoster from "./components/CardMoviePoster";

const MovieCardComponent: React.FC<MovieCardProps> = ({ movie, isActive }) => {
  const { isFavorite, toggleFavorite } = useFavorites(movie);
  const { navigateToMovie } = useMovieNavigation(movie);

  return (
    <MovieCardContainer>
      <CardMoviePoster movie={movie} />
      <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
      {isActive && <CardMovieInfo movie={movie} onClick={navigateToMovie} />}
    </MovieCardContainer>
  );
};

const MovieCard = memo(MovieCardComponent);
export default MovieCard;
