import { Tag } from "antd";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[80%] m-auto">
      <h1 className="text-2xl font-bold">
        <a href="/" className="text-2xl">
          Logo
        </a>
      </h1>

      <Tag color="blue">2</Tag>
    </div>
  );
};

export default Navbar;
