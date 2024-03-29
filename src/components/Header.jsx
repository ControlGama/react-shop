import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import icon_menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import icon_shopping from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const HandleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={icon_menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={HandleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrder(!toggleOrder)}
          >
            <img src={icon_shopping} alt="shopping cart" />
            {cart.length > 0 ? <div>{cart.length}</div> : null}
          </li>
        </ul>
      </div>

      {toggle && <Menu />}
      {toggleOrder && <MyOrder />}
    </nav>
  );
};

export default Header;
