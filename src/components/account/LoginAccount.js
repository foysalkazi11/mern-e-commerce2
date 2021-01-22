import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { notification } from "../config/notification";
import { useAuth } from "../authContext/AuthState";
import { Loading } from "../config/loading";

const LoginAccount = (props) => {
  const {
    loginUser,
    clearError,
    isAuthenticated,
    isError,
    errorMessage,
    isLoading
  } = useAuth();
  console.log(isAuthenticated, isError, isLoading);

  const [inputVlaue, setinputVlaue] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      // setloading(false);
      setinputVlaue({
        email: "",
        password: ""
      });
      if (props.location.state) {
        props.history.push(props.location.state);
      } else {
        props.history.push("/");
      }
    }
    if (isError) {
      notification("error", errorMessage);
      clearError();
    }
    //eslint-disable-next-line
  }, [isAuthenticated, isError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputVlaue((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const handleVlidate = () => {
    if (!inputVlaue.email || !inputVlaue.password) {
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleVlidate()) {
      loginUser(inputVlaue);
    } else {
      notification("error", "please enter both usernaem and password");
      clearError();
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        {isLoading && <Loading loading={isLoading} />}
        <h1>Login</h1>

        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={inputVlaue.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={inputVlaue.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(LoginAccount);
