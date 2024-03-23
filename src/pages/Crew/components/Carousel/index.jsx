import propTypes from "prop-types";
import Slider from "react-slick";
const Carousel = ({
  sliderRef,
  crew,
  showDataCrew,
  setShowDataCrew,
  handleClickButton,
}) => {
  var settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setShowDataCrew(crew[current]),
  };
  return (
    <>
      <div className="relative top-44 md:top-[410px] lg:absolute lg:top-20 lg:right-0  md:w-[500px]  m-auto   ">
        <Slider ref={sliderRef} {...settings}>
          {crew.map(({ images, name }, index) => (
            <div
              key={index}
              className="md:mt-10  w-[190px] h-[240px] md:w-[456.37px] lg:w-[433.09px] md:h-[460px]  "
            >
              <img src={images} alt={name} className=" m-auto h-full" />
              <div className="w-[327px] h-px m-auto bg-gray-700 md:hidden" />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" w-[88px] h-2.5 mt-5 flex gap-4 relative top-44 m-auto md:absolute md:top-[360px]  md:w-full md:justify-center md:mt-10 lg:top-[500px] lg:left-10 lg:w-[132px] lg:h-[15px]">
        {crew.map(({ images }, index) => (
          <div key={index}>
            <button
              className={`w-2.5 h-2.5 rounded-full ${
                showDataCrew.images === images
                  ? "bg-white"
                  : "opacity-20 bg-white"
              }`}
              onClick={() => handleClickButton(images, index)}
            ></button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;

Carousel.propTypes = {
  sliderRef: propTypes.object,
  crew: propTypes.array,
  showDataCrew: propTypes.object,
  setShowDataCrew: propTypes.func,
  handleClickButton: propTypes.func,
};
