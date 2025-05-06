import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Bereken totaalprijs, zorg ervoor dat elk item een geldige prijs heeft
  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0), 0);


  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Winkelmandje</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Je winkelmandje is leeg.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <img
                src={
                  item.personalizedImage
                    ? item.personalizedImage
                    : new URL(`../assets/images/${item.poster_path}`, import.meta.url).href
                }
                alt={item.title}
                className="w-48 h-auto rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {item.personalizedImage && (
                <span className="text-sm text-green-600 font-medium mb-2">Gepersonaliseerd</span>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item.id);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
              >
                Verwijder
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Totaal: €{totalPrice.toFixed(2)}</h2> {/* Totaalprijs */}
        <button
          onClick={() => navigate("/products")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl mt-4"
        >
          Verder winkelen
        </button>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => navigate("/offerte")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl"
        >
          Offerte aanvragen
        </button>
      </div>
    </div>
  );
};

export default CartPage;
