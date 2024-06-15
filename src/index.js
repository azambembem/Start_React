import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import MyClass from "./MyClass/MyClass";
// import Props from "./Props/props";
import UseState from "./UseState/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Props /> */}
    {/* <MyClass /> */}
    <UseState />
  </div>
);
