import { createContext, ReactNode, useState } from "react";
import { Cart, CartContextProps } from "../types/types";

export const CartContext = createContext<CartContextProps | null>(null);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);

  const updateCart = (newItem: Cart) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const increaseQuantity = (item: Cart) => {
    const updatedCart: any = cart.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (item: Cart) => {
    const updatedCart: any = cart.map((cartItem) => {
      return cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    setCart(updatedCart);
  };

  const deleteItem = (item: Cart) => {
    const newCart = cart.filter((_cart) => _cart.id !== item.id);
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{ cart, updateCart, increaseQuantity, decreaseQuantity , deleteItem}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
