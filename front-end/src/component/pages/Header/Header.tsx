import Typography from "@mui/material/Typography";
import { FC, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import { useState } from "react";

export const Header: FC = () => {
  // useEffect(() => {
  //   let temp = Object.keys(localStorage);
  //   console.log(temp + "temp is");
  //   console.log("counter  1 is" + localStorage.getItem);
  //   let finalCount = 0;
  //   for (let key in temp) {
  //     console.log(key + "keyis");
  //     if (
  //       typeof localStorage.getItem(key) == "string" &&
  //       Number(localStorage.getItem(key))
  //     )
  //       finalCount += Number(localStorage.getItem(key));
  //   }
  //   console.log(finalCount);
  // }, [localStorage]);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
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
        //justifyContent: "center",
        // alignItems: "center",
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
            // alignItems: "center",
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
          <Stack direction="row" spacing={2} alignItems="center">
            <Link underline="hover" sx={btnStyle} onClick={() => navigate("/")}>
              Home
            </Link>
            <Link
              underline="hover"
              onClick={() => navigate("/about-us")}
              sx={btnStyle}
            >
              About Us
            </Link>
            <Link underline="hover" sx={btnStyle}>
              Track Order
            </Link>
            <Link underline="hover" sx={btnStyle}>
              Contact Us
            </Link>

            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              <Badge badgeContent={count} color="error">
                <ShoppingCartIcon
                  sx={{ color: "#000000", height: "40px", width: "40px" }}
                />
              </Badge>
            </IconButton>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
