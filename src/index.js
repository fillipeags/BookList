import React from "react";
import ReactDOM from "react-dom";

function Greetings() {
  return <h4>Hi this is my first component</h4>;
}

ReactDOM.render(<Greetings />, document.getElementById("root"));
