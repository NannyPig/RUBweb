import React, { useContext } from "react";
import { FavoritesContext, useFavorites } from "../contexts/FavoritesContext";

const FavoritesPage = () => {
  //   const { favorites } = useContext(FavoritesContext);

  const { favorites } = useFavorites();

  if (!favorites.length) {
    return <p>Geen favorieten.</p>;
  }

  return (
    <div>
      {favorites.map((f) => (
        <p key={f}>{f}</p>
      ))}
    </div>
  );
};

export default FavoritesPage;
