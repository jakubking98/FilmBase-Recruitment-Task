import { StyledMovieCardContainer } from "@/styles/muiStyles";
import { MovieCardContainerProps } from "@/utils/types";

const MovieCardContainer: React.FC<MovieCardContainerProps> = ({
  children,
}) => {
  return <StyledMovieCardContainer>{children}</StyledMovieCardContainer>;
};

export default MovieCardContainer;
