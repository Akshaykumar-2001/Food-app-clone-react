import CatMenuList from "./CatMenuList";
import { useState } from "react";
const Category = ({ data, setClickedInd, click, ind }) => {
  const ele = data;
  const handleClick = () => {
    if (click) {
      setClickedInd(-1);
    } else {
      setClickedInd(ind);
    }
  };
  // console.log(click);

  return (
    <div>
      <div
        className="flex justify-between hover:bg-gray-400 cursor-pointer"
        onClick={handleClick}
      >
        <h1>{ele.card.card.title} </h1>
        <span>⬇️</span>
      </div>
      {click && <CatMenuList data={ele} />}
    </div>
  );
};
export default Category;
