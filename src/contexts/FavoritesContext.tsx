import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface IFavoriteContextType {
  favorites: string[];
  toggleFavorite: (title: string) => void;
}

// type FavoriteContextType = string[];

// STAP 1: Nieuwe context aanmaken
const FavoritesContext = createContext<IFavoriteContextType | null>(null);

// STAP 2: Het gebruiken van de Provider component uit de Context
const FavoritesContextProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (title: string) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((f) => f !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

// const useFavoritesInJS = () => useContext(FavoritesContext);

export const useFavorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw Error(
      "useFavorites kan enkel gebruikt worden in een <FavoritesContextProvider />"
    );
  }

  return favoritesContext;
};
