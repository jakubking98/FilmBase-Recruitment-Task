import { MovieDescriptionProps } from "@/utils/types";
import { Typography, Button } from "@mui/material";

const MovieDescription: React.FC<MovieDescriptionProps> = ({
  overview,
  trailerKey,
  onOpenModal,
}) => {
  return (
    <>
      <Typography variant="body1">Opis filmu:</Typography>
      <Typography variant="body1" paragraph>
        {overview}
      </Typography>
      {trailerKey && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={onOpenModal}
        >
          Odpal Trailer
        </Button>
      )}
    </>
  );
};

export default MovieDescription;
