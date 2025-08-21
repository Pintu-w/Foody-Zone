import { Navbar } from "./Navbar";
import { useContext, useState } from "react";
import { Cart } from "../Components/Cart";
import { AuthContext } from "../context/AuthProvider";

export const Header = () => {
  const { setSearchData } = useContext(AuthContext);

  return (
    <>
      <div className="bg-neutral-800  ">
        <header className="flex flex-col md:flex-row md:justify-between md:px-5 justify-center items-center  text-white py-5">
          <h1 className=" text-6xl xl:text-7xl font-bold  mb-4 ">
            F<span className="text-red-600">oo</span>dy Z
            <span className="text-red-600">o</span>ne{" "}
          </h1>
          <div>
            <input
              className="border-1  border-red-900    outline-none focus:border-red-600 w-75 xl:w-90 md:py-2   py-1 px-2 rounded-md "
              type="text"
              placeholder="Search Food..."
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
          </div>
        </header>
        <div className="flex justify-end px-2 py-2 gap-1">
          <Navbar />
        </div>
      </div>
    </>
  );
};
