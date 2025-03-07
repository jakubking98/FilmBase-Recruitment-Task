import { Box, SelectChangeEvent } from "@mui/material";
import { getMovieCategories } from "@/utils/api";
import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header/Header";
import { Category, HomePageProps } from "@/utils/types";
import useMovieSearch from "@/components/HomePage/hooks/useMovieSearch";
import SearchAndFilterSection from "@/components/HomePage/components/SearchAndFilterSection";
import MovieListSection from "@/components/HomePage/components/MovieListSection";
import TopRatedMoviesSection from "@/components/HomePage/components/TopRatedMoviesSection";
import { getHomePageServerSideProps } from "@/utils/serverSideProps";
import React from "react";

export default function Home({ popularMovies, topRatedMovies }: HomePageProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getMovieCategories();
        setCategories(data.genres || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const { movieList, isLoading } = useMovieSearch({
    searchTerm,
    selectedCategory,
    selectedYear,
    selectedRating,
  });

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      setSelectedCategory(null);
    },
    []
  );

  const handleYearChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedYear(event.target.value || null);
    },
    []
  );

  const handleCategoryChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      setSelectedCategory(
        event.target.value === "" ? null : Number(event.target.value)
      );
    },
    []
  );

  const handleRatingChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      setSelectedRating(
        event.target.value === "" ? null : Number(event.target.value)
      );
    },
    []
  );

  return (
    <>
      <Box>
        <Header movies={popularMovies} />
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
          <SearchAndFilterSection
            categories={categories}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            selectedYear={selectedYear}
            selectedRating={selectedRating}
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            onYearChange={handleYearChange}
            onRatingChange={handleRatingChange}
          />
          <MovieListSection isLoading={isLoading} movieList={movieList} />
        </Box>
        <TopRatedMoviesSection topRatedMovies={topRatedMovies} />
      </Box>
    </>
  );
}

export const getServerSideProps = getHomePageServerSideProps;
