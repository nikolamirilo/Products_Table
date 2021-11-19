import { useState, useContext, useEffect, createContext } from "react";
import data from "../data.json";

const ProductsContext = createContext(null);

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.products);
  }, [products]);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};
