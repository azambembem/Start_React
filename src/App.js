import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showCalc: false
    };
  }
  render() {
    const increase = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    const decrease = () => {
      if (this.state.count === 0) {
        return;
      }
      this.setState({
        count: this.state.count - 1
      });
    };
    const butonSwitch = () => {
      this.setState({
        showCalc: true
      });
    };
    return (
      <div className="wrapper">
        <div className="container">
          {this.state.showCalc ? (
            <div className="quotionWrapper">
              <div onClick={decrease} className="box decrease">
                -
              </div>
              <div className="amount">{this.state.count}</div>
              <div onClick={increase} className="box increase">
                +
              </div>
            </div>
          ) : (
            <div onClick={butonSwitch} className="buttonBuy">
              Buy Now
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
