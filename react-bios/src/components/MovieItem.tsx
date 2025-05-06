import React from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../contexts/FavoritesContext";
import { useCart } from "../contexts/CartContext"; // Nieuwe import
import { useNavigate } from "react-router-dom";

interface IMovieItemProps {
  id: number;
  title: string;
  image: string;
  price: number; // Toegevoegd om de prijs door te geven
  isSmall?: boolean;
}

const MovieItem = ({ title, image, id, price, isSmall }: IMovieItemProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart, removeFromCart, cartItems } = useCart(); // Haal de addToCart en removeFromCart functies op uit de context
  const navigate = useNavigate();

  // Controleer of de film al in het winkelmandje zit
  const isInCart = cartItems.some((item) => item.id === id);

  // Handle toevoegen/verwijderen van de film uit het winkelmandje
  const handleAddToCart = () => {
    if (isInCart) {
      // Als de film al in het winkelmandje zit, verwijder deze uit het winkelmandje
      removeFromCart(id);
    } else {
      // Anders voeg de film toe aan het winkelmandje
      console.log("Adding to cart:", { id, title, poster_path: image, price });

      addToCart({
        id,
        title,
        poster_path: image,
        price,  // Zorg ervoor dat de prijs hier correct wordt doorgegeven
      });
    }
  };

  return (
    <div
      onClick={() => {
        navigate(`/details/${id}`);
      }}
      className="rounded-lg shadow-2xl overflow-clip hover:scale-105 relative"
    >
      <img
        src={new URL(`../assets/images/${image}`, import.meta.url).href}
        alt={title}
        className={isSmall ? "w-48 h-auto" : "w-full"} // Als isSmall true is, kleiner maken
      />
      <h1 className="text-3xl font-bold text-center my-4">{title}</h1>

      {/* Favorieten knop */}
      <button
        onClick={(event) => {
          event.stopPropagation();
          toggleFavorite(title);
        }}
        className="bg-red-600 hover:bg-red-700 rounded-full p-2 absolute top-1 right-2 text-white text-3xl"
      >
        {favorites.includes(title) ? (
          <MdFavorite />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </button>

      {/* Winkelmandje knop */}
      <button
        onClick={(event) => {
          event.stopPropagation();
          handleAddToCart();
        }}
        className={`absolute top-1 right-16 p-2 text-white text-3xl rounded-full ${
          isInCart ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        🛒 {/* Icon voor winkelmandje */}
      </button>
    </div>
  );
};

export default MovieItem;
