import { Tag } from "antd";
import { appContext } from "./App";
import { useContext } from "react";

const Navbar = () => {
  const [countries] = useContext(appContext);

  return (
    <div className="flex justify-between w-[80%] m-auto">
      <h1 className="text-2xl font-bold">
        <a href="/" className="text-2xl">
          Logo
        </a>
      </h1>

      <Tag color="blue">{countries.length}</Tag>
    </div>
  );
};

export default Navbar;
