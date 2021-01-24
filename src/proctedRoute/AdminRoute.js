import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../authContext/AuthState";

const AdminRoute = (props) => {
  const { user } = useAuth();
  return (
    <Route
      path={props.path}
      render={(data) =>
        user && user.role === "admin" ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/", state: data.location }} />
        )
      }
    ></Route>
  );
};

export default AdminRoute;
