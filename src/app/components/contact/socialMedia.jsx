import React from "react";
import Image from "next/image";

const images = [
  { image: "/blog4.png" },
  { image: "/image.png" },
  { image: "/blog1.png" },
  { image: "/hero.png" },
];

export default function SocialMedia() {
  return (
    <section className="flex flex-col justify-center items-start md:py-20 border border-b mb-10">
      <div>
        <h2 className="text-3xl md:text-5xl font-semibold p-10 pb-0">Find me on social.</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full p-10">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt="key"
            width={500}
            height={600}
            className=" w-full aspect-square object-cover"
            priority
          />
        ))}
      </div>
    </section>
  );
}
