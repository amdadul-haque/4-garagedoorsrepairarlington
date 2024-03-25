import CarouselSlider from "./components/CarouselSlider";
import Pricing from "./components/Pricing";
import Repair from "./components/Repair";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      <div className="max-w-screen-xl mx-auto px-4">
        <Repair />
        <Service />
        <Pricing />
      </div>
    </>
  );
}




