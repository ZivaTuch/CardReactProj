import React from "react";
import { Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import { useTheme } from "../providers/ThemeProvider";

export default function PageHeader({ title, subtitle }) {
  const { isDark } = useTheme();

  return (
    <>
       <Typography variant="h3" component="h1" sx={{ color: isDark ? "white" : "inherit" }}>
        {title}
      </Typography>
      <Typography variant="h6" sx={{ color: isDark ? "white" : "inherit" }}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />

    </>
  );
};

PageHeader.propTypes = {
  title: string,
  subtitle: string,
};
