import { CDN_URL, RES_API_LINK } from "../utils/constants";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CatMenuList from "./CatMenuList";
import Category from "./Category";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState(null);
  const { resId } = useParams();
  const [clickedInd, setClickedInd] = useState(-1);
  const fetchData = async () => {
    const data = await fetch(RES_API_LINK + resId);
    const json = await data.json();
    setResMenuData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (resMenuData === null) {
    return <h1>Loading.....</h1>;
  }

  const categories =
    resMenuData?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="m-4">
      <img
        className="w-72"
        src={
          CDN_URL + resMenuData.data.cards[2].card.card.info.cloudinaryImageId
        }
      />
      <h1 className="font-bold">{resMenuData.data.cards[0].card.card.text}</h1>
      {categories.map((ele, ind) => {
        // return <h1>{ele.card.card.title}</h1>;
        return (
          <div>
            <Category
              data={ele}
              setClickedInd={setClickedInd}
              click={ind === clickedInd ? true : false}
              ind={ind}
              key={ind}
            />
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
