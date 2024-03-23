import ScreenPage from "../components/ScreenPages";
import technologyTablet from "../../assets/technology/technology-tablet.jpg";
import technologyMobile from "../../assets/technology/technology-mobile.jpg";
import technologyDesktop from "../../assets/technology/technology-desktop.jpg";
import { arrayDataImages } from "../components/arrayDataImages";

import { useState, useRef } from "react";

import Title from "./components/Title";
import Carousel from "./components/Carousel";
import ShowButtonSelected from "./components/ShowButtonSelected";

const Technology = () => {
  const { technology } = arrayDataImages;
  const [showDataTechnology, setShowDataTechnology] = useState(technology[0]);

  const sliderRef = useRef();
  const handleSelectedClick = (image, index) => {
    const selected = technology.find(({ images }) => images === image);
    setShowDataTechnology(selected);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="relative">
      <ScreenPage
        desktop={technologyDesktop}
        tablet={technologyTablet}
        mobile={technologyMobile}
      />
      <div className="absolute w-full top-24 md:top-32">
        <Title />

        <div className="lg:flex lg:flex-row-reverse   ">
          <Carousel
            setShowDataTechnology={setShowDataTechnology}
            technology={technology}
            sliderRef={sliderRef}
          />
          <ShowButtonSelected
            technology={technology}
            showDataTechnology={showDataTechnology}
            handleSelectedClick={handleSelectedClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
