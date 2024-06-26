import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const data = [
  {
    name: "Jan",
    visitors: 4000,
  },
  {
    name: "Feb",
    visitors: 3000,
  },
  {
    name: "Mar",
    visitors: 2000,
  },
  {
    name: "Apr",
    visitors: 2780,
  },
  {
    name: "May",
    visitors: 1890,
  },
  {
    name: "Jun",
    visitors: 2390,
  },
  {
    name: "Jul",
    visitors: 3490,
  },
];

const cardinal = curveCardinal.tension(0.2);

const Insights = () => {
  return (
    <Card
      sx={{
        boxShadow: "rgba(20, 46, 110, 0.1) 0px 1px 8px",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%" minHeight={265}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />            
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#3A55AD"
              fill="#3A55AD"
              fillOpacity={0.1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Insights;
