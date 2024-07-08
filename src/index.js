import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import UseReducer from "./UseReducer/useReducer_Proj_2";
// import UseEffect from "./useEffect/useEffect";
// import App from "./App";
// import MyClass from "./MyClass/MyClass";
// import Props from "./Props/props";
// import UseState from "./UseState/useStateProj";
// import Input from "./Input/InputSample";
// import FuncUseState from "./FuncUseState/Say";
// import Event from "./Event/EventPractice";
// import LifeCycleMethod from "./LifeCycleMethod/LifeCycleSample";
// import { useReducer } from "./useReducer/useReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <Props /> */}
    {/* <MyClass /> */}
    {/* <UseState /> */}
    {/* <Input /> */}
    {/* <FuncUseState /> */}
    {/* <LifeCycleMethod /> */}
    {/* <UseEffect /> */}
    <UseReducer />
  </div>
);
