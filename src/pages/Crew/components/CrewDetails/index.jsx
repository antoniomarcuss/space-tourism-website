import propTypes from "prop-types";

const CrewDetails = ({ crew, showDataCrew }) => {
  return (
    <div className=" mt-5 relative top-48 md:absolute md:top-40 w-full lg:mt-20    ">
      {crew.map(({ role, name, bio }, index) => (
        <div key={index}>
          {showDataCrew.name === name && (
            <div className="flex flex-col justify-center items-center gap-4 md:gap-8 lg:absolute   lg:left-14 lg:items-start   ">
              <div className="flex-col justify-center items-center gap-2 flex lg:items-start ">
                <div className="opacity-50 text-center text-white text-base font-normal font-['Bellefair'] uppercase md:text-2xl lg:text-[32px]  lg:text-start   ">
                  {role}
                </div>
                <div className="w-[327px] text-center text-white text-2xl font-normal font-['Bellefair'] uppercase md:w-[457px] md:text-[40px] md:mt-2  lg:text-start lg:text-[56px] lg:w-full">
                  {name}
                </div>
              </div>
              <div className="w-[327px] text-center text-ice text-[15px] font-normal font-['Barlow'] leading-[25px] md:w-[520px] md:text-base md:leading-7 lg:w-[444px] lg:text-start ">
                {bio}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CrewDetails;
CrewDetails.propTypes = {
  crew: propTypes.array,
  showDataCrew: propTypes.object,
};
