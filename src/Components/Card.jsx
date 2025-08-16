import React from "react";
import { Button } from "./Button";

export const Card = ({ img, price, title, description }) => {
  return (
    <main className=" text-white  flex mx-2 md:h-50 h-40 hover:scale-104 ease-in-out transition-all   w-90 mt-6 rounded-2xl p-3 backdrop-blur-2xl  ">
      <div className="w-100 flex justify-center items-center  ">
        <img src={img} alt="" />
      </div>
      <div className=" flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold md:text-2xl">{title}</h1>
          <p className="text-xs text-gray-400  md:text-[15px] ">
            {description}
          </p>
        </div>
        <div className="text-end mt-3">
          <Button Data={price} />
        </div>
      </div>
    </main>
  );
};
