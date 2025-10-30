import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let url =
      " https://my-json-server.typicode.com/JiHy0ung/Givenchy-Clone/products";
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
