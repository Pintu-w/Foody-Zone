import React, { useContext, useState } from "react";
import { Button } from "../Components/Button";
import { AuthContext } from "../context/AuthProvider";
import { RxCross1 } from "react-icons/rx";

export const CardDetails = ({ cardData }) => {
  const { cardDetails, setCardDeatils, setCartData } = useContext(AuthContext);

  const ClickHandler = () => {
    setCartData((prev) => [...prev, cardData]);
  };

  return (
    <div
      className={` ${
        cardDetails ? "block" : "hidden"
      }  fixed z-10 w-95 md:w-150 min-h-100 backdrop-blur-2xl rounded-2xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2`}
    >
      {cardData.map(
        ({
          id,
          name,
          image,
          cuisine,
          caloriesPerServing,
          ingredients,
          mealType,
        }) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center text-white"
            >
              <div className="w-[50%] h-full rounded-full overflow-hidden border-2 border-green-600">
                <img src={image} alt="" />
                <div
                  className="absolute z-10 right-1 top-1"
                  onClick={() => {
                    setCardDeatils(false);
                  }}
                >
                  <RxCross1 color="white" size={20} />
                </div>
              </div>
              <div className="text-2xl"> {name}</div>
              <div className="flex justify-around w-full mt-2 ">
                <div>
                  {" "}
                  <div>INGREDIENTS</div>
                  <div className="text-xs text-gray-400 ">
                    {" "}
                    {ingredients.map((ele) => {
                      return <p>{ele}</p>;
                    })}
                  </div>
                </div>

                <div>
                  <div>
                    <div>Meal Type</div>
                    <div className="text-xs text-gray-400 ">{mealType}</div>
                  </div>
                  <div>
                    <div>Category</div>
                    <div className="text-xs text-gray-400 ">{cuisine}</div>
                  </div>
                </div>
              </div>
              <div>
                <Button Data={caloriesPerServing} />
              </div>
              <button
                className="border-2 border-green-800 rounded-md w-80 h-8 mt-2 hover:border-red-600"
                onClick={() => {
                  ClickHandler();
                  setCardDeatils(false);
                }}
              >
                {" "}
                ADD TO CART
              </button>
            </div>
          );
        }
      )}
    </div>
  );
};
