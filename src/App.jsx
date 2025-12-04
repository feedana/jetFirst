import Navbar from "./Components/Navbar";
import HeroLeft from "./Components/HeroLeft";
import HeroRight from "./Components/HeroRight";
import Courses from "./Components/Courses";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <HeroLeft />
        <HeroRight />
      </section>

      <Courses />
    </>
  );
}
