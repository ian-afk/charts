import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentYrSales = [
  0, 1200, 900, 1500, 2000, 1300, 800, 1600, 1100, 1400, 1700, 1900, 500,
];

const lastYrSales = [
  300, 1200, 900, 1500, 2000, 1300, 800, 1600, 1100, 1400, 1700, 1900, 0,
].reverse();

const result = months.map((name, index) => ({
  name: name,
  CurrYr: currentYrSales[index],
  lastYr: lastYrSales[index],
}));
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2000, amt: 3400 },
  { name: "Page C", uv: 800, pv: 2000, amt: 3400 },
  { name: "Page D", uv: 1300, pv: 1000, amt: 1400 },
];

function LineChartComp() {
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={result}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="CurrYr" stroke="#8884d8" />
        <Line type="monotone" dataKey="lastYr" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default LineChartComp;
