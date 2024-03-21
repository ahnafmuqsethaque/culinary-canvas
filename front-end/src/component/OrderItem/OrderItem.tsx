import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import exampleFood from "../../assets/exampleFood.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const OrderItem: FC = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "300px",
        maxHeight: 300,
        p: "16px",
        background: "white",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        boxSizing: "border-box",
        spacing: 1,
      }}
    >
      <Stack flexDirection="row">
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
      </Stack>
      <Typography
        style={{
          color: "black",
          fontSize: 18,
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
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "black",
            fontSize: 16,
            fontFamily: "Montserrat",
            fontWeight: "600",
          }}
        >
          $16 | 2km away
        </Typography>
        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
