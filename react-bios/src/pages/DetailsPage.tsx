import React from "react";
import { useParams } from "react-router-dom";

import movies from "../utils/movies.json";

const DetailsPage = () => {
  const { id } = useParams();

  if (!id) {
    return <p>Niets gevonden.</p>;
  }
  const movie = movies.find((m) => m.id === +id);

  if (!movie) {
    return <p>Geen film gevonden met id: {id}</p>;
  }

  return (
    <div>
      <img
        src={
          new URL(`../assets/images/${movie.backdrop_path}`, import.meta.url)
            .href
        }
        className="w-full"
      />
      <h1>{movie.title}</h1>
    </div>
  );
};

export default DetailsPage;
