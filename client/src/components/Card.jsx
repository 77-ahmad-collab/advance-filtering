import React from "react";

const card = ({ bootcamps }) => {
  // console.log(bootcamps);
  return (
    <div>
      <h2>This is a card componet</h2>
      {bootcamps.map((val) => {
        return (
          <>
            <h2>{val.price}</h2>
            <p>{val.rating}</p>
          </>
        );
      })}
    </div>
  );
};

export default card;
