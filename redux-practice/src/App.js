import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";

function App() {
  const counter = useSelector((state) => state.counter);
  const randomColor = useSelector((state) => state.colorGen);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          {" "}
          Counter : <span style={{ color: randomColor }}>{counter}</span>{" "}
        </h1>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "RANDOM_COLOR" });
          }}
        >
          {" "}
          Increment{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
            dispatch({ type: "RANDOM_COLOR" });
          }}
        >
          {" "}
          Decrement{" "}
        </button>
        <Login />
      </header>
    </div>
  );
}

export default App;
