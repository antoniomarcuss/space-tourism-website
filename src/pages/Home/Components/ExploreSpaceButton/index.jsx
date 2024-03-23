import { NavLink } from "react-router-dom";
import { useState } from "react";
const ExploreSpaceButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <NavLink to="/destination">
      <div className="w-[150px] h-[150px] md:w-[342px] md:h-[342px] lg:w-[450px] lg:h-[450px] relative">
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`w-full h-full left-0 top-0 absolute  rounded-full transition duration-500 ease-in-out ${
            isHover ? "bg-white opacity-10" : "bg-white md:opacity-0"
          }`}
        />
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="left-0 top-0 md:left-12 md:top-12 w-[150px] h-[150px]  md:w-[242px] md:h-[242px] lg:h-[274px] lg:w-[274px]   lg:left-[88px] lg:top-[88px] absolute  bg-white  rounded-full cursor-pointer"
        />
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="left-[27px] top-[65px] text-center text-xl md:left-[90px] md:top-[153px] md:text-[32px] lg:left-[150px]  lg:top-[207px] absolute text-gray-950 lg:text-[32px] font-normal font-['Bellefair'] tracking-widest cursor-pointer "
        >
          EXPLORE
        </div>
      </div>
    </NavLink>
  );
};

export default ExploreSpaceButton;
