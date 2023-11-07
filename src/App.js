import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes className="app">
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}
