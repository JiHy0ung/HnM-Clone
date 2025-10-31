import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, [query]);

  const getProducts = async () => {
    setLoading(true);
    try {
      let searchQuery = query.get("q") || "";

      let url = `https://my-json-server.typicode.com/JiHy0ung/HnM-Clone/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();

      setProductList(data);
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (productList.length === 0) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <p>
          <strong>"{query.get("q")}"</strong> 라는 상품이 없습니다.
        </p>
      </Box>
    );
  }

  return (
    <div>
      <Grid container spacing={1}>
        {productList.map((item, index) => (
          <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductAll;
