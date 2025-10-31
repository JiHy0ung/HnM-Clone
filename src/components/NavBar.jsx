import React, { useState } from "react";
import { CircleUserRound, LogOut, Search } from "lucide-react";
import { Box } from "@mui/system";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const [open, setOpen] = useState(false);
  const menuList = ["ALL", "WOMEN", "MEN", "KIDS"];
  const navigate = useNavigate();

  const goToLogin = () => {
    if (authenticate) {
      setAuthenticate(false);
    } else {
      navigate("/login");
    }
  };

  const goToLanding = () => {
    navigate("/");
  };

  const goToProducts = () => {
    navigate("/products");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`products/?q=${keyword}`);
    }
  };

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          m: 2,
        }}
      >
        <Box
          component="img"
          onClick={goToLanding}
          width={50}
          style={{ cursor: "pointer" }}
          src="/H&M-Logo.svg.png"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
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
            <Search onClick={() => toggleDrawer(true)} color="#010101" />
            <Drawer
              anchor="right"
              open={open}
              onClose={() => toggleDrawer(false)}
            >
              <TextField
                variant="standard"
                placeholder="search"
                onKeyDown={(e) => search(e)}
                sx={{ m: 4 }}
              ></TextField>
            </Drawer>
          </Box>
          {authenticate ? (
            <LogOut
              style={{ cursor: "pointer" }}
              onClick={goToLogin}
              color="#010101"
            />
          ) : (
            <CircleUserRound
              style={{ cursor: "pointer" }}
              onClick={goToLogin}
              color="#010101"
            />
          )}
        </Box>
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
              onClick={menu === "ALL" ? goToProducts : undefined}
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
