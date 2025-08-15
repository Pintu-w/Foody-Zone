import React from "react";

export const Button = ({ Data, handleNav, style }) => {
  return (
    <button
      id={Data}
      className={`text-white ${style}   px-4 py-1 hover:outline-1 outline-white  rounded-md mx-2 bg-red-600`}
      onClick={(e) => {
        handleNav(e);
      }}
    >
      {" "}
      {Data}
    </button>
  );
};
