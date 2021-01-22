import React from "react";
import CreateAccount from "./CreateAccount.js";
import LoginAccount from "./LoginAccount";

const Account = () => {
  return (
    <div className="account-wraper">
      <div className="account-container">
        <CreateAccount />
        <LoginAccount />
      </div>
    </div>
  );
};

export default Account;
