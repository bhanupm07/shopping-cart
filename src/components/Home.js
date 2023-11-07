import { faker } from "@faker-js/faker";
import { useContext, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../Context/Context";

faker.seed(100);

export default function Home() {
  const { products, setProducts } = useContext(CartContext);

  //   const productsArray = [...Array(20)].map(() => ({
  //     id: faker.string.uuid(),
  //     name: faker.commerce.productName(),
  //     price: faker.commerce.price(),
  //     image: faker.image.dataUri(),
  //   }));

  //     setProducts(productsArray);

  useEffect(() => {
    const productsArray = [...Array(20)].map(() => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    }));
    setProducts(productsArray);
  }, [setProducts]);

  const renderedProducts = products.map((prod) => {
    return <SingleProduct prod={prod} key={prod.id} />;
  });

  return <div className="products-div">{renderedProducts}</div>;
}
