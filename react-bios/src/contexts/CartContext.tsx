import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  title: string;
  poster_path: string;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// ✅ Fix hier: typedeclaratie voor 'children'
interface CartProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    console.log("🛒 Toevoegen aan winkelmandje:", item);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id: number) => {
    console.log("🗑️ Verwijderen uit winkelmandje:", id);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
