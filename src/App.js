// import MyComponents from "./MyComponents";

// const App = () => {
//   return <MyComponents name={3}>리액트</MyComponents>;
// };

// export default App;

import React from "react";
import "./App.css";
import img1 from "./flowers.png";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <img src={img1} alt="flowers" />
          </div>
          <div className="body">
            <p className="preTitle">July 13 I Read in 6 minutes</p>
            <h3> Cactus Succulent Care Tips</h3>
            <p className="description">
              Carti are succulents are easy care plants for any home or patio
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
