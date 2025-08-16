import React from "react";
import { Card } from "../Components/Card";
import bg from '../../public/bg8.jpg'

export const Hero = ({ Data }) => {
  return (
    <div className= {`pb-4  w-full min-h-200  bg-contain  flex  flex-wrap  justify-center bg-gray-200 `}  style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
      }}   >
      {Data.map(({ id, img, price, title, description }) => {
        return (
          <div className=" flex  justify-center items-center" key={id}>
            <Card
              img={img}
              price={price}
              title={title}
              description={description}
            />
          </div>
        );
      })}
    </div>
  );
};
