import React, { useState } from "react";
import { logout } from "../../../actions/userAction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CloseIcon from "@material-ui/icons/Close";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LoginIcon from "@mui/icons-material/Login";
import "./SideBar.css";

const Sidebar = ({ handleSideBarMenu, isAuthenticated, user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const logOutHandler = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
    handleSideBarMenu();
  };

  // Submenu for Categories
  const categoriesSubMenu = [
    { name: "Men Suits", path: "#" },
    { name: "Women Suits", path: "#" },
    { name: "Blazers", path: "#" },
    { name: "T-Shirts", path: "#" },
    { name: "Formals", path: "#" },
    { name: "Pajamas", path: "#" },
    { name: "Jodhpuri Suits", path: "#" },
    { name: "Kurta Set", path: "#" },
    { name: "Sherwani", path: "#" },
    { name: "Shirts & Trousers", path: "#" },
    { name: "HighWaist Trousers", path: "#" },
  ];

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="sidebar-container">
      <button className="sidebar-close-btn" onClick={handleSideBarMenu}>
        <CloseIcon />
      </button>
      <ul className="sidebar-menu">
        {isAuthenticated && user.role === "admin" && (
          <Link
            to="/admin/dashboard"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={handleSideBarMenu}
          >
            <li className="sidebar-menu-item">
              <DashboardIcon fontSize="large" />
              <span className="sidebar-menu-item-text">Dashboard</span>
            </li>
          </Link>
        )}
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }} onClick={handleSideBarMenu}>
          <li className="sidebar-menu-item">
            <HomeIcon fontSize="large" />
            <span className="sidebar-menu-item-text">Home</span>
          </li>
        </Link>
        <li className="sidebar-menu-item" onClick={toggleCategories}>
          <CategoryIcon fontSize="large" />
          <span className="sidebar-menu-item-text">Categories</span>
        </li>

        {/* Submenu for Categories */}
        {isCategoriesOpen && (
          <ul className="sidebar-submenu">
            {categoriesSubMenu.map((category, index) => (
              <Link
                to={category.path}
                key={index}
                style={{ color: "inherit", textDecoration: "none" }}
                onClick={handleSideBarMenu}
              >
                <li className="sidebar-submenu-item">{category.name}</li>
              </Link>
            ))}
          </ul>
        )}

        <Link
          to="/products"
          style={{ color: "inherit", textDecoration: "none" }}
          onClick={handleSideBarMenu}
        >
          <li className="sidebar-menu-item">
            <Inventory2Icon fontSize="large" />
            <span className="sidebar-menu-item-text">Products</span>
          </li>
        </Link>

        <Link
          to="/contact"
          style={{ color: "inherit", textDecoration: "none" }}
          onClick={handleSideBarMenu}
        >
          <li className="sidebar-menu-item">
            <ContactPageIcon fontSize="large" />
            <span className="sidebar-menu-item-text">Contact</span>
          </li>
        </Link>
        <Link
          to="/about_us"
          style={{ color: "inherit", textDecoration: "none" }}
          onClick={handleSideBarMenu}
        >
          <li className="sidebar-menu-item">
            <InfoIcon fontSize="large" />
            <span className="sidebar-menu-item-text">About Us</span>
          </li>
        </Link>
        <Link
          to="/account"
          style={{ color: "inherit", textDecoration: "none" }}
          onClick={handleSideBarMenu}
        >
          <li className="sidebar-menu-item">
            <AccountCircleIcon fontSize="large" />
            <span className="sidebar-menu-item-text">Account</span>
          </li>
        </Link>

        {isAuthenticated ? (
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }} onClick={handleSideBarMenu}>
            <li className="sidebar-menu-item" onClick={logOutHandler}>
              <ExitToAppIcon fontSize="large" />
              <span className="sidebar-menu-item-text">Logout</span>
            </li>
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={handleSideBarMenu}
          >
            <li
              className="sidebar-menu-item"
              style={{ textDecorationLine: "none", textDecoration: "none" }}
            >
              <LoginIcon fontSize="large" />
              <span className="sidebar-menu-item-text">Login</span>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
