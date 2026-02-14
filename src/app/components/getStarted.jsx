import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function GetStarted() {
  return (
    <section
      className="grid grid-cols-12 mb-15 pb-30 bg-[var(--surface-2)] text-[var(--background)]"
      aria-labelledby="hero-heading"
    >
      <div className="md:col-span-6 md:col-start-4 col-span-12 flex flex-col justify-between items-center text-center gap-10 h-full">
        <div className="mt-30 col-span-6 flex flex-col justify-start items-center text-center gap-6">
          <h2 id="hero-heading" className="text-5xl font-semibold">
            Get started today.
          </h2>

          <p className="text-xl">
            Ready to take the first step towards a happier, <br /> healthier you? 
            Contact me to book your first session. <br /> I look forward to starting
            this therapeutic journey with you.
          </p>
        </div>

        <Link
            href="/contact"
            className="border px-6 py-2 flex items-center gap-2 hover:bg-[var(--background)] hover:text-[var(--surface-2)] transition duration-500"
          >
            GET IN TOUCH <FaArrowRight aria-hidden="true" />
          </Link>
      </div>
    </section>
  );
}
