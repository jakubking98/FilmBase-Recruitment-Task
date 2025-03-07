import { Box, Container, Grid, Typography } from "@mui/material";
import { getFavoriteMovies } from "@/utils/favorites";
import BackButton from "@/components/BackButton";
import Loading from "@/components/Loading/Loading";
import { useEffect, useState } from "react";
import { MovieFavorites } from "@/utils/types";
import SimpleMovieCard from "@/components/MovieCardLeyouts/SimpleMovieCard";

const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieFavorites[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const favorites = getFavoriteMovies();
    setFavoriteMovies(favorites);
    setIsLoading(false);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 4,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <BackButton />
        <Typography variant="h4" gutterBottom>
          Ulubione Filmy
        </Typography>
        {isLoading ? (
          <Loading />
        ) : favoriteMovies.length === 0 ? (
          <Typography>Brak filmów dodanych do ulubionych.</Typography>
        ) : (
          <Grid
            container
            spacing={3}
            sx={{
              mt: 2,
              justifyContent: {
                xs: "center",
                sm: "flex-start",
              },
            }}
          >
            {favoriteMovies.map((movie) => (
              <Grid
                key={movie.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{
                  display: "flex",
                  height: "330px",
                  width: "250px",
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                  },
                }}
              >
                <SimpleMovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default FavoritesPage;
