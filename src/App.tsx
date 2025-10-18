import { useCallback, useState } from "react";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import { data } from "./data/chartData";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect =useCallback( (category: string) => {
    setSelectedCategory(category);
  },[])

  const selectedData = data.find((d) => d.category === selectedCategory);

  return (
    <div className="flex flex-col items-stretch  min-h-screen">
      <Header/>
      <main className="flex flex-wrap mb-auto">

        <div className="w-full   lg:w-1/2 mx-auto p-4 ">
          <BarChart
            data={data}
            onSelect={handleSelect}
          />
        </div>
        <div className="w-full   lg:w-1/2 mx-auto p-4">
          <LineChart categoryData={selectedData} />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
