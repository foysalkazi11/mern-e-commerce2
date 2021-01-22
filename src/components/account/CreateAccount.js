import React, { useState, useEffect } from "react";
import { notification } from "../config/notification";
import { withRouter } from "react-router-dom";
import { Loading } from "../config/loading";
import { useAuth } from "../authContext/AuthState";

// form validation ................
const patterns = {
  name: /^[a-z\s-]{3,}$/i,
  username: /^[a-zA-Z0-9]{4,}$/i,
  email: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
};

const CreateAccount = (props) => {
  const {
    registerUser,
    clearError,
    isAuthenticated,
    isError,
    errorMessage,
    isLoading
  } = useAuth();
  if (!isLoading) {
    console.log(isError, errorMessage);
  }
  const [inputVlaue, setinputVlaue] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [checkValue, setcheckValue] = useState({
    validname: "",
    validemail: "",
    validpassword: ""
  });

  useEffect(() => {
    handleVlidate();
    //eslint-disable-next-line
  }, [inputVlaue]);

  useEffect(() => {
    if (isAuthenticated && !isError && !isLoading) {
      setinputVlaue({
        name: "",
        email: "",
        password: ""
      });
      if (props.location.state) {
        props.history.push(`${props.location.state.pathname}`);
      } else {
        props.history.push("/");
      }
    } else {
    }

    if (isError) {
      notification("error", "email is alredy exist please use another email");
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

  // form input validation by regex
  const handleVlidate = () => {
    if (patterns.name.test(inputVlaue.name)) {
      setcheckValue((pre) => {
        return { ...pre, validname: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return {
          ...pre,
          validname: "name contain at least 3 characters and no number"
        };
      });
    }
    if (patterns.email.test(inputVlaue.email)) {
      setcheckValue((pre) => {
        return { ...pre, validemail: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return { ...pre, validemail: "Enter valid email" };
      });
    }
    if (patterns.password.test(inputVlaue.password)) {
      setcheckValue((pre) => {
        return { ...pre, validpassword: "looks good" };
      });
    } else {
      setcheckValue((pre) => {
        return {
          ...pre,
          validpassword:
            "Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character (#?!@$%^&*-)  "
        };
      });
    }

    if (
      !patterns.name.test(inputVlaue.name) ||
      !patterns.email.test(inputVlaue.email) ||
      !patterns.password.test(inputVlaue.password)
    ) {
      return false;
    }
    return true;
  };

  //submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleVlidate()) {
      registerUser(inputVlaue);
    } else {
      notification("error", "please enter all firlds correctly");
    }
  };

  return (
    <section className="signup">
      <div className="signup-container">
        {isLoading && <Loading loading={isLoading} />}
        <h1>Create New Account</h1>
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={inputVlaue.name}
              onChange={handleChange}
            />
            {inputVlaue.name && (
              <p
                className={`${
                  checkValue.validname === "looks good" ? "valid" : "unvalid"
                }`}
              >
                {checkValue.validname}{" "}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={inputVlaue.email}
              onChange={handleChange}
            />
            {inputVlaue.email && (
              <p
                className={`${
                  checkValue.validemail === "looks good" ? "valid" : "unvalid"
                }`}
              >
                {checkValue.validemail}{" "}
              </p>
            )}
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
            {inputVlaue.password && (
              <p
                className={`${
                  checkValue.validpassword === "looks good"
                    ? "valid"
                    : "unvalid"
                }`}
              >
                {checkValue.validpassword}{" "}
              </p>
            )}
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default withRouter(CreateAccount);
