import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Counter = () => {
  const [value, setValue] = useState(0);

  // Complex Counter
  const increase = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <div className="counter">
      <h3>Counter</h3>
      <h2>{value}</h2>

      <button className="btn" onClick={increase}><AiFillPlusCircle /></button>
      <button className="btn" onClick={() => { setValue(0) }}>Reset</button>
      <button className="btn" onClick={decrease}><AiFillMinusCircle /></button>
    </div>
  );
};

export default Counter;
