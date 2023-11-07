import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/Context";
import SingleProduct from "./SingleProduct";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState();

  const renderedCart = cart.map((prod) => {
    return <SingleProduct prod={prod} />;
  });

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <h2 className="total">Total: ${total}</h2>
      <div className="products-div">{renderedCart}</div>
    </div>
  );
}
