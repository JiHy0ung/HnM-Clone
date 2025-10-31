import React, { useState } from "react";
import { CircleUserRound, LogOut, Menu, Search } from "lucide-react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleSearchDrawer = (newOpen) => {
    setSearchOpen(newOpen);
  };

  const toggleMenuDrawer = (newOpen) => {
    setMenuOpen(newOpen);
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
            <Search onClick={() => toggleSearchDrawer(true)} color="#010101" />
            <Drawer
              anchor="right"
              open={searchOpen}
              onClose={() => toggleSearchDrawer(false)}
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
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <Menu
              style={{ cursor: "pointer" }}
              onClick={() => toggleMenuDrawer(true)}
              color="#010101"
            />
            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={() => toggleMenuDrawer(false)}
            >
              {menuList.map((menu, index) => (
                <Typography
                  key={index}
                  sx={{
                    width: "auto",
                    mx: 10,
                    mt: 3,
                  }}
                  onClick={menu === "ALL" ? goToProducts : undefined}
                >
                  {menu}
                </Typography>
              ))}
            </Drawer>
          </Box>
        </Box>
      </Box>
      <Box>
        <List
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
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
