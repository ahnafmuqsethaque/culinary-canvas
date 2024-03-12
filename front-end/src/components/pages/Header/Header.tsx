import Typography from "@mui/material/Typography";
import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Navigate, useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();
  const btnStyle = {
    color: "#000",
    fontFamily: "Barlow",
    fontSize: "18px",
    fontStyle: "normal",
    fontHeight: "400",
    lineHeight: "150%",
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        p: "18px 0",
        boxSizing: "border-box",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            p: "0 120px",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Beau Rivage",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
            }}
          >
            Culinary Canvas
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button sx={btnStyle}>Home</Button>
            <Button onClick={() => navigate("/about-us")} sx={btnStyle}>
              About Us
            </Button>
            <Button sx={btnStyle}>Track Order</Button>
            <Button sx={btnStyle}>Contact Us</Button>

            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              <ShoppingCartIcon
                sx={{ color: "#000000", height: "45px", width: "45px" }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
