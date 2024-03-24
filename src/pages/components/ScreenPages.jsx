import propTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

const ScreenPage = ({ desktop, tablet, mobile }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className=" fixed  right-0 left-0  m-auto  ">
      {isDesktopOrLaptop && (
        <div>
          <img
            src={desktop}
            alt=""
            className="w-full  min-h-screen object-cover  "
          />
        </div>
      )}
      {isTablet && (
        <img
          src={tablet}
          alt=""
          className="w-full min-h-screen object-cover   "
        />
      )}
      {isMobile && (
        <img
          src={mobile}
          alt=""
          className="w-full min-h-screen object-cover   "
        />
      )}
    </div>
  );
};
//
export default ScreenPage;
ScreenPage.propTypes = {
  desktop: propTypes.string,
  tablet: propTypes.string,
  mobile: propTypes.string,
};
