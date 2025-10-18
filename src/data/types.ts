 interface DataPoint {
  date: string;
  value: number;
}

export interface CategoryData {
  category: string;
  values: DataPoint[];
}