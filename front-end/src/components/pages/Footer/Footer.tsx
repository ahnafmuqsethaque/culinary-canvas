import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer: FC = () => {
  const footerTypographyProps = {
    color: "#FFF",
    fontFamily: "Barlow",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "150%",
  };
  return (
    <Stack
      direction="row"
      sx={{ background: "#D65656" }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={24}
      p="80px 160px"
      boxSizing="border-box"
    >
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Beau Rivage",
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "120%",
        }}
      >
        Culinary Canvas
      </Typography>
      <Stack direction="row" spacing={12}>
        <Stack spacing={2}>
          <Typography sx={footerTypographyProps}>Home</Typography>
          <Typography sx={footerTypographyProps}>About Us</Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography sx={footerTypographyProps}>Order</Typography>
          <Typography sx={footerTypographyProps}>Cook with us</Typography>
        </Stack>
        <Stack justifyContent="flex-end">
          <Typography sx={footerTypographyProps}>Get in touch</Typography>
          <Stack direction="row" alignItems="center">
            <InstagramIcon sx={{ color: "white" }} />
            <Typography sx={footerTypographyProps}>
              culinarycanvasubc
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
