import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductCard = () => {
  return (
    <Box>
      <img
        width={350}
        src="https://assets.givenchy.com/asset/3c6b26f6-f408-4eaf-8908-35811e9223c4/High-Resolution-JPG/BW30LB15CT001-02-01.jpg?imwidth=1500"
      />
      <Typography sx={{ fontSize: 10 }}>From the runway</Typography>
      <Typography sx={{ fontSize: 12 }}>
        Double-breasted Cocoon jacket in wool with inside-out detail
      </Typography>
      <Typography sx={{ fontSize: 12 }}>₩ 800,000</Typography>
      <Typography sx={{ fontSize: 10 }}>new</Typography>
    </Box>
  );
};

export default ProductCard;
