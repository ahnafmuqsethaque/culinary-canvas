import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import exampleFood from "../../assets/exampleFood.png";
import { OrderCounter } from "../OrderCounter";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const CartItem: FC<{id: number}> = (props) => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        width: "fit-content",
        height: "100%",
        //maxWidth: "840px",
        maxHeight: "180px",
        //maxHeight: 400,
        //p: "0 24px",
        background: "white",
        borderRadius: "12px",
        justifyContent: "flex-start",
        alignItems: "center",
        //gap: 1,
        //boxSizing: "border-box",
        //spacing: 1,
        boxShadow: "2px 4px 3px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        borderRadius="12px 0 0 12px"
        boxSizing="border-box"
        sx={{ height: "100px", width: "60px" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          style={{
            color: "black",
            fontSize: 18,
            fontFamily: "Montserrat",
            fontWeight: "700",
          }}
        >
          1
        </Typography>
      </Stack>
      <Stack flexDirection="row" alignItems="center" gap={2} height="100%">
        <img
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "200px",
            maxWidth: "220px",
          }}
          src={exampleFood}
        />
        <Stack
          alignItems="flex-start"
          width="100%"
          justifyContent="space-evenly"
          gap={2}
          height="100%"
        >
          <Typography
            noWrap
            style={{
              width: "100%",
              color: "black",
              fontSize: 20,
              fontFamily: "Montserrat",
              fontWeight: "700",
            }}
          >
            Caprese Salad by Natasha A.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontSize: 18,
              fontFamily: "Montserrat",
              fontWeight: "600",
            }}
          >
            $16 | 2km away
          </Typography>
          <OrderCounter id={props.id}/>
        </Stack>
        <Stack
          justifyContent="center"
          sx={{
            height: "180px",
            width: "100px",
            background: "red",
            borderRadius: "0px 12px 12px 0px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <IconButton
            aria-label="x"
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "600",
              height: "100%",
            }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
