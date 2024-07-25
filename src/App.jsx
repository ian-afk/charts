import { useState } from "react";
import LineChartComp from "./components/LineChartComp";
import BarChartComp from "./components/BarChartComp";
import PieChartSample from "./components/PieChartSample";
import CombinedChart from "./components/CombinedChart";
import PyramidChart from "./components/PyramidChart";
function App() {
  return (
    <>
      <LineChartComp />
      <BarChartComp />
      <PieChartSample style={{ outline: "none" }} />
      <CombinedChart />
      <PyramidChart />
    </>
  );
}

export default App;
