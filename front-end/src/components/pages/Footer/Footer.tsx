import Typography from "@mui/material/Typography";
import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Footer: FC = () => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#FFFFFF' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
          <Typography
            variant="h6"
            sx={{ color: "#000000" , fontSize: "30px"}}
          >
            Culinary Canvas
          </Typography>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Privacy Policy</Button>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Terms of Service</Button>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Support</Button>
          <Button sx={{ color: "#000000", fontSize: "25px" }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
