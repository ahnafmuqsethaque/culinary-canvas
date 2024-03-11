import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import { OrderItem } from "../../OrderItem";
import TextField from "@mui/material/TextField";
import { OrderCounter } from "../../OrderCounter";
import { CartItem } from "../../CartItem";
import Button from "@mui/material/Button";

export const Cart: FC = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography
        style={{
          color: "black",
          fontSize: 36,
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
      >
        Cart
      </Typography>
      <Stack
        alignItems="center"
        justifyContent="flex-start"
        padding={4}
        gap="16px"
        sx={{
          width: "100%",
          height: "100%",
          background: "#F3F9EE",
        }}
      >
        <CartItem />
        <CartItem />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        maxWidth="800px"
        width="100%"
        p="24px"
        boxSizing="border-box"
      >
        <Stack gap={2} direction="row">
          <Typography
            style={{
              color: "black",
              fontSize: 28,
              fontFamily: "Montserrat",
              fontWeight: "700",
            }}
          >
            Total
          </Typography>
          <Typography
            style={{
              color: "black",
              fontSize: 28,
              fontFamily: "Montserrat",
              fontWeight: "700",
            }}
          >
            $56
          </Typography>
        </Stack>

        <Button variant="contained" sx={{ background: "#FA4A0C" }}>
          <Typography
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Montserrat",
              fontWeight: "400",
            }}
          >
            Proceed $56
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
