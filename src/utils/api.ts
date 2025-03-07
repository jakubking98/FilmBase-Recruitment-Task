const BASE_URL = "https://api.themoviedb.org/3";

const getApiKey = () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("Brak klucza API w zmiennych środowiskowych.");
  }
  return apiKey;
};

export const getPopularMovies = async () => {
  const apiKey = getApiKey();
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${apiKey}&language=pl-PL&page=1`
  );
  if (res.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (res.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!res.ok) {
    throw new Error(`Błąd sieci: Status ${res.status}`);
  }
  const data = await res.json();
  return data;
};

export const getMovieCategories = async () => {
  const apiKey = getApiKey();
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${apiKey}&language=pl-PL`
  );
  if (response.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (response.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!response.ok) {
    throw new Error(`Błąd sieci: Status ${response.status}`);
  }
  return response.json();
};

export const getMoviesBySearch = async (
  query: string,
  year: string,
  rating: number | null
) => {
  const apiKey = getApiKey();
  let url = `${BASE_URL}/search/movie?api_key=${apiKey}&language=pl-PL&query=${encodeURIComponent(
    query
  )}&page=1&include_adult=false`;

  if (year) {
    url += `&year=${year}`;
  }
  if (rating !== null) {
    url += `&vote_average.gte=${rating}`;
  }

  const response = await fetch(url);
  if (response.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (response.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!response.ok) {
    throw new Error(`Błąd sieci: Status ${response.status}`);
  }
  return response.json();
};

export const getMoviesByCategory = async (
  categoryId: number,
  year: string,
  rating: number | null
) => {
  const apiKey = getApiKey();
  let url = `${BASE_URL}/discover/movie?api_key=${apiKey}&language=pl-PL&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${categoryId}&with_watch_monetization_types=flatrate`;

  if (year) {
    url += `&year=${year}`;
  }

  if (rating !== null) {
    url += `&vote_average.gte=${rating}`;
  }
  const response = await fetch(url);
  if (response.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (response.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!response.ok) {
    throw new Error(`Błąd sieci: Status ${response.status}`);
  }
  return response.json();
};

export const getMovieDetails = async (movieId: number) => {
  const apiKey = getApiKey();
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${apiKey}&language=pl-PL`
  );
  if (res.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (res.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!res.ok) {
    throw new Error(`Błąd sieci: Status ${res.status}`);
  }
  return res.json();
};

export const getMovieVideos = async (movieId: number) => {
  const apiKey = getApiKey();
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${apiKey}&language=pl-PL`
  );
  if (res.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (res.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!res.ok) {
    throw new Error(`Błąd sieci: Status ${res.status}`);
  }
  return res.json();
};

export const getMovieCredits = async (movieId: number) => {
  const apiKey = getApiKey();
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${apiKey}&language=pl-PL`
  );
  if (res.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (res.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!res.ok) {
    throw new Error(`Błąd sieci: Status ${res.status}`);
  }
  return res.json();
};

export const getTopRatedMovies = async () => {
  const apiKey = getApiKey();
  const url = `${BASE_URL}/movie/top_rated?api_key=${apiKey}&language=pl-PL`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const getRandomMovies = async () => {
  const apiKey = getApiKey();
  const page = Math.floor(Math.random() * 500) + 1; // Losowa strona z wyników
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${apiKey}&language=pl-PL&page=${page}`
  );
  if (response.status === 401) {
    throw new Error("Nieautoryzowany: Nieprawidłowy klucz API.");
  } else if (response.status === 404) {
    throw new Error("Nie znaleziono: Szukany zasób nie istnieje.");
  } else if (!response.ok) {
    throw new Error(`Błąd sieci: Status ${response.status}`);
  }
  const data = await response.json();
  const numberOfMovies = Math.min(data.results.length, 20);
  const randomMovies = [];
  while (randomMovies.length < numberOfMovies && data.results.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    randomMovies.push(data.results.splice(randomIndex, 1)[0]);
  }
  return { results: randomMovies };
};
