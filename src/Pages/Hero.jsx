import { Card } from "../Components/Card";
import bg from "../../public/bg8.jpg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthProvider";

import { Cart } from "../Components/Cart";
import { Filter } from "../Components/Filter";
import { CardDetails } from "./CardDetails";

export const Hero = () => {
  const { buttonData, searchData, setButtonData, cardClicked } =
    useContext(AuthContext);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const Apirun = async () => {
      try {
        const api = "https://dummyjson.com/recipes";
        const response = await axios.get(api);
        setAllData(response.data.recipes);
        setFilteredData(response.data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    Apirun();
  }, []);

  useEffect(() => {
    if (buttonData === "All") {
      setFilteredData(allData); // reset to all recipes
    } else {
      const filtered = allData.filter(
        (item) => item.mealType[0].toLowerCase() === buttonData.toLowerCase()
      );
      setFilteredData(filtered);
    }
  }, [buttonData]);

  useEffect(() => {
    if (!searchData) {
      setFilteredData(allData); // reset if search is cleared
      return;
    }

    const filtered = allData.filter((ele) => ele.name.includes(searchData));
    setFilteredData(filtered);
  }, [searchData]);

  useEffect(() => {
    const filtered = allData.filter((ele) => ele.name === cardClicked);
    setCardData(filtered);
  }, [cardClicked]);

  return (
    <div
      className={`pb-4  w-full min-h-200    flex  flex-wrap  justify-center bg-gray-200 px-2 `}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
      }}
    >
      <div className=" w-full flex lg:h-9 mt-2 justify-end gap-2">
        <Cart />
        <Filter />
        <CardDetails cardData={cardData} />
      </div>
      <div className="flex  flex-wrap  justify-center">
        {filteredData?.map(
          ({ id, name, image, cuisine, caloriesPerServing }) => {
            return (
              <Card
                key={id}
                img={image}
                price={caloriesPerServing}
                title={name}
                description={cuisine}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
