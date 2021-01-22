import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { useAuth } from "../components/authContext/AuthState";

const Nav = () => {
  const {
    user,
    isAuthenticated,
    message,
    isLoading,
    isError,
    logoutUser
  } = useAuth();

  if (!isLoading && !isError && !message) {
    console.log(user, isAuthenticated, message);
  }

  const [open, setOpen] = useState(false);
  const subMenu = (
    <div className={`sub-menu ${open ? "open-submenu" : null}`}>
      <MdClose
        size="1.5rem"
        onClick={() => setOpen(false)}
        className="close-icon"
      />

      <ul className="submenu-links">
        <li>
          <Link>New</Link>
        </li>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Furniture</Link>
        </li>
        <li>
          <Link>Best-sellers</Link>
        </li>
        <li>
          <Link>Clothing</Link>
        </li>
        <li>
          <Link>Shoes</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
      </ul>
    </div>
  );
  return (
    <nav className="nav-section">
      <div className="nav-container">
        <ul className="menu-icon">
          <div className="menu-icon-container">
            <li>
              <FiMenu size="1.5rem" onClick={() => setOpen(true)} />
            </li>
          </div>
        </ul>
        <ul className="brand">
          <li>
            <Link to="/">
              <h1>Jenni Kayne</h1>
            </Link>
          </li>
        </ul>
        <ul className="page-links">
          <li>
            <Link>New</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Furniture</Link>
          </li>
          <li>
            <Link>Best-sellers</Link>
          </li>
          <li>
            <Link>Clothing</Link>
          </li>
          <li>
            <Link>Shoes</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
        <ul className="account">
          <li>
            <Link to="/account">Account</Link>
          </li>
          {user && <li>Welcome, {user.name}</li>}
          {user && (
            <li>
              <button onClick={() => logoutUser()}>Logout</button>
            </li>
          )}
          {user && user.role === "admin" && (
            <li>
              <Link to="/account">Add product</Link>
            </li>
          )}
        </ul>
        <ul className="shopping-bag">
          <li>
            <AiOutlineShopping size="1.5rem" />
          </li>
        </ul>
      </div>
      {subMenu}
    </nav>
  );
};

export default withRouter(Nav);
