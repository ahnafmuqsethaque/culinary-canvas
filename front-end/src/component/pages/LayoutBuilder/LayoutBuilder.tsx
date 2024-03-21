import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const LayoutBuilder: FC<{
  component: any;
}> = (props) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {props.component}
      <Footer />
    </Stack>
  );
};
