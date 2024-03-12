import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import exampleFood from "../../assets/exampleFood.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const OrderItem: FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
<<<<<<< HEAD
        maxWidth: "440px",
        //maxHeight: 400,
        p: "24px",
        background: "white",
        borderRadius: 12,
=======
        maxWidth: "300px",
        maxHeight: 300,
        p: "16px",
        background: "white",
        borderRadius: 8,
>>>>>>> fix-remainders
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        boxSizing: "border-box",
        spacing: 1,
      }}
    >
<<<<<<< HEAD
      <Stack flexDirection="row" sx={{}}>
=======
      <Stack flexDirection="row">
>>>>>>> fix-remainders
        <img
          style={{
            // left: 0,
            // top: 0,
            // position: "absolute",
            width: "100%",
            height: "100%",
          }}
          src={exampleFood}
        />
<<<<<<< HEAD
        {/* <Typography
          sx={{
            color: "black",
            fontSize: 24,
            fontFamily: "Montserrat",
            fontWeight: "600",
            lineHeight: 31.2,
            wordWrap: "break-word",
            // left: 10,
            // top: 10,
            // position: "absolute",
          }}
        >
          Thai
        </Typography> */}
=======
>>>>>>> fix-remainders
      </Stack>
      <Typography
        style={{
          color: "black",
<<<<<<< HEAD
          fontSize: 24,
=======
          fontSize: 18,
>>>>>>> fix-remainders
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
      >
        Caprese Salad by Natasha A.
      </Typography>

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="95%"
        // sx={{
        //   p: "100px",
        // }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "black",
<<<<<<< HEAD
            fontSize: 24,
=======
            fontSize: 16,
>>>>>>> fix-remainders
            fontFamily: "Montserrat",
            fontWeight: "600",
          }}
        >
          $16 | 2km away
        </Typography>
        <ShoppingCartIcon />
      </Stack>
    </Stack>
  );
};
