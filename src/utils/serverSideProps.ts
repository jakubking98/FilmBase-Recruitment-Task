import { GetServerSideProps } from "next";
import { getPopularMovies, getTopRatedMovies } from "@/utils/api";
import { HomePageProps } from "@/utils/types";

export const getHomePageServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  try {
    const popularMoviesData = await getPopularMovies();
    const topRatedMoviesData = await getTopRatedMovies();

    return {
      props: {
        popularMovies: popularMoviesData.results || [],
        topRatedMovies: topRatedMoviesData.results || [],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        popularMovies: [],
        topRatedMovies: [],
      },
    };
  }
};
