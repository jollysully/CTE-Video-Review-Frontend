import React, { useState, useEffect } from "react";

import { getTopRatedMovies } from "../../api/movie";
import { useNotification } from "../../hooks";
import GridContainer from "../GridContainer";
import MovieList from "./MovieList";

export default function TopRatedRelatedVideos() {
  const [movies, setMovies] = useState([]);
  const { updateNotification } = useNotification();

  //gets doc videos from db which is selected fro drop down
  const fetchMovies = async (signal) => {
    const { error, movies } = await getTopRatedMovies("Related Videos", signal);
    if (error) return updateNotification("error", error);

    setMovies([...movies]);
  };

  //built in api to abort requests
  useEffect(() => {
    const ac = new AbortController();
    fetchMovies(ac.signal);
    return () => {
      ac.abort();
    };
  }, []);

  return <MovieList movies={movies} title="Related Videos" />;
}