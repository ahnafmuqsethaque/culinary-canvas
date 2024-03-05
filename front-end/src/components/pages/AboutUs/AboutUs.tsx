import Typography from "@mui/material/Typography";
import { FC } from "react";
import Stack from "@mui/material/Stack";

export const AboutUs: FC = () => {
  return (
    <Stack>
      {/* <Header/> */}
      <Stack>
        <Typography>Who we are</Typography>
        <Typography>
          Culinary Canvas is an online platform that provides a solution to the
          difficulties encountered by local chefs in offering authentic culinary
          experiences. It serves as a platform for students, immigrants and
          working professionals to access an array of authentic, chef-prepared
          meals and catering services. The platform sets itself apart by
          facilitating bespoke culinary journeys, delivering both convenience
          and a diverse selection of curated meals directly to the consumer’s
          door. As the sole provider of on-demand, economical, home-style cooked
          dishes from neighborhood chefs, Culinary Canvas has carved out a
          unique niche in the market. 
        </Typography>
      </Stack>
      {/* <Footer/> */}
      {/* <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "42px",
          fontStyle: "normal",
          lineHeight: "59px",
          letterSpacing: "1.68px",
        }}
      >
        About Us
      </Typography> */}
    </Stack>
  );
};
