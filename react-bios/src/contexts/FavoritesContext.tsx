import React, { createContext } from "react";

// STAP 1: Nieuwe context aanmaken
const FavoritesContext = createContext(null);

// STAP 2: Het gebruiken van de Provider component uit de Context
const FavoritesContextProvider = () => {
  return <FavoritesContext.Provider value={null}></FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
