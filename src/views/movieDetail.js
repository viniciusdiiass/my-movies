import { useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../api/MovieServices";
import { useEffect } from "react";

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MovieService.getMoviesById(id);
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};
