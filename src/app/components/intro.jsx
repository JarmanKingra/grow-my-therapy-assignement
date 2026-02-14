import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Intro() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-12 py-12 md:py-20 bg-[var(--secondary)] overflow-hidden"
      aria-labelledby="intro-heading"
    >
      <div className="col-span-6 flex flex-col justify-center items-start px-6 py-12 md:p-12 gap-6 order-2 md:order-1">
        <h2 id="hero-heading" className="text-5xl">
          Hi, I’m Lilac.
        </h2>

        <div className="text-xl md:text-2xl place-items-center">
          <p className="text-base md:text-xl">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>

          <Link
            href="/contact"
            className="border text-sm font-semibold py-3 mt-8 md:mt-12 w-30 flex justify-center items-center gap-2 hover:bg-[var(--foreground)] hover:text-[var(--secondary)] transition duration-300"
          >
            LET'S CHAT <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="col-span-6 px-6 py-12 md:p-12 relative flex justify-center order-1 md:order-2">
        <Image
          src="/introPic1.png"
          alt="Therapy session illustration representing growth and healing"
          width={500}
          height={600}
          className="w-full max-w-md object-cover rounded-t-[200px] md:rounded-t-[270px]"
          priority
        />

        <Image
          src="/introPic2.png"
          alt="Overlay illustration"
          width={200}
          height={200}
          className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-24 h-24 md:w-40 md:h-40 rounded-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
