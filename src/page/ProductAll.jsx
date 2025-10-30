import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [query]);

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    console.log(searchQuery);

    let url = `https://my-json-server.typicode.com/JiHy0ung/Givenchy-Clone/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
  };

  return (
    <div>
      <Grid container spacing={1}>
        {productList.map((item, index) => (
          <Grid key={index} size={3}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductAll;
