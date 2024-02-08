import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price}$
        </div>
      ))}
    </div>
  );
};

export default CheckoutPage;
