import React from "react";

function Counter() {
  const [state, setState] = React.useState({
    count: 0,
    name: "Varun",
  });
  const increment = () => setState({ ...state, count: state.count + 1 });
  const decrement = () => setState({ ...state, count: state.count - 1 });
  const reset = () => setState({ ...state, count: 0 });

  return (
    <>
      <p>Count : {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Name : {state.name}</p>
      <button onClick={() => setState({ ...state, name: "Nithya" })}>
        Change Name
      </button>
    </>
  );
}
export default Counter;
