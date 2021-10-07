import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
interface DataPoint {
  label:string;
  value:number;
}
const Chart = (props: any) => {
  const datapointValues = props.dataPoints.map((dataPoint : DataPoint) => dataPoint.value);
  const totalMaxium = Math.max(...datapointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: DataPoint) => (
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
