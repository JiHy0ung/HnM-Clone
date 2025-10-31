import { Box, Typography } from "@mui/material";
import React from "react";

const Landing = () => {
  return (
    <div>
      <Box
        component="img"
        sx={{
          width: "100%",
          position: "relative",
          transform: {
            sm: "translateX(0)",
            xs: "translateX(-25%) translateY(30%)",
          },
          scale: {
            sm: 1,
            xs: 2.2,
          },
        }}
        src="https://image.hm.com/content/dam/hm/TOOLBOX/Local%20Activities/2024_s09/october_2025/Member-Days-16x9-test.jpg?imwidth=4800"
      />
      <Typography
        sx={{
          position: "absolute",
          top: "calc(400px - 10%)",
          left: "2%",
          color: "#ec0011",
          fontWeight: "900",
          fontSize: "7vw",
          transform: {
            sm: "translateX(0)",
            xs: "translateX(0) translateY(30%)",
          },
          lineHeight: 1.05,
        }}
      >
        멤버 데이
        <br />
        신규&기존 회원
        <br />
        15% OFF
      </Typography>
    </div>
  );
};

export default Landing;
