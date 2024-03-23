import propTypes from "prop-types";

const ImageData = ({ destinations, showDataDestination }) => {
  return (
    <div className="">
      {destinations.map(({ name, description, distance, travel }, index) => (
        <div key={index} className="flex flex-col items-center  ">
          {showDataDestination.name === name && (
            <>
              <h1 className="text-center text-white text-[56px] font-['Bellefair'] md:text-[80px] lg:text-[100px] mt-6 lg:self-start">
                {name}
              </h1>
              <article className="w-[327px] text-center text-ice text-[15px]  font-['Barlow'] leading-[25px] md:w-[573px] md:text-base md:leading-7 lg:w-[444px] lg:text-start lg:leading-loose">
                {description}
              </article>
              <div className="w-[327px] h-px bg-gray-700 mt-8 md:w-[573px] lg:w-[444px]" />
              <div className="md:flex gap-2  lg:self-start">
                <div className="flex flex-col gap-3 mt-8 ">
                  <span className="w-[216px] text-center text-ice text-sm  font-['Barlow Condensed'] tracking-widest  uppercase lg:text-start ">
                    AVG. DISTANCE
                  </span>
                  <p className="w-[216px] text-center text-white text-[28px] font-normal font-['Bellefair'] uppercase lg:text-start">
                    {distance}
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                  <span className="w-[223px] text-center text-indigo-200 text-sm font-normal font-['Barlow Condensed'] uppercase tracking-widest lg:text-start ">
                    EST. TRAVEL TIME
                  </span>
                  <p className="w-[223px] text-center text-white text-[28px] font-normal font-['Bellefair'] uppercase lg:text-start">
                    {travel}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageData;
ImageData.propTypes = {
  destinations: propTypes.array,
  showDataDestination: propTypes.object,
};
