import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import { OrderItem } from "../../OrderItem";
import TextField from "@mui/material/TextField";
import { OrderCounter } from "../../OrderCounter";
import { CartItem } from "../../CartItem";

export const Home: FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <TextField
        label="Food, Chefs, Drinks, etc."
        variant="outlined"
        InputProps={{ sx: { borderRadius: 50 } }}
        sx={{ maxWidth: "1000px" }}
      />
      <OrderCounter />
      <Typography
        style={{
          color: "black",
          fontSize: 36,
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
      >
        Order
      </Typography>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        padding={4}
        gap="16px"
        sx={{
          width: "100%",
          height: "100%",
          background: "#F3C2EE",
        }}
      >
        <OrderItem />
        <OrderItem />
      </Stack>
    </Stack>
  );
};
