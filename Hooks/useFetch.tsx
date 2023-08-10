import React, { useState, useEffect } from "react";
import { Products as ProductType } from "../types/types";

export const getProducts = () => {
  const [products, setProducts] = useState<ProductType[] | null>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("http://192.168.43.181:5000/products");

      const data = await res.json();

      if (!res.ok) {
        throw Error(data.error);
      }
      setLoading(false);
      setProducts(data);
    } catch (error) {
      setLoading(false);
      setProducts([]);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, fetchProducts };
};
