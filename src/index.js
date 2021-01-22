import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { AuthState } from "./components/authContext/AuthState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
