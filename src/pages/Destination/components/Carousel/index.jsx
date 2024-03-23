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
    <div className="mt-10 lg:w-[761px] lg:pt-6 ">
      <Slider ref={sliderRef} {...settings}>
        {destinations.map(({ images }, index) => (
          <div key={index} className=" ">
            <img
              src={images}
              className="w-[259px] h-[259px] md:w-[457px] md:h-[457px] m-auto "
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
