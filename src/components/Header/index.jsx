import close from "../../assets/shared/icon-close.svg";
import logo from "../../assets/shared/logo.svg";
import burger from "../../assets/shared/icon-hamburger.svg";

import { useState } from "react";
import Navbar from "./components/Navbar";
import { NavbarMobile } from "./components/NavbarMobile";

const Header = () => {
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);
  const handleClick = () => {
    setIsBurgerVisible(!isBurgerVisible);
  };

  return (
    <header className=" relative  z-50 ">
      <div className="absolute flex items-center justify-between w-full p-5 text-white ">
        <div className="w-10 h-10 lg:top-6">
          <img
            src={logo}
            alt=""
            className="text-dark lg:top-10 absolute  w-10 h-10  bg-white rounded-full"
          />
          <div className="lg:w-[473px] lg:h-px lg:opacity-25 lg:bg-white top-16 absolute left-20" />
        </div>
        <div className="w-6 h-[21px]  ">
          <button type="button" onClick={handleClick}>
            <img
              src={isBurgerVisible ? close : burger}
              alt=""
              className=" top-6 absolute md:hidden cursor-pointer text-ice z-50  "
            />
          </button>
        </div>
        <ul className=" hidden md:w-[450px] md:h-24 md:bg-white md:bg-opacity-5 md:backdrop-blur-[81.55px] md:absolute md:top-0 right-0 md:flex items-center justify-evenly lg:w-[830px] lg:top-5 ">
          <Navbar />
        </ul>
        <NavbarMobile
          isBurgerVisible={isBurgerVisible}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
