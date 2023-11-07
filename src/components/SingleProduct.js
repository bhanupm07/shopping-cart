import { useContext } from "react";
import { CartContext } from "../Context/Context";

export default function SingleProduct({ prod }) {
  const { cart, setCart } = useContext(CartContext);

  const handleAddClick = () => {
    setCart([...cart, prod]);
  };

  const handleRemoveClick = () => {
    setCart(
      cart.filter((obj) => {
        return obj.id !== prod.id;
      })
    );
  };

  return (
    <div className="card-main">
      <img src={prod.image} alt="product" className="card-img" />
      <div className="name-price">
        <span>{prod.name}</span>
        <span className="price">${prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button onClick={handleRemoveClick} className="btn">
          Remove from Cart
        </button>
      ) : (
        <button onClick={handleAddClick} className="btn">
          Add to Cart
        </button>
      )}
    </div>
  );
}
