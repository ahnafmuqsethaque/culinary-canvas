import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import { OrderItem } from "../../OrderItem";

export const Home: FC = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        width: "100%",
        height: "400%",
      }}
    >
      <OrderItem />
      <OrderItem />
    </Stack>
  );
};
