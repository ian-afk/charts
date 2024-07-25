import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for pyramid chart
const data = [
  { name: "Level 1", value: 4000 },
  { name: "Level 2", value: 3000 },
  { name: "Level 3", value: 2000 },
  { name: "Level 4", value: 1000 },
];

const PyramidChart = () => {
  // Calculate max value for scaling
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PyramidChart;
