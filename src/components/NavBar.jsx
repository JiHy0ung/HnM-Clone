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
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["All", "woman", "man", "kids"];
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

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

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
          <TextField
            variant="standard"
            placeholder="search"
            onKeyDown={(e) => search(e)}
          ></TextField>
        </Box>
        <Button
          onClick={goToLogin}
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
            {authenticate ? "로그아웃" : "로그인"}
          </Typography>
          <CircleUserRound strokeWidth={1.5} color="#010101" />
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          onClick={goToLanding}
          width={100}
          style={{ cursor: "pointer" }}
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
