import "./navbar.scss";
import profile_img from '../../img/Ibrahim Nady.jpg'
import { useContext } from 'react';
import { DarkModeContext } from './../../context/darkModeContext';


const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search...." />
            <i class="fa-solid fa-magnifying-glass" />
          </div>
          <div className="items">
            <div className="item">
              <i className="fa-solid fa-globe icon me-1" />
              English
            </div>
            <div className="item">
              <i className="fa-solid fa-moon icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
              <i className="fa-solid fa-compress icon" />
            </div>
            <div className="item">
              <i className="fa-solid fa-bell icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <i className="fa-solid fa-comment icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <i className="fa-solid fa-list icon" />
            </div>
            <div className="item">
              <img src={profile_img} alt="profile image" className="avatar" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
