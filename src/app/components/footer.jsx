export default function Footer() {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-16 py-12"
      role="contentinfo"
  aria-labelledby="footer-main-heading"
    >
      <div className="flex flex-col gap-6 text-center md:text-start">
        <div className="flex flex-col gap-6">
          <h2
            id="footer-main-heading"
            className="text-2xl font-semibold md:font-normal md:text-5xl"
          >
            Dr. Maya Reynolds, PsyD
          </h2>

          <p className="text-xl md:text-2xl">
            123th Street 45 W <br /> Santa Monica, CA 90401
          </p>
          <p className="flex flex-col justify-start md:items-start text-xl md:text-2xl underline">
            <a href="mailto:dr.maya@therapy.com" title="Email Dr. Maya Reynolds">dr.maya@therapy.com</a>
            <a href="tel:15555555555" title="Call Dr. Maya Reynolds">(555) 555-5555</a>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col justify-start items-center md:items-center md:text-left text-center">
          <h2
            id="footer-hours-heading"
            className="text-2xl font-semibold md:font-normal md:text-4xl mb-8"
          >
            Hours
          </h2>

          <p className="text-xl md:text-2xl">
            Monday – Friday <br />
            10am – 6pm
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h2
            id="footer-find-heading"
            className="text-2xl font-semibold md:font-normal md:text-4xl mb-8"
          >
            Find
          </h2>
          <p className="flex flex-col justify-start md:items-end items-center text-xl md:text-2xl underline">
            <a href="/" title="Go to Home page">Home</a>
            <a href="/contact" title="Contact Dr. Maya Reynolds">Contact</a>
            <a href="/blog" title="Visit Blog">Blog</a>
          </p>
        </div>
      </div>
    </section>
  );
}
