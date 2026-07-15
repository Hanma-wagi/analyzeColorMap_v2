import { useEffect, useState } from "react";
import { generateSaturationLabelsAndData } from "./components/data-processor";
import { BarChart } from "@mui/x-charts/BarChart";

export default function SaturationChart(props) {
  return (
    <>
      {props.saturationData?.data && (
        <BarChart
          series={[{ data: props.saturationData.data }]}
          xAxis={[{ data: props.saturationData.labels }]}
        />
      )}
    </>
  );
}
