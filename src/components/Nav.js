import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { useAuth } from "../authContext/AuthState";
import { AiOutlineUser } from "react-icons/ai";
import { notification } from "../config/notification";

const Nav = () => {
  const { user, logoutUser, message, isLoading, isError } = useAuth();

  useEffect(() => {
    if (!isLoading && !isError && message) {
      notification("info", message);
    }
    //eslint-disable-next-line
  }, [message]);
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
          <Link to="/newProduct">New</Link>
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
            <Link to="/newProduct">New</Link>
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
          {!user && (
            <li>
              <Link to="/account">Account</Link>
            </li>
          )}
          {user && (
            <li className="user-icon">
              <AiOutlineUser size="1.5rem" />
              <div class="sub-menu-1">
                <ul>
                  <li>{user.name}</li>
                  <li>{user.email}</li>
                  <li>{user.role}</li>
                  <br className="break" />
                  <li>
                    <button onClick={() => logoutUser()}>Logout</button>
                  </li>
                  {user.role === "admin" && (
                    <li>
                      <Link to="/addProduct">Add product</Link>
                    </li>
                  )}
                </ul>
              </div>
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
