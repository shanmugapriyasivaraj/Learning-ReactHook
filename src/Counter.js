import { useState, useEffect } from "react";

function Counter() {
  // const [state, setState] = React.useState({
  //   count: 0,
  //   name: "Varun",
  // });
  // const increment = () => setState({ ...state, count: state.count + 1 });
  // const decrement = () => setState({ ...state, count: state.count - 1 });
  // const reset = () => setState({ ...state, count: 0 });

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Varun");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const changeName = () => setName("Nithya");

  // componentDidMount
  useEffect(() => {
    console.log("UseEffect 1");
  }, []); //[]=>Dependency Array

  // componentDidUpdate
  useEffect(() => {
    console.log("UseEffect 2");
  });

  // componentDidUpdate - count

  useEffect(() => {
    console.log("UseEffect 3");
  }, [count]);

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Name : {name}</p>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}
export default Counter;
