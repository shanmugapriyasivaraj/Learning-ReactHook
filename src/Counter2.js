import React from "react";

// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Reducer Function

const countReducer = (count, action) => {
  switch (action.type) {
    case INCREMENT: {
      return count + action.by;
    }
    case DECREMENT: {
      return count - action.by;
    }
    case RESET: {
      return action.by;
    }
    default: {
      return 0;
    }
  }
};

function Counter2() {
  const [count, dispatch] = React.useReducer(countReducer, 0);

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => dispatch({ type: INCREMENT, by: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: DECREMENT, by: 4 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </>
  );
}
export default Counter2;
