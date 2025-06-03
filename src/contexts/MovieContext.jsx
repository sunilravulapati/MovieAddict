import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function isFavorite(imdbID) {
    return favorites.some((movie) => movie.imdbID === imdbID);
  }

  function addToFavorites(movie) {
    if (!isFavorite(movie.imdbID)) {
      setFavorites((prev) => [...prev, movie]);
    }
  }

  function removeFromFavorites(imdbID) {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
  }

  return (
    <MovieContext.Provider
      value={{ favorites, isFavorite, addToFavorites, removeFromFavorites }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
