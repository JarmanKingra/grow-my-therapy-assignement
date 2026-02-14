import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function GetStarted() {
  return (
    <section
      className="grid grid-cols-12 mb-15 pb-30 bg-[var(--surface-2)] text-[var(--primary)]"
      role="region"
  aria-labelledby="getstarted-heading"
    >
      <div className="md:col-span-6 md:col-start-4 col-span-12 flex flex-col justify-between items-center text-center gap-10 h-full">
        <div className="mt-30 col-span-6 flex flex-col justify-start items-center text-center gap-6">
          <h2 id="getstarted-heading" className="text-5xl font-semibold">
            Begin your therapy journey.
          </h2>

          <p className="text-xl">
            If you're ready to feel more steady, clear, and supported, <br /> I invite
            you to reach out. We can schedule an initial consultation to see if
            we’re a good fit and discuss the next steps.
          </p>
        </div>

        <Link
          href="/contact"
          title="Get in touch with Dr. Maya Reynolds to start therapy"
          className="border px-6 py-2 flex items-center gap-2 hover:bg-[var(--background)] hover:text-[var(--surface-2)] transition duration-500"
        >
          GET IN TOUCH <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
