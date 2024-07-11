import { createContext, useState } from "react";
import Body from "./body";
import Navbar from "./navbar";
import { countries_mock } from "./mock/country";

export const appContext = createContext();

function App() {
  const [countries, setCountries] = useState(countries_mock);
  return (
    <appContext.Provider value={[countries, setCountries]}>
      <div>
        <Navbar />
        <Body />
      </div>
    </appContext.Provider>
  );
}
export default App;
