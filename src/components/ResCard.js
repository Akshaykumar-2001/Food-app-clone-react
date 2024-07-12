import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[200px]  hover:bg-gray-200 hover:cursor-pointer hover:shadow-xl">
      <div>
        <img
          className="h-36 w-44"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold">{resData.info.name}</h3>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{resData.info.avgRating}</h4>
    </div>
  );
};
export default ResCard;
