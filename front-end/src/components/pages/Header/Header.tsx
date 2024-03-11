import Typography from "@mui/material/Typography";
import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Header: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
        <Typography
          variant="h6"
          sx={{ color: "#000000" , fontSize: "30px"}}
        >
          Culinary Canvas
        </Typography>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Home</Button>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>About Us</Button>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Track Order</Button>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Contact Us</Button>

          <IconButton color="inherit">
            <ShoppingCartIcon sx={{color: "#000000" }} />
          </IconButton>
        </Box>
        

      </Toolbar>
    </AppBar>
  );
};
