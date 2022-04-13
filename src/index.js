import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counter from "./Counter";

function Test() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show ? <Counter /> : <></>}
    </>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));
