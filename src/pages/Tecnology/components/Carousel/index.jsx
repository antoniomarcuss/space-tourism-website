import propTypes from "prop-types";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
const Carousel = ({ setShowDataTechnology, technology, sliderRef }) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  let settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setShowDataTechnology(technology[current]),
  };
  return (
    <div className="mt-6  w-[376px] md:w-[773px] m-auto lg:w-[400px]  lg:absolute lg:right-0  ">
      <Slider ref={sliderRef} {...settings}>
        {technology.map(({ images }, index) => (
          <div key={index}>
            <img
              className={`w-full h-full`}
              src={isLargeScreen ? images[1] : images[0]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
Carousel.propTypes = {
  technology: propTypes.array,
  setShowDataTechnology: propTypes.func,
  sliderRef: propTypes.object,
};
