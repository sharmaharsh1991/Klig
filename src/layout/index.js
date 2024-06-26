import AppBar from "./AppBar";
import React from "react";
import LayoutContainer from "./LayoutContainer";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";


const index = ({ children }) => {
  const { pathname } = useLocation();

  const piblicRoutes = ["/signup", "/login"];

  if (piblicRoutes.includes(pathname)) {
    return children;
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar />
        <LayoutContainer>{children}</LayoutContainer>
      </Box>
    </>
  );
};

export default index;
