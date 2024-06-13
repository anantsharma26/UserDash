import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
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
    Sales: 4000,
    Expenses: 2400,
    amt: 2400,
  },
  {
    name: "2019",
    Sales: 3000,
    Expenses: 1398,
    amt: 2210,
  },
  {
    name: "2020",
    Sales: 2000,
    Expenses: 9800,
    amt: 2290,
  },
  {
    name: "2021",
    Sales: 2780,
    Expenses: 3908,
    amt: 2000,
  },
  {
    name: "2022",
    Sales: 1890,
    Expenses: 4800,
    amt: 2181,
  },
  {
    name: "2023",
    Sales: 2390,
    Expenses: 3800,
    amt: 2500,
  },
  {
    name: "2024",
    Sales: 3490,
    Expenses: 4300,
    amt: 2100,
  },
];

export const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <LineChart
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
        <Line type="monotone" dataKey="Expenses" stroke="#862222" />
        <Line type="monotone" dataKey="Sales" stroke="#3366cc" />
      </LineChart>
    </ResponsiveContainer>
  );
};
