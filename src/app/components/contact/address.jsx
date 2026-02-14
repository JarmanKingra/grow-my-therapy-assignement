import React from "react";
import Image from "next/image";

export default function Address() {
  return (
    <section className="grid md:grid-cols-12 bg-[var(--surface-2)] flex-row p-5 md:p-10 text-[var(--primary)] justify-center place-content-start md:items-center">
      <div className="col-span-6">
        <div>
          <h2 className="text-3xl md:text-4xl mb-6 md:mb-10 font-semibold">
            Office Location
          </h2>
          <p className="md:text-xl">
            123th Street 45 W <br />
            Santa Monica, CA 90401
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl mb-6 md:mb-10 mt-10  font-semibold">
            Hours
          </h2>
          <p className="md:text-xl">
            Monday – Friday <br />
            10am – 6pm
          </p>
        </div>
      </div>
      <div className="col-span-6 w-full">
        <div className=" aspect-square mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13845.475220236938!2d74.8255837!3d29.8247746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916cfd51769fad9%3A0xfbdc9fedd0dff635!2sGurdwara%20Sahib%2C%20Kingra!5e0!3m2!1sen!2sin!4v1771043588335!5m2!1sen!2sin"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
