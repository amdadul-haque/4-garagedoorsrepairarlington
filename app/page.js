import CarouselSlider from "./components/CarouselSlider";
import Features from "./components/Spring";
import Opener from "./components/Opener";
import Pricing from "./components/Pricing";
import Repair from "./components/Repair";
import Service from "./components/Service";
import Spring from "./components/Spring";
import Installation from "./components/Installation";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      <div className="max-w-screen-xl mx-auto px-4">
        <Repair />
        <Service />
        <Pricing />
        <Installation />
        <Spring />
        <Opener />
      </div>
    </>
  );
}




