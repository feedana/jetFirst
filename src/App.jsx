import Navbar from "./Components/Navbar";
import HeroLeft from "./Components/HeroLeft";
import HeroRight from "./Components/HeroRight";

export default function App() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <HeroLeft />
        <HeroRight />
      </section>
    </>
  );
}