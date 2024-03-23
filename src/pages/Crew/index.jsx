import ScreenPage from "../components/ScreenPages";
import crewTablet from "../../assets/crew/crew-tablet.jpg";
import crewMobile from "../../assets/crew/crew-mobile.jpg";
import crewDesktop from "../../assets/crew/crew-desktop.jpg";
import { arrayDataImages } from "../components/arrayDataImages";
import { useState, useRef } from "react";

import CrewTitle from "./components/CrewTitle";
import Carousel from "./components/Carousel";
import CrewDetails from "./components/CrewDetails";
const Crew = () => {
  const { crew } = arrayDataImages;
  const [showDataCrew, setShowDataCrew] = useState(crew[0]);
  const sliderRef = useRef();

  const handleClickButton = (image, index) => {
    const buttonSelected = crew.find(({ images }) => images === image);

    setShowDataCrew(buttonSelected);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="relative">
      <ScreenPage
        desktop={crewDesktop}
        tablet={crewTablet}
        mobile={crewMobile}
      />
      <CrewTitle />
      <Carousel
        sliderRef={sliderRef}
        crew={crew}
        showDataCrew={showDataCrew}
        setShowDataCrew={setShowDataCrew}
        handleClickButton={handleClickButton}
      />
      <CrewDetails crew={crew} showDataCrew={showDataCrew} />
    </div>
  );
};

export default Crew;
