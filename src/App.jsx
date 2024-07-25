import { useState } from "react";
import LineChartComp from "./components/LineChartComp";
import BarChartComp from "./components/BarChartComp";
import PieChartSample from "./components/PieChartSample";
function App() {
  return (
    <>
      <LineChartComp />
      <BarChartComp />
      <PieChartSample style={{ outline: "none" }} />
    </>
  );
}

export default App;
