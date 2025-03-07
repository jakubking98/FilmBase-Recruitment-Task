import { Typography } from "@mui/material";
import { memo } from "react";
import { SimpleMovieCardProps } from "@/utils/types";
import FavoriteButton from "./components/FavoriteButton";
import useFavorites from "./hooks/useFavorites";
import useMovieNavigation from "./hooks/useMovieNavigation";
import { MouseEvent } from "react";
import CardMoviePoster from "./components/CardMoviePoster";
import { CardContainer, MovieInfo } from "@/styles/muiStyles";

const SimpleMovieCardComponent: React.FC<SimpleMovieCardProps> = ({
  movie,
}) => {
  const { isFavorite, toggleFavorite } = useFavorites(movie);
  const { navigateToMovie } = useMovieNavigation(movie);

  const handleFavoriteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toggleFavorite();
  };

  return (
    <CardContainer onClick={navigateToMovie}>
      <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick} />
      {movie.poster_path && <CardMoviePoster movie={movie} />}
      <MovieInfo className="movie-info">
        <Typography variant="h5" gutterBottom>
          {movie.title}
        </Typography>
      </MovieInfo>
    </CardContainer>
  );
};

const SimpleMovieCard = memo(SimpleMovieCardComponent);
export default SimpleMovieCard;
