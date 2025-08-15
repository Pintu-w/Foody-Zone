import React, { useState } from "react";
import { Button } from "../Components/Button";
import { Navdata } from "../Constant/Data";

export const Navbar = ({ handleNav }) => {
  return (
    <div className="md:text-xl bg">
      {Navdata.map(({ id, title }) => {
        return (
          <Button
            style={" focus:bg-red-900"}
            key={id}
            Data={title}
            handleNav={handleNav}
          />
        );
      })}
    </div>
  );
};
