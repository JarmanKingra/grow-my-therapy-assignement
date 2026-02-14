
import Address from "../components/contact/address";
import Hero from "../components/contact/hero";
import SocialMedia from "../components/contact/socialMedia";
import EndingTerms from "../components/endingTerms";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Address/>
      <SocialMedia/>
      <Footer />
      <EndingTerms />
    </>
  );
}