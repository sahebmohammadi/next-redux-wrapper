import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "../redux/counter/action";

const IncrementCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch(incrementCounter())}>Add To Count</button>
    </div>
  );
};

export default IncrementCounter;
