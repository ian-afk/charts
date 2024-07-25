import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";
import "./Override.css";
const data = [
  { name: "profitMargin", value: 40 },
  { name: "Placeholder", value: 60 },
];
const COLORS = ["#00bdd6", "#a6f5ff"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (index === 0) {
    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ outline: "none" }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  return null;
};
const PieChartSample = () => {
  const calculatePercentage = (data) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const filled = data.find((entry) => entry.name === "profitMargin").value;
    return ((filled / total) * 100).toFixed(0);
  };

  const percentage = calculatePercentage(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart style={{ outline: "none" }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          startAngle={90}
          endAngle={-270} // This makes it animate clockwise
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
          animationBegin={0}
          animationDuration={1000}
          activeShape={null}
          activeIndex={null}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="none"
              style={{ outline: "none" }}
            />
          ))}
          <Label
            value={`${percentage}%`}
            position="center"
            fill="#00bdd6"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PieChartSample;
