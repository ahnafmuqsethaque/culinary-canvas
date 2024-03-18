import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import exampleFood from "../../assets/exampleFood.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, FormControlLabel, IconButton, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CheckoutItem: FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      width: 481,
      height: 225,
      p: 3,
      bgcolor: 'white',
      boxShadow: 2,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 2
    }}>
      <Typography variant="h6" component="div">
        Delivery Method
      </Typography>
      <Box sx={{
        width: 232,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 2
      }}>
        <FormControlLabel
          value="doorDelivery"
          control={<Radio />}
          label="Door delivery"
        />
        <Box sx={{
          width: 232,
          height: 0,
          opacity: 0.30,
          border: '0.50px black solid'
        }} />
        <FormControlLabel
          value="pickup"
          control={<Radio />}
          label="Pickup"
        />
      </Box>
    </Box>
  );
};
