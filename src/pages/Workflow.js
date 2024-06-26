import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import WorkflowDiagram from "../components/workflow";
import AppSidebar from "../components/AppSidebar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";



const Workflow = () => {
  // Define an array of items for the list
  const listItems = [
    { icon: <RestartAltOutlinedIcon />, text: "Inbox" },
    { icon: <CalendarMonthOutlinedIcon />, text: "Drafts" },
    // Add more items as needed
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography
              variant="h3"
           
              sx={{
                "@media(max-width:1199px)": {
                  fontSize: "2rem",
                },
                "@media(max-width:767px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              Workflow
            </Typography>
            <nav aria-label="main mailbox folders">
              <List
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                {listItems.map((item, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{
                      width: "auto",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        padding: 0,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#3A55AD;",
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          marginRight: 1,
                          color: "currentColor",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          flex: 1,

          
          "@media(max-width:1199px)": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Grid
          item
          lg={9}
          sx={{
            "@media(max-width:1199px)": {
              flex: 1,
              minHeight:"50vh"
            },
          }}
        >
          <WorkflowDiagram />
        </Grid>
        <Grid item lg={3}>
          <AppSidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default Workflow;
