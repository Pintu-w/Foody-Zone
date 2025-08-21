import React, { useContext, useState } from "react";
import { Button } from "../Components/Button";
import { NavButton } from "../content/Data";
import { AuthContext } from "../context/AuthProvider";

export const Navbar = () => {
  const { setButtonData } = useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        {NavButton.map((ele) => {
          return (
            <>
              <div
                id={ele}
                onClick={(e) => {
                  setButtonData(e.target.id);
                }}
              >
                <Button Data={ele} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
