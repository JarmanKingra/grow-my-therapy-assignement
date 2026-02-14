
export default function Footer() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-12 px-6 md:px-16 py-12" aria-labelledby="hero-heading">
      <div className="flex flex-col gap-6 text-center md:text-start">
        <div className="flex flex-col gap-6">
          <h2 id="hero-heading" className="text-2xl font-semibold md:font-normal md:text-5xl">
            Lilac Template
          </h2>

          <p className="text-xl md:text-2xl">123 Example Road <br /> Minneapolis, MN</p>
          <p className="flex flex-col justify-start md:items-start text-xl md:text-2xl underline">
          <a href="">email@example.com</a>
          <a href="">(555)5555555</a>
          </p>
          
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col justify-start items-center md:items-center md:text-left text-center">
          <h2 id="hero-heading" className="text-2xl font-semibold md:font-normal md:text-4xl mb-8">
            Hours
          </h2>

          <p className="text-xl md:text-2xl">Monday – Friday <br />10am – 6pm</p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h2 id="hero-heading" className="text-2xl font-semibold md:font-normal md:text-4xl mb-8">
            Find
          </h2>
          <p className="flex flex-col justify-start md:items-end items-center text-xl md:text-2xl underline">
          <a href="*">Home</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          </p>
          
        </div>
      </div>
    </section>
  );
}
