export default function EndingTerms() {
  return (
    <section
      className="bg-[var(--secondary)] text-[var(--primary)] p-10"
      role="contentinfo"
  aria-labelledby="ending-terms-heading"
    >
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <div>
          <p className="flex flex-wrap justify-center md:gap-6 font-semibold underline text-center">
            <a href="*" title="Privacy & Cookies Policy">Privacy & Cookies Policy</a>
            <a href="" itle="Good Faith Estimate"> Good Faith Estimate</a>
            <a href="" title="Terms & Conditions">Terms & Conditions</a>
            <a href="" title="Disclaimer">Disclaimer</a>
          </p>
        </div>

        <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.</p>
      </div>
    </section>
  );
}
