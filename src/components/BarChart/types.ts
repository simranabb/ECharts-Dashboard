import type { CategoryData } from "../../data/types";

export interface BarChartProps {
  data: CategoryData[];
  onSelect: (category: string) => void;
}