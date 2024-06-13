import React from "react";
import { LineChartComponent } from "../components/Charts/LineChart";
import { BarChartComponent } from "../components/Charts/BarChart";

const Charts = () => {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <LineChartComponent />
      <BarChartComponent />
    </div>
  );
};

export default Charts;
