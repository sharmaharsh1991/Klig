import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as AppIcon1 } from "../assets/images/app-icon-1.svg";
import { ReactComponent as AppIcon2 } from "../assets/images/app-icon-2.svg";
import { ReactComponent as AppIcon3 } from "../assets/images/app-icon-3.svg";
import { ReactComponent as AppIcon4 } from "../assets/images/app-icon-4.svg";
import { ReactComponent as AppIcon5 } from "../assets/images/app-icon-5.svg";
import { ReactComponent as AppIcon6 } from "../assets/images/app-icon-6.svg";
import { ReactComponent as AppIcon7 } from "../assets/images/app-icon-7.svg";
import { ReactComponent as AppIcon8 } from "../assets/images/app-icon-8.svg";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';

const accordionItems = [
  {
    id: "panel1",
    icon: <AcUnitOutlinedIcon />,
    label: "Kubernetes",
    content: [<AppIcon1 />, <AppIcon2 />],
  },
  {
    id: "panel2",
    icon: <ErrorOutlinedIcon />,
    label: "Alerts",
    content: [<AppIcon3 />, <AppIcon4 />],
},
{
    id: "panel3",
    icon: <GavelOutlinedIcon />,
    label: "Policies",
    content: [<AppIcon5 />, <AppIcon6 />, <AppIcon7 />, <AppIcon8 />],
  },
];

export default function AppSidebar() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        "@media (min-width:1200px)":{
            height: "100%",
        },
        boxShadow:
          "rgb(26 25 43 / 2%) 0px 2.8px 2.2px,rgb(26 25 43 / 2%) 0px 12.5px 10px,rgb(26 25 43 / 2%) 0px 22.3px 17.9px,rgb(26 25 43 / 3%) 0px 41.8px 33.4px,rgb(26 25 43 / 2%) 0px 100px 80px",
        borderRadius: "0.75rem",
      }}
    >
      {accordionItems.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          sx={{
            margin: "0 !important",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}bh-content`}
            id={`${item.id}bh-header`}
            sx={{
                color:"#A8B0B9",
              "& .MuiSvgIcon-root": {
                marginRight: 1.5,
              },
              "& .Mui-expanded":{
                color:"#3A55AD",
                "& .MuiTypography-root":{
                    color:"#3A55AD"
                }
              }
            }}
          >
            {item.icon}
            <Typography sx={{
                color:"#4F5B67"
            }}>{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              {item.content}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
0