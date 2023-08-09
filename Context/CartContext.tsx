import { createContext, ReactNode, useState } from "react";
import { Cart, CartContextProps } from "../types/types";

export const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const updateCart = (newItem: Cart) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };
  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
