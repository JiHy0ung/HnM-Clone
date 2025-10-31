import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/JiHy0ung/Givenchy-Clone/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        gap: { xs: 2, sm: 10 },
      }}
    >
      <Box component="img" src={product?.img} />
      <Box>
        <Typography sx={{ mb: 1, color: "#ec0011", fontWeight: 700 }}>
          {product?.choice ? "consious choice" : ""}
        </Typography>
        <Typography>{product?.title}</Typography>
        <Typography>{product?.price}</Typography>
        <FormControl fullWidth>
          <Select size="small">
            {product?.size.map((size) => (
              <MenuItem>{size}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          sx={{ mt: 2, mb: 1, borderRadius: 0, backgroundColor: "#010101" }}
        >
          Add to Bag
        </Button>
      </Box>
    </Container>
  );
};

export default ProductDetail;
