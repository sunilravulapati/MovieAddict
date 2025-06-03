const API_KEY = "442ffc35";
const BASE_URL = "https://www.omdbapi.com/";

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}?s=batman&apikey=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies.");
  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
  if (!res.ok) throw new Error("Search failed.");
  return res.json();
}