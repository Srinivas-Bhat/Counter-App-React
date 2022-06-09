import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, adds, clear, divide, minus, multiply, substract } from "./Store/action";

function App() {
  // const [count, setCount] =  useState(0);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0)
  const count = useSelector((state) => state.count);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add(1))}>+</button>
        <button onClick={() => dispatch(minus(1))}>-</button>
      </div>
      <input
        type="number"
        placeholder="enter a number"
        onChange={handleChange}
      />
      <br />
      <button onClick={() => dispatch(adds(Number(input)))}>+</button>
      <button onClick={() => dispatch(substract(Number(input)))}>-</button>
      <br />
      <button onClick={() => dispatch(multiply(Number(input)))}>*</button>
      <button onClick={() => dispatch(divide(Number(input)))}>/</button>
      <br />
      <br/>
      <button onClick={() => dispatch(clear())}>clear</button>
    </div>
  );
}

export default App;
