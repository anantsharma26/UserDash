import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2018",
    Boy: 4000,
    Girls: 2400,
  },
  {
    name: "2019",
    Boy: 3000,
    Girls: 1398,
  },
  {
    name: "2020",
    Boy: 2000,
    Girls: 9800,
  },
  {
    name: "2021",
    Boy: 2780,
    Girls: 3908,
  },
  {
    name: "2022",
    Boy: 1890,
    Girls: 4800,
  },
  {
    name: "2023",
    Boy: 2390,
    Girls: 3800,
  },
  {
    name: "2024",
    Boy: 3490,
    Girls: 4300,
  },
];

export const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Girls" fill="#e34646" />
        <Bar dataKey="Boy" fill="#7bbef2" />
      </BarChart>
    </ResponsiveContainer>
  );
};
