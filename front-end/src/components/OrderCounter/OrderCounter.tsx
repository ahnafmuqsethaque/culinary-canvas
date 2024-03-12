import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const OrderCounter: FC = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      sx={{
        width: "120px",
        height: "42px",
        p: "8px",
        background: "red",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        boxSizing: "border-box",
        borderRadius: 50,
      }}
    >
      <IconButton
        aria-label="add"
        style={{
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
      >
        <AddIcon />
      </IconButton>
      <Typography
        style={{
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
      >
        1
      </Typography>
      <IconButton
        aria-label="remove"
        style={{
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
      >
        <RemoveIcon />
      </IconButton>
    </Stack>
  );
};
