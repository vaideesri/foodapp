
import { Link } from 'react-router-dom';
import { useState } from 'react';
import category from "../images/category.png";
import item from "../images/item.png";
import restaurant from "../images/restaurant.png";
import offer from "../images/offer.png";
import menu from "../images/menu.png"
import logout from "../images/logout.png"
import '../App.css'
const SideBar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  return (
    <div>
      <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
        <header>
          <div className="image-text">
            <span className="image">{/*<img src="logo.png" alt="" />*/}</span>
          </div>
          <img src={menu} className="icon toggler" onClick={toggleSidebar}/>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/category">
                  <img src={category} className='icon' />
                  <span className="text nav-text">Category Master</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/item">
                  <img src={item} className='icon'/>
                  <span className="text nav-text">Item Master</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/restaurant">
                  <img src={restaurant} className='icon'/>
                  <span className="text nav-text">Restaurant</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/offers">
                  <img src={offer} className='icon'/>
                  <span className="text nav-text">Offers</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="home">
        <div>
          <h1 className="text">FOOD CART</h1>
          <img src={logout} className='logout'/>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
