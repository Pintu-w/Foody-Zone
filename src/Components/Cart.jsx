import React, { useContext, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../context/AuthProvider";
import { Button } from "./Button";

export const Cart = () => {
  const [cartToggel, setCartToggel] = useState(false);
  const [removeItem, setRemoveItem] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const [addAmount, setAddAmount] = useState([]);
  const { cartData, setCartData } = useContext(AuthContext);

  useEffect(() => {
    if (cartData.length > 0) {
      const total = cartData.reduce(
        (acc, ele) => acc + Number(ele[0].caloriesPerServing || 0),
        0
      );
      setTotalAmount(total);
    } else {
      setTotalAmount(0);
    }
  }, [cartData]);
  console.log(totalAmount);

  useEffect(() => {
    const filtered = cartData.filter((ele) => ele[0].name !== removeItem);
    setCartData(filtered);
  }, [removeItem]);

  return (
    <div className="bg-white rounded-full p-1 ">
      <div
        onClick={() => {
          setCartToggel(!cartToggel);
        }}
      >
        <IoCartOutline size={28} color="" />
      </div>

      <div
        className={` z-20 max-h-150 fixed flex flex-col  lg:translate-x-20/12 lg:top-117 border-white md:translate-x-1/3 md:top-115    w-90 ${
          cartToggel ? "block" : "hidden"
        } mt-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-150 backdrop-blur-lg  px-1 rounded-md`}
      >
        <div className="flex w-full sticky text-md z-10 top-0 bg-gray-300   justify-between border-b-1  py-3 font-semibold px-1 border-gray-400 ">
          <div className="flex">
            <p>My Cart</p> <IoCartOutline size={24} color="" />
          </div>
          <div
            className="hover:pointer-none:"
            onClick={() => {
              setCartToggel(!cartToggel);
            }}
          >
            {" "}
            Back{" "}
          </div>
        </div>
        <div>
          {cartData == "" ? (
            <div className="h-125 flex justify-center items-center font-semibold">
              please add items to cart
            </div>
          ) : (
            <div
              className="h-125 overflow-y-scroll"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {" "}
              {cartData.map((ele) => {
                return (
                  <div className="flex gap-2 border-1 my-2 bg-white border-green-300 py-1 px-1 rounded-md">
                    <div className="w-15 rounded-4xl overflow-hidden ">
                      <img
                        className="w-full h-full"
                        src={ele[0].image}
                        alt=""
                      />
                    </div>
                    <div className="w-full">
                      <div className="text-xl font-semibold">{ele[0].name}</div>
                      <div className="flex justify-between">
                        {" "}
                        <div>₹{ele[0].caloriesPerServing} </div>
                        <div
                          onClick={() => {
                            setRemoveItem(ele[0].name);
                          }}
                        >
                          <Button style={"text-md"} Data={"Remove"} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="bg-gray-300    sticky flex items-end  text-xl w-full  left-0  py-3 font-semibold px-1 border-gray-500">
          Total:{totalAmount}
        </div>
      </div>
    </div>
  );
};
