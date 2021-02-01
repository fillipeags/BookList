import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h2>Fillipe</h2>;
const Message = () => {
  return <h4>Hi this is my first component</h4>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
