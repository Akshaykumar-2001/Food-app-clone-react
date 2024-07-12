import ResCard from "./ResCard";
import { API_LINK } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import Footer from "./Footer";

const Body = () => {
  let [resArr, setResArr] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [originalResArr, setOriginalResArr] = useState([]);
  let [currName, setCurrName] = useState("");
  let { userName, setUserName } = useContext(userContext);

  const fetchData = async () => {
    const res = await fetch(API_LINK);
    const data = await res.json();

    let temp =
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setResArr(temp);
    setOriginalResArr(temp);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = () => {
    setResArr(originalResArr);
  };
  if (resArr.length === 0) {
    return (
      <div className="p-4 m-4">
        <h1>No result found</h1>
        <h1 className="underline cursor-pointer" onClick={handleClick}>
          search again
        </h1>
      </div>
    );
  }
  return (
    <div className="">
      <div className="search">
        <input
          className="border border-black m-4  px-1"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-4 p-2  border border-black shadow-lg bg-green-200"
          onClick={() => {
            if (searchText.length === 0) {
              setResArr(originalResArr);
            } else {
              let updatedResArr = originalResArr.filter((ele) => {
                return ele.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setResArr(updatedResArr);
            }
          }}
        >
          Search
        </button>

        <button
          className="m-4 p-2  border border-black shadow-lg bg-green-200"
          onClick={() => {
            let updatedResArr = originalResArr.filter(
              (curr) => curr.info.avgRating > 4.2
            );
            setResArr(updatedResArr);
          }}
        >
          top rated
        </button>
        <div className="mx-4">
          <label htmlFor="userInput">Edit user Name :</label>
          <input
            type="text"
            id="userInput"
            className="border border-black mx-1 px-1"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {resArr.map((resObj) => {
          return (
            <Link key={resObj.info.id} to={"/restaurant/" + resObj.info.id}>
              <ResCard resData={resObj} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Body;
