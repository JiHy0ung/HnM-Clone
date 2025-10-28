import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    let response = await fetch(url);
    let data = response.json();

    setProductList(data);
  };

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
