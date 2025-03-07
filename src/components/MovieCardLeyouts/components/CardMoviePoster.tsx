import { CardMoviePosterProps } from "@/utils/types";
import { MoviePosterStyled } from "@/styles/muiStyles";

const CardMoviePoster: React.FC<CardMoviePosterProps> = ({ movie }) => {
  return (
    <MoviePosterStyled
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title}
      fill
      sizes="100vw"
      loading="lazy"
    />
  );
};

export default CardMoviePoster;
