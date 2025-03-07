import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Paper } from "@mui/material";
import { MovieCarouselProps, Movie } from "@/utils/types";
import MovieCard from "@/components/MovieCardLeyouts/MovieCard";

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  onMovieSelect,
  activeIndex,
}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      initialSlide={0}
      breakpoints={{
        640: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: "auto",
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      {movies.map((movie: Movie, index: number) => (
        <SwiperSlide key={movie.id}>
          <Paper
            sx={{
              cursor: "pointer",
              width: index === activeIndex ? 250 : 150,
              height: index === activeIndex ? 350 : 200,
              boxSizing: "border-box",
              borderRadius: "10px",
              background: "#000",
              transition: "all 0.3s ease",
              zIndex: index === activeIndex ? 1 : 0,
            }}
            onClick={() => onMovieSelect(movie, index)}
          >
            <MovieCard movie={movie} isActive={index === activeIndex} />
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieCarousel;
