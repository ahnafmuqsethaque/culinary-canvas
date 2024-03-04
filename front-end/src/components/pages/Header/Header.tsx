import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";


export const AboutUs: FC = () => {
  return (
    <Stack>
      <Typography
        sx={{
          fontFamily: "Lexend",
          fontWeight: "600",
          fontSize: "40px",
          fontStyle: "normal",
          lineHeight: "48px",
          letterSpacing: "1.68px",
          textAlign: "center", // This will center the text
          marginTop: "150px", // This will lower the text by 50px
        }}
      >
        Who We Are
      </Typography>

      
    </Stack>
  );
};
