import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-20"
      aria-labelledby="about-heading"
    >
      <div className="col-span-6 order-1">
        <Image
          src="/about.png"
          alt="Therapy session illustration representing growth and healing"
          width={600}
          height={600}
          className="w-full h-[280px] md:h-full object-cover"
          priority
        />
      </div>

      <div className="col-span-6 flex flex-col justify-between gap-6 bg-[var(--surface-1)] order-2">
        <div className="flex flex-col gap-6 p-8">
          <h2 id="hero-heading" className="text-3xl md:text-5xl font-semibold">
            You don’t have to do this all alone.
          </h2>
          <p className="text-base md:text-xl">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="list-disc text-base md:text-xl pl-6 md:pl-8 space-y-2">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>
          <p className="text-xl">
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>
        </div>

        <Link
          href="/contact"
          className="border-t px-6 hover:bg-[var(--foreground)] hover:text-[var(--secondary)] transition duration-300 w-full flex items-center justify-center"
        >
          <span className="flex items-center gap-2 h-16">
            WORK WITH ME <FaArrowRight aria-hidden="true" />
          </span>
        </Link>
      </div>
    </section>
  );
}
