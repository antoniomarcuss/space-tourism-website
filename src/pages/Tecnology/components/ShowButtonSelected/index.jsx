import propTypes from "prop-types";
const ShowButtonSelected = ({
  technology,
  showDataTechnology,
  handleSelectedClick,
}) => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center  lg:w-[450px] lg:h-[303px] lg lg:ml-20  lg:gap-10 lg:absolute lg:left-10 lg:top-20">
      <div className="flex justify-center items-start mt-10 gap-6 lg:flex-col">
        {technology.map(({ images }, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-full flex items-center justify-center md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 ${
              showDataTechnology.images === images
                ? "  bg-white"
                : "opacity-25  border hover:border-2  hover:border-white "
            }`}
            onClick={() => handleSelectedClick(images, index)}
          >
            <span
              className={`text-base font-normal font-['Bellefair'] tracking-wide  text-gray-950  lg:text-[32px] lg:tracking-widest  ${
                showDataTechnology.images === images
                  ? " text-gray-950"
                  : "text-white  "
              }  `}
            >
              {index + 1}
            </span>
          </button>
        ))}
      </div>
      <div>
        {technology.map(({ name, description }, index) => (
          <div key={index}>
            {showDataTechnology.name === name && (
              <div className="flex flex-col justify-center items-center  mt-7 lg:w-[550px] lg:h-[303px] gap-6 lg:items-start ">
                <h2 className="text-center text-ice text-sm font-normal font-['Barlow Condensed'] tracking-widest md:text-base md:tracking-[2.70px] lg:text-start ">
                  THE TERMINOLOGY…
                </h2>
                <h1 className="w-[347px] text-center text-white text-2xl font-normal font-['Bellefair'] uppercase md:w-[457px] md:text-[40px] lg:text-[56px] lg:w-full lg:text-start">
                  {name}
                </h1>
                <div className="w-[327px] text-center text-ice text-[15px] font-normal font-['Barlow'] leading-[25px] md:w-[458px] md:text-base  md:leading-7 lg:w-[444px] lg:text-lg lg:leading-loose lg:text-start">
                  {description}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowButtonSelected;

ShowButtonSelected.propTypes = {
  technology: propTypes.array,
  showDataTechnology: propTypes.object,
  handleSelectedClick: propTypes.func,
};
