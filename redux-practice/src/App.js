import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Counter : {counter} </h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          {" "}
          Increment{" "}
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          {" "}
          Decrement{" "}
        </button>
        <Login />
      </header>
    </div>
  );
}

export default App;
