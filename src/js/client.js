import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();
    this._name = "Tsutomu (constructor)";
  }
  render() {
    let name = "Tsutomu";
    return (
      <>
      <h1>Welcome!</h1>
      <h1>It Works!</h1>
      <h1>It's {name}! {1 + 2}</h1>
      <h1>It's {this.get_result(3)}!</h1>
      <h1>It's { ((num) => { return 1 + num; })(3) }!</h1>
      <h1>It's {this._name}!</h1>
      </>
    );
  }
  get_result(num) {
    return 1 + num;
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);