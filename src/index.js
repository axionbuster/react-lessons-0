import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <App />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Program />
  </React.StrictMode>,
  document.getElementById("root")
);
