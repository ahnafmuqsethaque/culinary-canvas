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
        maxWidth: "440px",
        //maxHeight: 400,
        p: "24px",
        background: "white",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        boxSizing: "border-box",
        spacing: 1,
      }}
    >
      <Stack flexDirection="row" sx={{}}>
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
      </Stack>
      <Typography
        style={{
          color: "black",
          fontSize: 24,
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
            fontSize: 24,
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
