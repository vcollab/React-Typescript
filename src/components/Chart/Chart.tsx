import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props: any) => {
  const datapointValues = props.dataPoints.map((dataPoint : any) => dataPoint.value);
  const totalMaxium = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
