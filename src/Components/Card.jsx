import { useContext } from "react";
import { Button } from "./Button";
import { AuthContext } from "../context/AuthProvider";

export const Card = ({ img, price, title, description }) => {
  const { setCardClicked, setCardDeatils } = useContext(AuthContext);

  return (
    <div
      id={title}
      className=" text-white  flex mx-2 md:h-50 h-40 hover:scale-104 ease-in-out transition-all   w-90 mt-6 rounded-2xl p-3 backdrop-blur-2xl  "
      onClick={(e) => {
        setCardClicked(title);
        setCardDeatils(true);
      }}
    >
      <div
        className="w-50  bg-cover rounded-full overflow-hidden flex justify-center items-center  "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
      </div>
      <div className=" flex flex-col justify-between ml-2">
        <div>
          <h1 className="text-xl font-semibold md:text-2xl mt-5">{title}</h1>
          <p className="text-xs text-gray-400  md:text-[15px] ">
            {description}
          </p>
        </div>
        <div className="text-end mt-3">
          <Button Data={price} />
        </div>
      </div>
    </div>
  );
};
