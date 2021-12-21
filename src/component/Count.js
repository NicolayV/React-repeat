import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Some text");
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const change = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input type="text" onChange={change} value={value}></input>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Count;
