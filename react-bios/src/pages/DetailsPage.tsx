import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import movies from "../utils/movies.json"; // Pas dit pad aan naar waar je je data bewaart

const DetailsPage = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!movie) {
    return <p className="text-center mt-10 text-red-500">Film niet gevonden</p>;
  }

  console.log("Poster Path:", movie.poster_path); // Controleer of de poster_path correct is

  const handleAddToCart = () => {
    console.log("Toevoegen aan winkelmandje:", {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      price: movie.price, // Zorg ervoor dat je prijs doorgeeft
    });

    addToCart({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      price: movie.price, // Zorg ervoor dat je prijs doorgeeft
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Afbeelding links */}
        <img
          src={new URL(`../assets/images/${movie.poster_path}`, import.meta.url).href}
          alt={movie.title}
          className="w-64 h-auto rounded-xl shadow-lg"
        />

        {/* Informatie rechts */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-700 mb-4">
            Onze niet-geweven polypropyleen tassen zijn duurzaam, licht, stevig en personaliseerbaar.
            Ideaal voor milieubewuste promotie!
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Duurzaam & herbruikbaar</li>
            <li>Waterbestendig en scheurvast</li>
            <li>Personalisatie mogelijk</li>
            <li>Professionele uitstraling</li>
          </ul>

          {/* Prijs weergeven */}
          <div className="mb-6">
            <span className="text-xl font-bold text-green-600">Prijs: €{movie.price.toFixed(2)}</span>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow"
            >
              Toevoegen aan winkelmandje 🛒
            </button>

            <button
              onClick={() => navigate("/personalize", { state: { movie } })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow"
            >
              Personaliseer je tas ✏️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
