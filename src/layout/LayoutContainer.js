import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const LayoutContainer = ({children}) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#F4F7FE",
        flexGrow: 1,
        height: "100vh",
        display:"flex",
        flexDirection:"column",
        overflow: "auto",
      }}
    >
      <Toolbar sx={{
        minHeight:"80px !important",
      }} />
      <Container maxWidth="100%" disableGutters={true} sx={{ p:{sm:4, xs:2}, flex:1, display:"flex", flexDirection:"column"}}>
    {children}
      </Container>
    </Box>
  );
};

export default LayoutContainer;
