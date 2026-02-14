export default function EndingTerms() {
  return (
    <section
      className="bg-[var(--secondary)] text-[var(--primary)] p-10"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <div>
          <p className="flex flex-wrap justify-center md:gap-6 font-semibold underline text-center">
            <a href="*">Privacy & Cookies Policy</a>
            <a href=""> Good Faith Estimate</a>
            <a href="">Terms & Conditions</a>
            <a href="">Disclaimer</a>
          </p>
        </div>

        <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
      </div>
    </section>
  );
}
