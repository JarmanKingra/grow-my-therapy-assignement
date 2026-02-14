import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero2() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 mb-12 md:mb-20" aria-labelledby="hero-heading">

      <div className="col-span-6 flex flex-col justify-between items-center text-left gap-6 bg-[var(--secondary)] order-2 md:order-1">
        <div className="flex flex-col gap-6 mt-10 md:mt-40">

          <h2 id="hero-heading" className="text-3xl md:text-5xl font-semibold">
            Live a fulfilling life.
          </h2>

          <p className="text-base md:text-xl">
          Life can be challenging—especially when you're trying to <br/> balance your personal and professional life. 
        </p>
        <p className="text-base md:text-xl">
          It's easy to feel like you're alone in facing these <br/> challenges, but I want you to know that I'm here to help. 
        </p>
        </div>

        <Link
          href="/contact"
          className="border-t hover:bg-[var(--foreground)] hover:text-[var(--secondary)] transition duration-300 w-full flex items-center justify-center order-3 md:order-2"
        >
          <span className="flex items-center gap-2 h-16">GET IN TOUCH <FaArrowRight aria-hidden="true" /></span>
        </Link>
      </div>

      <div className="col-span-6 order-1 md:order-2">
        <Image
          src="/hero2.png"
          alt="Therapy session illustration representing growth and healing"
          width={500}
          height={500}
          className="w-full h-full aspect-square object-cover"
          priority
        />
      </div>

    </section>
  );
}

