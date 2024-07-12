import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  if (cart.length === 0) {
    return (
      <div className="border border-black m-4 p-4 ">
        <h1 className="font-bold text-xl flex justify-center">
          Cart is Empty !{" "}
        </h1>
        <span className="underline cursor-pointer my-2 flex justify-center">
          <Link to="/">Go to restaurant page !</Link>
        </span>
      </div>
    );
  }
  return (
    <div className="border border-black m-4 p-4 flex justify-center">
      <div className="m-4 p-4">
        {cart.map((ele) => (
          <h1 className="flex justify-between my-2">
            {ele.card.info.name}
            <span>- ₹ {ele.card.info.price / 100}</span>
          </h1>
        ))}
        <button
          className="border border-red-400 p-4 m-4 bg-slate-400"
          onClick={handleClick}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};
export default Cart;
