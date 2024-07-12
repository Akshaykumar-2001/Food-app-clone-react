import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CatMenuList = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();
  const handleClick = (ele) => {
    dispatch(addItem(ele));
  };
  return (
    <div className="border border-black my-4">
      {props.data.card.card.itemCards.map((ele, ind) => (
        <div
          key={ind}
          className="hover:bg-red-300 cursor-pointer"
          onClick={() => handleClick(ele)}
        >
          <span>{ele.card.info.name}</span>
          <span>
            {" "}
            - {(ele.card.info.price || ele.card.info.defaultPrice) / 100}
          </span>
        </div>
      ))}
    </div>
  );
};
// console.log("akshay");

export default CatMenuList;
