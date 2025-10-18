import ReactECharts from "echarts-for-react";
import type { BarChartProps } from "./types";
import type { ECElementEvent } from "echarts";
import { memo } from "react";



const BarChart = ({ data, onSelect }: BarChartProps) => {
  
  const categories = data.map((d) => d.category);
  const values = data.map((d) => d.values[d.values.length - 1].value);



  const option = {
    title: { text: "Current Period (Bar Chart)" },
    tooltip: { trigger: "item" },
    xAxis: { type: "category", data: categories },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        data: values.map((v) => ({
          value: v,
          itemStyle: {
            color: "#8884d8",
          },
        })),
        universalTransition: true,
      },
    ],
    animationDurationUpdate: 800,
  };

  const onEvents = {
    click: (params: ECElementEvent) => {
      
      onSelect(params.name);
    },
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "400px", width: "100%" }}
      onEvents={onEvents}
    />
  );
};

export default memo(BarChart); 
