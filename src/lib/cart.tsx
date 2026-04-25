'use client';
import React, { createContext, useContext, useState } from "react";


type Item = {
  name: string;
  price: number;
};


type CartContextType = {
  cart: Item[];
  addToCart: (item: Item) => void;
};


const CartContext = createContext<CartContextType | null>(null);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Item[]>([]);


  const addToCart = (item: Item) => {
    setCart((prev) => [...prev, item]);
  };

   return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside provider");
  return ctx;
};