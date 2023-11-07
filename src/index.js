import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./Context/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <App />
  </Context>
);
