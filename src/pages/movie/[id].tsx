import { useRouter } from "next/router";
import { Typography, Container, Box, Grid } from "@mui/material";
import Loading from "@/components/Loading/Loading";
import BackButton from "@/components/BackButton";

import { useState } from "react";
import useMovieData from "@/components/MoviePage/hooks/useMovieData";
import MovieDescription from "@/components/MoviePage/components/MovieDescription";
import CastList from "@/components/MoviePage/components/CastList";
import TrailerModal from "@/components/MoviePage/components/TrailerModal";
import MoviePoster from "@/components/MoviePage/components/MoviePoster";
import MovieInfo from "@/components/MoviePage/components/MovieInfo";

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { movie, isLoading, trailerKey, cast } = useMovieData(id);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  if (isLoading) {
    return <Loading />;
  }

  if (!movie) {
    return (
      <Container>
        <Typography variant="h4">Movie not found</Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{ backgroundColor: "#000", color: "#fff", py: 4, minHeight: "100vh" }}
    >
      <Container maxWidth="lg">
        <BackButton />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <MoviePoster posterPath={movie.poster_path} title={movie.title} />
          </Grid>
          <Grid item xs={12} md={8}>
            <MovieInfo
              title={movie.title}
              releaseDate={movie.release_date}
              genres={movie.genres}
              voteAverage={movie.vote_average}
            />
            <MovieDescription
              overview={movie.overview}
              trailerKey={trailerKey}
              onOpenModal={handleOpenModal}
            />
            <CastList cast={cast} />
          </Grid>
        </Grid>
      </Container>
      <TrailerModal
        open={openModal}
        onClose={handleCloseModal}
        trailerKey={trailerKey}
      />
    </Box>
  );
};

export default MoviePage;
