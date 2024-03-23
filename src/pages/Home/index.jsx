import homeTablet from "../../assets/home//home-tablet.jpg";
import homeMobile from "../../assets/home/home-mobile.jpg";
import homeDesktop from "../../assets/home/home-desktop.jpg";
import ScreenPage from "../components/ScreenPages";
import ExploreSpaceButton from "./Components/ExploreSpaceButton";
import SpaceTravelIntro from "./Components/SpaceTravelIntro";

const Home = () => {
  return (
    <div className=" relative h-[90vh]">
      <ScreenPage
        desktop={homeDesktop}
        tablet={homeTablet}
        mobile={homeMobile}
      />

      <div className=" absolute flex-col min-h-[87%]  w-full flex items-center mt-14 justify-between   md:mt-32 lg:flex-row lg:justify-around">
        <SpaceTravelIntro />
        <ExploreSpaceButton />
      </div>
    </div>
  );
};

export default Home;
