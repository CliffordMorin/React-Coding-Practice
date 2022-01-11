import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      {isLogged ? (
        <>
          <h1>You are signed in!!!!</h1>
          <button onClick={() => dispatch({ type: "SIGN_IN" })}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1>You need to Sign In!!</h1>
          <button onClick={() => dispatch({ type: "SIGN_IN" })}>Sign In</button>
        </>
      )}
    </div>
  );
};

export default Login;
