import propTypes from "prop-types";
const ImageNameDataSelected = ({
  destinations,
  handleButtonClick,
  showDataDestination,
}) => {
  return (
    <div className=" flex justify-center items-center md:h-[34px] h-7 gap-4 md:gap-9 mt-6 lg:mt-5">
      {destinations.map(({ name }, index) => (
        <div key={index} className="">
          <button
            onClick={() => handleButtonClick(name, index)}
            className="hover:md:animate-pulse"
            style={{ animationDuration: "1s" }}
          >
            <span className="text-white  text-sm font-['Barlow Condensed'] tracking-widest md:text-base md:tracking-[2.70px]">
              {name}
            </span>

            <div
              className={`w-full bg-white   ${
                showDataDestination.name === name
                  ? "h-[3px] "
                  : "h-[3px] opacity-5"
              } `}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageNameDataSelected;
ImageNameDataSelected.propTypes = {
  destinations: propTypes.array,
  handleButtonClick: propTypes.func,
  showDataDestination: propTypes.object,
};
