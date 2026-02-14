import About from "./components/about";
import AboutMe from "./components/aboutMe";
import EndingTerms from "./components/endingTerms";
import FAQ from "./components/faqs";
import Footer from "./components/footer";
import GetStarted from "./components/getStarted";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import MyServices from "./components/services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <MyServices/>
      <About/>
      <Intro/>
      <FAQ/>
      <AboutMe/>
      <GetStarted/>
      <Footer/>
      <EndingTerms/>
    </>
  );
}
