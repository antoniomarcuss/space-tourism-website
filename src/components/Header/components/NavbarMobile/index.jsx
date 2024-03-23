import Navbar from "../Navbar";
import propTypes from "prop-types";
export const NavbarMobile = ({ isBurgerVisible, handleClick }) => {
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {isBurgerVisible && (
        <div onClick={handleClick} className="fixed inset-0 z-20">
          <menu
            onClick={handleMenuClick}
            className=" md:hidden absolute right-0 min-h-svh w-[254px] top-0 bottom-0  bg-white bg-opacity-5 backdrop-blur-[81.55px]"
          >
            <div className=" mt-24 pl-8 flex flex-col gap-8 w-[98%]">
              <Navbar />
            </div>
          </menu>
        </div>
      )}
    </>
  );
};

NavbarMobile.propTypes = {
  isBurgerVisible: propTypes.bool,
  handleClick: propTypes.func,
};
