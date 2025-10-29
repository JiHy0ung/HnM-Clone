import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={0} sx={{ p: 4, width: "100%" }}>
        <Typography variant="h6" textAlign="left" mb={2}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={(e) => loginUser(e)}>
          <Typography variant="body2" align="left">
            email *
          </Typography>
          <TextField
            size="small"
            fullWidth
            type="email"
            margin="normal"
            variant="outlined"
            sx={{ mb: 2, mt: 1 }}
            InputProps={{
              sx: {
                borderRadius: 0,
                m: 0,
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#010101",
                  borderWidth: "1px",
                },
              },
            }}
          />
          <Typography variant="body2" align="left">
            password *
          </Typography>
          <TextField
            size="small"
            fullWidth
            type="password"
            margin="normal"
            variant="outlined"
            sx={{ mb: 1, mt: 1 }}
            InputProps={{
              sx: {
                borderRadius: 0,
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#010101",
                  borderWidth: "1px",
                },
              },
            }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 2, mb: 1, borderRadius: 0, backgroundColor: "#010101" }}
          >
            로그인
          </Button>
          <Typography variant="body2" align="left">
            계정이 없으신가요? <a href="">회원가입</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
