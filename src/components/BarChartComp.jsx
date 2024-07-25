import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const rangeData = [
  {
    day: "05-02",
    temperature: [2, 15],
  },
  {
    day: "05-03",
    temperature: [3, 12],
  },
  {
    day: "05-04",
    temperature: [4, 12],
  },
  {
    day: "05-05",
    temperature: [12, 16],
  },
  {
    day: "05-06",
    temperature: [5, 16],
  },
  {
    day: "05-07",
    temperature: [3, 12],
  },
  {
    day: "05-08",
    temperature: [0, 8],
  },
];
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2000, amt: 3400 },
  { name: "Page C", uv: 800, pv: 2000, amt: 3400 },
  { name: "Page D", uv: 1300, pv: 1000, amt: 1400 },
];
function BarChartComp() {
  return (
    <div>
      <BarChart
        width={730}
        height={250}
        data={rangeData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default BarChartComp;
