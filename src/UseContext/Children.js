import React, { useContext } from "react";
import { AppContext } from "./App";

const Children = () => {
  const user = useContext(AppContext);
  return (
    <>
      <h3>AppContext예 존재하는 값의 name은 {user.name}입니다.</h3>
      <h3>AppContext예 존재하는 값의 email은 {user.email}입니다.</h3>
    </>
  );
};

export default Children;
