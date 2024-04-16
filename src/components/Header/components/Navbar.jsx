import { NavLink, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import { ItemsArray } from "./ItemsArray";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [selectedUrl, setSelectedUrl] = useState(location.pathname);

  useEffect(() => {
    setSelectedUrl(location.pathname);
  }, [location]);

  return (
    <>
      {ItemsArray.map(({ url, title }, index) => (
        <li key={index}>
          <NavLink to={url}>
            <div className="text-white text-base font-bold  font-['Barlow Condensed']  tracking-[2.70px] flex items-center   justify-between md:flex-col md:relative   md:h-24 ">
              <button
                className=" md:m-auto lg:flex  hover:md:animate-pulse"
                style={{ animationDuration: "1s" }}
                onClick={() => setSelectedUrl(url)}
              >
                <span className="md:hidden lg:flex text-base font-bold font-['Barlow Condensed'] tracking-[2.70px] ">
                  0{index}
                </span>
                <span className=" ml-2 text-white text-base font-normal font-['Barlow Condensed'] tracking-[2.70px] text-sm   sm:tracking-widest lg:tracking-[2.70px] self-center ">
                  {title}
                </span>
              </button>
              {selectedUrl === url && (
                <div className="md:hidden w-1 h-[31px] bg-white" />
              )}
              {selectedUrl === url ? (
                <div className="hidden md:block  w-[86px] md:h-[2px] md:bg-white " />
              ) : (
                <div className="hidden md:block  w-[86px] md:h-[1px] md:bg-white opacity-20   " />
              )}
            </div>
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: propTypes.string,
  url: propTypes.string,
};
