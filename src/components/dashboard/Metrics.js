import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MetricsChart from "./MetricsChart";

const statisticsData = [
  { label: "Total Orders", value: "$1,100", day: "Saturday" },
  { label: "Active Orders", value: "$100", day: "Monday" },
  { label: "Pending orders", value: "$300", day: "Saturday" },
  { label: "Shipped Orders", value: "$250", day: "Monday" },
];

export default function Metrics() {
  return (
    <>
      {statisticsData.map((statistic, index) => (
        <Grid item md={3} sm={6} xs={12}>
          <Card
            sx={{
              boxShadow: "rgba(20, 46, 110, 0.1) 0px 1px 8px",
              borderRadius: 3,
            }}
          >
            <CardContent key={index}>
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
                  marginBottom: "5px",
                }}
              >
                {statistic.value}
              </Typography>
              <MetricsChart />
              <Typography
                sx={{
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                {statistic.day}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}
