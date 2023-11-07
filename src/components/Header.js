import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <h1 className="title">Shopping Cart using useContext</h1>
      <ul className="nav">
        <li className="prod">
          <Link to="/">
            <AiFillHome className="icons" />
          </Link>
        </li>
        <li className="prod1">
          <Link to="/cart">
            <BsFillCartPlusFill className="icons" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
