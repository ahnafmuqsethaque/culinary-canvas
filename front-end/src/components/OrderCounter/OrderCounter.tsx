import Typography from "@mui/material/Typography";
import { FC, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const OrderCounter: FC<{
  id?: number;
}> = (props) => {
  const [count, setCount] = useState(0);
  const [id, setID] = useState(props.id);

  useEffect(() => {
    // Retrieve count from local storage on component mount
    const storedCount = localStorage.getItem(`count-${props.id}`);
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  useEffect(() => {
    // Save count to local storage whenever it changes
    localStorage.setItem(`count-${props.id}`, count.toString());
  }, [count]);

  const increment = () => {
    setCount(count + 1);
    console.log(localStorage);
  };

  const decrement = () => {
    setCount(count - 1);
  };

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
        aria-label="remove"
        style={{
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
        onClick={decrement}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        style={{
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
      >
        {count}
      </Typography>
      <IconButton
        onClick={increment}
        aria-label="add"
        style={{
          color: "white",
          fontFamily: "Montserrat",
          fontWeight: "600",
        }}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
