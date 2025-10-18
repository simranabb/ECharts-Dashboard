import ReactECharts from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { LineChartProps } from "./types";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
]);



const LineChartComp = ({ categoryData }: LineChartProps) => {

  
  if (!categoryData) {
    return (
      <p style={{ textAlign: "center", paddingTop: "150px" }}>
        Select a category
      </p>
    );
  }

  const dates = categoryData.values.map((v) => v.date);
  const values = categoryData.values.map((v) => v.value);

  const option = {
    title: { text: `Trend for ${categoryData.category}` },
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: dates },
    yAxis: { type: "value" },
    series: [
      {
        type: "line",
        data: values,
        smooth: true,
        symbol: "circle",
        lineStyle: { width: 3 },
        itemStyle: { color: "#4CAF50" },
        universalTransition: true,
      },
    ],
    animationDurationUpdate: 800,
  };

  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ height: "400px",width: "100%" }}
    />
  );
};

export default LineChartComp;
