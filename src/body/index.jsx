import countries from "../mock/country";
import CardComponent from "./card";
import Search from "./search";

const Body = () => {
  return (
    <div className="w-[80%] m-auto mt-8">
      <Search />
      <div className="flex flex-col gap-4 items-center mt-8">
        {countries.map((value) => (
          <CardComponent {...value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
