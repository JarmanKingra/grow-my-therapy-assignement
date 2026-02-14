import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="md:grid md:grid-cols-12" aria-labelledby="hero-heading">
      <div className="col-span-6 p-4 sm:p-8 pl-4 sm:pl-10">
        <Image
          src="/hero.png"
          alt="Therapy session illustration representing growth and healing"
          width={500}
          height={600}
          className="w-64 sm:w-96 md:w-[500px] h-auto rounded-t-[250px] mx-auto"
          priority
        />
      </div>

      <div className="col-span-6 flex flex-col justify-center items-center pb-8 md:p-8  text-center gap-6">
        <h1 id="hero-heading" className=" text-3xl md:text-5xl font-semibold">
          Find steadiness in the midst of anxiety and burnout
        </h1>

        <p className=" text-xl md:text-2xl">Therapy for high-achieving adults in Santa Monica, CA & throughout California</p>

        <Link
          href="/contact"
           title="Connect with Dr. Maya Reynolds for a therapy session"
          className="border px-6 py-2 flex items-center gap-2 hover:bg-[var(--foreground)] hover:text-white transition duration-300"
        >
          CONNECT TO ME <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
