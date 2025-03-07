import { Fade, Grid, Typography } from "@mui/material";
import Loading from "@/components/Loading/Loading";
import { MovieListSectionProps } from "@/utils/types";
import SimpleMovieCard from "@/components/MovieCardLeyouts/SimpleMovieCard";
import React, { useMemo } from "react";

const MovieListSection: React.FC<MovieListSectionProps> = ({
  isLoading,
  movieList,
}) => {
  const renderedMovieList = useMemo(() => {
    return isLoading ? (
      <Loading />
    ) : movieList.length === 0 ? (
      <Typography>Brak filmów do wyświetlenia</Typography>
    ) : (
      movieList.slice(0, 12).map((movie) => (
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
      ))
    );
  }, [isLoading, movieList]);

  return (
    <Fade in={!isLoading} timeout={500} key={movieList.length}>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 2,
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "1600px",
        }}
      >
        {renderedMovieList}
      </Grid>
    </Fade>
  );
};

export default MovieListSection;
