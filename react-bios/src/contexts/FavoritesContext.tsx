import React, { createContext, PropsWithChildren, useState } from "react";

interface IFavoriteContextType {}

type FavoriteContextType = string[];

// STAP 1: Nieuwe context aanmaken
export const FavoritesContext = createContext<FavoriteContextType | null>(null);

// STAP 2: Het gebruiken van de Provider component uit de Context
const FavoritesContextProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <FavoritesContext.Provider value={favorites}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
