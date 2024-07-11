import { Input } from "antd";
import React, { useContext } from "react";
import { appContext } from "../App";
import { countries_mock } from "../mock/country";

const Search = () => {
  const [, setCountry] = useContext(appContext);
  return (
    <Input
      onChange={(e) => {
        setCountry(
          countries_mock.filter((value) =>
            value.country.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }}
      placeholder="아무거나 입력~"
      type="search"
    />
  );
};

export default Search;
