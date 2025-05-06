import React from "react";
import { Link } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import MyButton from "../components/MyButton";
import movies from "../utils/movies.json";
const ProductsPage = () => {
    return (
        <>
    
          {/* Flex container voor de films */}
          <div className="flex flex-wrap justify-start gap-2 p-4">
            {movies.map((m) => (
              <MovieItem
                key={m.id}
                id={m.id}
                title={m.title}
                image={m.poster_path}
                price={m.price}
                isSmall={true} // Geef isSmall door om de items kleiner weer te geven
              />
            ))}
          </div>
        </>
      );
};

export default ProductsPage;
