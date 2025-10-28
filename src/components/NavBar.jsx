import React from "react";
import { CircleUserRound, Search } from "lucide-react";
import { Box } from "@mui/system";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

const NavBar = () => {
  const menuList = ["All", "woman", "man", "kids"];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: 1,
          }}
        >
          <Search color="#010101" />
          <TextField variant="standard" placeholder="search"></TextField>
        </Box>
        <Button
          disableRipple
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: 0.5,
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "none" },
            "&:active": { backgroundColor: "none" },
            "&:focus": { outline: "none" },
          }}
        >
          <Typography
            variant="p"
            sx={{ fontFamily: "Pretendard", fontWeight: 400, color: "#010101" }}
          >
            로그인
          </Typography>
          <CircleUserRound strokeWidth={1.5} color="#010101" />
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
        />
      </Box>
      <Box>
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {menuList.map((menu, index) => (
            <ListItem
              key={index}
              sx={{
                width: "auto",
                "&:hover": { textDecoration: "underline", cursor: "pointer" },
              }}
            >
              <ListItemText primary={menu} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default NavBar;
