import propTypes from "prop-types";
import Slider from "react-slick";
const Carousel = ({ setShowDataDestination, sliderRef, destinations }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setShowDataDestination(destinations[current]),
  };
  return (
    <div className="mt-10 lg:mt-0 lg:w-[500px]   lg:pt-6  lg:ml-10 ">
      <Slider ref={sliderRef} {...settings} className="">
        {destinations.map(({ images }, index) => (
          <div key={index} className=" ">
            <img
              src={images}
              className="w-[259px] h-[259px] md:w-[457px] md:h-[457px] m-auto  "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  setShowDataDestination: propTypes.func,
  sliderRef: propTypes.object,
  destinations: propTypes.array,
};
