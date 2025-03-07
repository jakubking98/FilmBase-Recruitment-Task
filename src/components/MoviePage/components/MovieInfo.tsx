import { MovieInfoProps } from "@/utils/types";
import { Typography, Box, Chip } from "@mui/material";

const MovieInfo: React.FC<MovieInfoProps> = ({
  title,
  releaseDate,
  genres,
  voteAverage,
}) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Data wydania: {releaseDate}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 0 },
          marginY: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ mr: 1 }}>
          Kategorie:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, md: 0 },
          }}
        >
          {genres.map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              sx={{ mr: 1, color: "#fff", width: "fit-content" }}
              variant="outlined"
            />
          ))}
        </Box>
      </Box>
      <Typography variant="h6" sx={{ marginY: 2 }}>
        Ocena: {voteAverage}
      </Typography>
    </>
  );
};

export default MovieInfo;
