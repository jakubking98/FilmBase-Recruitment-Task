import React from "react";
import { Box, Typography } from "@mui/material";
import HeaderBackground from "./components/HeaderBackground";
import MovieCarousel from "./components/MovieCarousel";
import { HeaderProps, Movie } from "@/utils/types";
import { useHeaderMovie } from "./hooks/useHeaderMovie";
import { useHeaderImage } from "./hooks/useHeaderImage";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";

const Header: React.FC<HeaderProps> = ({ movies }) => {
  const { selectedMovie, activeIndex, handleMovieClick } = useHeaderMovie({
    movies: movies as Movie[],
  });
  const headerImage = useHeaderImage(selectedMovie);

  return (
    <Box
      sx={{
        width: "100vw",
        boxSizing: "border-box",
        backgroundColor: "#000",
      }}
    >
      {selectedMovie && (
        <HeaderBackground imageUrl={headerImage}>
          <HeaderNavigation />
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              textShadow: "2px 2px 2px #000",
              marginTop: "auto",
              marginBottom: "0",
              paddingX: { xs: 3, md: 8 },
              boxSizing: "border-box",
            }}
            gutterBottom
          >
            Top 20
          </Typography>
          <Box
            sx={{
              height: "380px",
              overflow: "hidden",
              display: "flex",
              position: "relative",
              paddingX: { xs: 3, md: 8 },
              paddingBottom: 3,
              paddingTop: 0,
              boxSizing: "border-box",
            }}
          >
            <MovieCarousel
              movies={movies as Movie[]}
              onMovieSelect={handleMovieClick}
              activeIndex={activeIndex}
            />
          </Box>
        </HeaderBackground>
      )}
    </Box>
  );
};

export default Header;
