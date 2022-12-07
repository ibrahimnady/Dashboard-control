import { useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { DarkModeContext } from './../../context/darkModeContext';


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <>

      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Ibrahim Nady</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">Main</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <i className="fa-solid fa-gauge icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <p className="title">List</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <i className="fa-solid fa-user icon" />
                <span>User</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <i className="fa-solid fa-shop icon" />
                <span>Products</span>
              </li>
            </Link>

            <li>
              <i className="fa-solid fa-credit-card icon" />
              <span>Orders</span>
            </li>
            <li>
              <i className="fa-solid fa-truck icon" />
              <span>Delivery</span>
            </li>
            <p className="title">Useful</p>
            <li>
              <i className="fa-solid fa-chart-simple icon" />
              <span>Stats</span>
            </li>
            <li>
              <i className="fa-solid fa-bell icon" />
              <span>Notifications</span>
            </li>
            <p className="title">Service</p>
            <li>
              <i className="fa-solid fa-sitemap icon" />
              <span>System Health</span>
            </li>
            <li>
              <i className="fa-solid fa-folder-tree icon" />
              <span>Logs</span>
            </li>
            <li>
              <i className="fa-solid fa-gear icon" />
              <span>Settings</span>
            </li>
            <p className="title"></p>
            <li>
              <i className="fa-solid fa-id-card icon" />
              <span>Profile</span>
            </li>
            <li>
              <i className="fa-solid fa-right-from-bracket icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="coloroption" onClick={()=> dispatch({type:"LIGHT"})}></div>
          <div className="coloroption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
