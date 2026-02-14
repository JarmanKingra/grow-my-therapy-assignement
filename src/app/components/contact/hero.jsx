import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-12 bg-[var(--foreground-2)] md:p-20 md:flex-row justify-center items-center">
      <div className="col-span-6 place-items-center md:place-items-start">
        <h1 className=" text-4xl md:text-7xl mt-10 font-semibold  mb-5 md:mb-15">
          Let’s Connect
        </h1>
        <p className="text-xl mb-3">Starting therapy is courageous.</p>
        <p className="text-xl text-center md:text-start">
          Get in touch for questions, or to book a free 15-minute consultation.
        </p>
        <div className="col-span-6 p-8 pl-10 flex flex-col items-center">
          <Image
            src="/introPic1.png"
            alt="Therapy session illustration representing growth and healing"
            width={500}
            height={600}
            className="w-45 h-65 md:w-60 md:h-85 rounded-t-[270px]"
            priority
          />
        </div>
      </div>
      <div className="col-span-6 p-5">
        <div>
          <p className="bg-[var(--foreground)] text-[var(--background)] text-xl p-4 md:p-10 py-5 text-center md:text-start">
            <b>PLEASE NOTE:</b> I offer a complimentary 15-minute phone
            consultation to help us determine whether we’re a good fit. All
            inquiries are confidential, and I aim to respond within 1–2 business
            days.
          </p>
        </div>
      </div>
    </section>
  );
}
