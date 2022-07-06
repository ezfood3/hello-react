import React from "react";

const MapTestComFunc = () => {
  const fruits = ["apple", "orange", "banana"];
  const fruitsLi = fruits.map((fruit, index) => {
    return <li key={index}>{fruit}</li>;
    // key : 속도차이
  });
  return (
    <>
      <ul>{fruitsLi}</ul>
    </>
  );
};
export default MapTestComFunc;
