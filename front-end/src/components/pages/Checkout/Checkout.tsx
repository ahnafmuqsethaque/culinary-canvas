import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import { OrderItem } from "../../OrderItem";
import TextField from "@mui/material/TextField";
import { OrderCounter } from "../../OrderCounter";
import { CartItem } from "../../CartItem";
import Button from "@mui/material/Button";

export const Checkout: FC = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <CheckoutItem />
    </Stack>
  );
};