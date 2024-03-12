import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import { OrderItem } from "../../OrderItem";
import TextField from "@mui/material/TextField";

export const Home: FC = () => {
  return (
    <Stack
      boxSizing="border-box"
      //p="0px 180px"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Stack p="0 140px">
        <TextField
          label="Food, Chefs, Drinks, etc."
          variant="outlined"
          InputProps={{
            sx: { borderRadius: 50, height: 40, alignContent: "flex-start" },
          }}
          sx={{ maxWidth: "800px", border: "1px solid blue", height: 40 }}
        />
      </Stack>

      {/* <OrderCounter /> */}
      <Typography
        p="0px 140px"
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
        p="36px 140px"
        gap="16px"
        sx={{
          width: "100%",
          //height: "100%",
          background: "rgba(214, 86, 86, 0.15)",
        }}
      >
        <OrderItem />
        <OrderItem />
      </Stack>
    </Stack>
  );
};
