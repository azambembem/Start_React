import React, { createContext } from "react";
import Children from "./Children";

export const AppContext = createContext();

const App = () => {
  const user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
  };
  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <Children />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
