import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./Pages/Header";
import { Hero } from "./Pages/Hero";
import { CardData } from "./Constant/Data";

function App() {
  const [data, setData] = useState(CardData);
  const [inputvalue, setInputValue] = useState();
  const [buttonvalue, setButtonValue] = useState();

  const handleButton = (e) => {
    const arr = [];
    const buttonData = e.target.id;
    setButtonValue(buttonData);
    if (buttonData == "All") {
      setData(CardData);
    }
    const FilterValue = CardData.filter((ele) =>
      ele.category.includes(buttonData.toLowerCase())
    );

    FilterValue.map((filterdata) => {
      arr.push(filterdata);
      setData(arr);
    });
  };

  const handleSearch = (e) => {
    const arr = [];
    const inputData = e.target.value;
    setInputValue(inputData);

    const FilterData = CardData.filter((ele) => ele.title.includes(inputData));
    console.log(e.target.value);
    FilterData.map((filterdata) => {
      arr.push(filterdata);
      setData(arr);
      if (!inputvalue) {
        setData(data);
      }
    });
  };

  return (
    <>
      <Header handleButton={handleButton} handleNav={handleSearch} />
      <Hero Data={data} />
    </>
  );
}

export default App;
