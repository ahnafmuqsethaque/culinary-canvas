import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";

export const Header: FC = () => {
  
  return (
    <Stack>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "42px",
          fontStyle: "normal",
          lineHeight: "59px",
          letterSpacing: "1.68px",
        }}
      >
        Header
      </Typography>
    </Stack>
  );
};
