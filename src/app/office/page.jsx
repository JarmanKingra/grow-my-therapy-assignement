import EndingTerms from "../components/endingTerms";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import OfficeComponent from "../components/office/officeCompoment";

export default function Home() {
  return (
    <>
      <Navbar/>
      <OfficeComponent/>
      <Footer/>
      <EndingTerms/>
    </>
  );
}
