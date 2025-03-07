import { Box, Grid, Typography } from "@mui/material";
import { TopRatedMoviesSectionProps } from "@/utils/types";
import SimpleMovieCard from "@/components/MovieCardLeyouts/SimpleMovieCard";

const TopRatedMoviesSection: React.FC<TopRatedMoviesSectionProps> = ({
  topRatedMovies,
}) => {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        backgroundColor: "#000",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          width: "100%",
          maxWidth: "1600px",
          paddingY: 3,
          boxSizing: "border-box",
        }}
      >
        Najlepiej oceniane filmy
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 2,
          justifyContent: "flex-start",
          maxWidth: "1600px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {topRatedMovies.slice(0, 12).map((movie) => (
          <Grid
            item
            key={movie.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              height: "330px",
              width: "250px",
            }}
          >
            <SimpleMovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopRatedMoviesSection;
