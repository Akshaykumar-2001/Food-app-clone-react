import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(userContext);
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="flex m-2 justify-between bg-pink-100">
      <div>
        <Link>
          <img className="w-48" alt="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div>
        <ul className="flex juistify-center">
          <li className="m-4 p-4">
            {onlineStatus ? (
              <span className="text-green-500 font-bold">online</span>
            ) : (
              <span className="text-red-500 font-bold">offline</span>
            )}
          </li>

          <li className="m-4 p-4">
            <Link to={"/home"}>Home</Link>
          </li>

          <li className="m-4 p-4">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="m-4 p-4">Contact</li>
          <li className="m-4 p-4">
            <Link to={"/cart"}>🛒-{cart.length}</Link>
          </li>
          <li className="m-4 p-4">{userName}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
