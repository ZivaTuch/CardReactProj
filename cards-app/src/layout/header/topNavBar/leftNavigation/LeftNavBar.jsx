import React from "react";
import { Box } from "@mui/material";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavBar() {
  const { user } = useUser();

  return (
    <Box>
      <LogoIcon />
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Logo />
        <NavItem to={ROUTES.CARDS} label="Cards" sx={{ color: "white" }} />
        <NavItem to={ROUTES.ABOUT} label="About" sx={{ color: "white" }} />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite Cards" sx={{ color: "white" }} />}
        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My Cards" sx={{ color: "white" }} />}  
      </Box>
    </Box>
  );
};
