import React, { useState } from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MetricsChart = () => {
  const [data] = useState([
    {
      amt: 1400,
    },
    {
      amt: 2210,
    },
    {
      amt: 4290,
    },
    {
      amt: 200,
    },
    {
      amt: 3181,
    },
    {
      amt: 500,
    },
    {
      amt: 2100,
    },
  ]);

  return (
    <ResponsiveContainer width="100%" height={40}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50.74%" stopColor="#3A55AD" stopOpacity={0.1} />
            <stop offset="100%" stopColor="#3A55AD" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#3A55AD"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MetricsChart;
