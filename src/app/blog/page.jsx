import BlogsListing from "../components/blog/blogsListing";
import BlogIntro from "../components/blog/intro";
import Signup from "../components/blog/signup";
import EndingTerms from "../components/endingTerms";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogIntro/>
      <BlogsListing/>
      <Signup/>
      <Footer />
      <EndingTerms />
    </>
  );
}
