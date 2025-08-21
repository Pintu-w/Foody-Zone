import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { NavButton } from "../content/Data";
import { CiFilter } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
export const Filter = () => {
  const { setButtonData } = useContext(AuthContext);
  const [filterToggel, setFilterToggel] = useState(true);

  return (
    <div className="bg-white rounded-full p-1 lg:hidden">
      {filterToggel ? (
        <div
          onClick={() => {
            setFilterToggel(false);
          }}
        >
          <CiFilter size={28} color="" />
        </div>
      ) : (
        <div
          className={`absolute z-10 ${
            filterToggel ? "hidden" : "block"
          }  right-1 transition ease-in-out    w-40 h-42  text-2xl  text-gray-400 rounded-b-2xl  backdrop-blur-md  `}
        >
          <div
            className="flex justify-center items-center border-b-1 border-gray-400 py-1"
            onClick={() => {
              setFilterToggel(true);
            }}
          >
            {" "}
            <RxCross1 />
          </div>
          {NavButton.map((val) => {
            return (
              <>
                <button
                  key={val}
                  id={val}
                  className=" flex flex-col justify-center items-center w-full border-b-1 border-red-300 rounded-b-2xl "
                  onClick={(e) => {
                    setButtonData(e.target.id);
                  }}
                >
                  {val}
                </button>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
