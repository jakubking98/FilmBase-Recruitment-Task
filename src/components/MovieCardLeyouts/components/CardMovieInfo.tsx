import { Button, Typography } from "@mui/material";
import { CardMovieInfoProps } from "@/utils/types";
import { StyledMovieInfoBox } from "@/styles/muiStyles";

const CardMovieInfo: React.FC<CardMovieInfoProps> = ({ movie, onClick }) => {
  return (
    <StyledMovieInfoBox>
      <Typography variant="h5" gutterBottom>
        {movie.title}
      </Typography>
      <Button variant="contained" onClick={onClick} color="secondary">
        Zobacz
      </Button>
    </StyledMovieInfoBox>
  );
};

export default CardMovieInfo;
