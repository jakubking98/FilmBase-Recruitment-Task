import { SelectChangeEvent } from "@mui/material";
import { MouseEvent } from "react";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  genres?: { id: number; name: string }[];
}

export interface Genre {
  id: number;
  name: string;
}

export type MovieFavorites = Pick<Movie, "id" | "title" | "poster_path">;

export interface Category {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface MovieDetails {
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string;
  genres: Genre[];
  vote_average: number;
  overview: string;
}

export interface HomePageProps {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
}
export type MovieCardData = Pick<
  Movie,
  "id" | "title" | "release_date" | "backdrop_path" | "overview" | "poster_path"
>;
export interface SimpleMovieCardProps {
  movie: MovieFavorites;
}

export interface MovieCardProps {
  movie: MovieCardData;
  isActive?: boolean;
}

export interface MovieCarouselProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie, index: number) => void;
  activeIndex: number;
}

export interface HeaderBackgroundProps {
  imageUrl: string | null;
  children: React.ReactNode;
}

export interface HeaderProps {
  movies: MovieCardData[];
}

export interface SearchAndFilterSectionProps {
  categories: Category[];
  searchTerm: string;
  selectedCategory: number | null;
  selectedYear: string | null;
  selectedRating: number | null;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (event: SelectChangeEvent<unknown>) => void;
  onYearChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRatingChange: (event: SelectChangeEvent<unknown>) => void;
}

export interface MovieListSectionProps {
  isLoading: boolean;
  movieList: Movie[];
}

export interface TopRatedMoviesSectionProps {
  topRatedMovies: Movie[];
}

export interface UseMovieSearchResult {
  movieList: Movie[];
  isLoading: boolean;
}

export interface UseMovieSearchParams {
  searchTerm: string;
  selectedCategory: number | null;
  selectedYear: string | null;
  selectedRating: number | null;
}

export interface CardMovieInfoProps {
  movie: Pick<Movie, "id" | "title">;
  onClick: () => void;
}

export interface CardMoviePosterProps {
  movie: Pick<Movie, "title" | "poster_path">;
}

export interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface MovieCardContainerProps {
  children: React.ReactNode;
}

export interface CastListProps {
  cast: CastMember[];
}

export interface MovieDescriptionProps {
  overview: string;
  trailerKey: string | null;
  onOpenModal: () => void;
}

export interface MovieInfoProps {
  title: string;
  releaseDate: string;
  genres: Genre[];
  voteAverage: number;
}

export interface MoviePosterProps {
  posterPath: string | null;
  title: string;
}

export interface TrailerModalProps {
  open: boolean;
  onClose: () => void;
  trailerKey: string | null;
}

export interface UseMovieDataResult {
  movie: MovieDetails | null;
  isLoading: boolean;
  trailerKey: string | null;
  cast: CastMember[];
}
