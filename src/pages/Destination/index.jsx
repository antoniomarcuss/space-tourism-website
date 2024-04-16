import ScreenPage from "../components/ScreenPages";
import destinationTablet from "../../assets/destination/destination-tablet.jpg";
import destinationMobile from "../../assets/destination/destination-mobile.jpg";
import destinationDesktop from "../../assets/destination/destination-desktop.jpg";

import { arrayDataImages } from "../components/arrayDataImages";
import { useState, useRef } from "react";

import ImageData from "./components/ImageData";
import Carousel from "./components/Carousel";
import Title from "./components/Title";
import ImageNameDataSelected from "./components/ImageNameDataSelected";

const Destination = () => {
  const { destinations } = arrayDataImages;
  const [showDataDestination, setShowDataDestination] = useState(
    destinations[0]
  );

  const sliderRef = useRef();

  const handleButtonClick = (name, index) => {
    const selectedDestination = destinations.find(
      (destination) => destination.name === name
    );
    setShowDataDestination(selectedDestination);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="">
      <ScreenPage
        desktop={destinationDesktop}
        tablet={destinationTablet}
        mobile={destinationMobile}
      />

      <div className=" pb-10  relative top-20 md:top-32 lg:top-30 ">
        <div>
          <Title />
          <div className="">
            <Carousel
              setShowDataDestination={setShowDataDestination}
              sliderRef={sliderRef}
              destinations={destinations}
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:items-start lg:w-[445px] lg:h-[472px] lg:absolute right-5 lg:top-0    ">
          <ImageNameDataSelected
            destinations={destinations}
            handleButtonClick={handleButtonClick}
            showDataDestination={showDataDestination}
          />

          <ImageData
            destinations={destinations}
            showDataDestination={showDataDestination}
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
