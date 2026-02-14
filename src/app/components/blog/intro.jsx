import Image from "next/image";

export default function BlogIntro() {
  return (
    <section
      role="region"
      aria-labelledby="blogintro-heading"
      className="grid md:grid-cols-12"
    >
      <div className="col-span-6 p-8 md:pl-30 place-items-center">
        <Image
          src="/blogIntro.png"
          alt="Therapy session illustration representing growth and healing"
          width={400}
          height={500}
          className="rounded-t-[250px]"
          priority
        />
      </div>

      <div className="col-span-6 flex flex-col justify-center items-center md:items-start p-8 md:pl-0 text-start gap-6">
        <h1
          id="blogintro-heading"
          className=" text-4xl md:text-7xl font-semibold text-center md:text-start"
        >
          Dr. Maya's Blog
        </h1>

        <p className=" text-xl md:text-2xl text-center md:text-start">
          My tiny corner of the internet <br /> where I talk about all things{" "}
          <br /> anxiety, trauma and <br />
          burnout.
        </p>

        <p className="text-xl md:text-2xl font-semibold">Glad you’re here.</p>
      </div>
    </section>
  );
}
