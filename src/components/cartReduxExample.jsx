import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cart.actions";
import { Link } from "react-router-dom";

const CartRedux = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart Redux Example</h1>
      <p>
        Redux is a predictable state container for JavaScript apps. It helps you
        write applications that behave consistently, run in different
        environments (client, server, and native), and are easy to test. It is a
        library for managing application state.
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: 1,
              name: "Product 1",
              price: 100,
            })
          )
        }
      >
        Add To Cart
      </button>
        <Link to={"/checkout"} > Checkout Page </Link>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartRedux;
