import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`product/${item?.id}`);
  };

  return (
    <Box onClick={showDetail}>
      <img width={415} src={item?.img} />
      <Typography sx={{ fontSize: 10 }}>
        {item?.choice ? "From the runway" : " "}
      </Typography>
      <Typography sx={{ fontSize: 12 }}>{item?.title}</Typography>
      <Typography sx={{ fontSize: 12 }}>₩ {item?.price}</Typography>
      <Typography sx={{ fontSize: 10 }}>{item?.new ? "new" : " "}</Typography>
    </Box>
  );
};

export default ProductCard;
