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
      <Box
        sx={{
          width: 415,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Box
          component="img"
          width={415}
          src={item?.img}
          sx={{
            transition: "transform 0.5s ease",
            display: "block",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>
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
