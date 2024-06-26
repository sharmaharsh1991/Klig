import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  RemoveRedEyeOutlined,
  SettingsBackupRestoreOutlined,
  CategoryOutlined,
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";

const statisticsData = [
  {
    icon: <RemoveRedEyeOutlined />,
    label: "Published Posts",
    value: 18,
    sortable: false,
  },
  {
    icon: <SettingsBackupRestoreOutlined />,
    label: "Pending Posts",
    value: 18,
    sortable: false,
  },
  {
    icon: <CategoryOutlined />,
    label: "Categories",
    value: 18,
    sortable: false,
  },
];

export default function Statistics() {
  return (
    <>
      {statisticsData.map((statistic, index) => (
        <Grid item sm={4} xs={12}>
          <Card
            sx={{
              boxShadow: "rgba(20, 46, 110, 0.1) 0px 1px 8px",
              borderRadius: 3,
            }}
          >
            <CardContent key={index}>
              <Box
                sx={{
                  backgroundColor: "#F4F7FE",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3A55AD",
                  marginBottom: "15px",
                }}
              >
                {statistic.icon}
              </Box>
              <Typography
                sx={{
                  marginBottom: "10px",
                }}
              >
                {statistic.label}
              </Typography>
              <Typography
                variant="h4"
                color="#3A55AD"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {statistic.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
