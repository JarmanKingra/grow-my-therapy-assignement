import Image from "next/image";

export default function OfficeComponent() {
  return (
    <section className="bg-[var(--background)] py-12 px-6 md:px-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--primary)]">
          Dr. Maya Reynolds, PsyD – Office
        </h2>
        <p className="text-[var(--primary)] mt-2 text-lg md:text-xl">
          A calm, private space designed to help clients feel grounded and at ease.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/office1.png" // replace with your image path
            alt="Dr. Maya's Office 1"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/office2.png" // replace with your image path
            alt="Dr. Maya's Office 2"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[var(--primary)] text-lg md:text-xl">
          The office is designed to be quiet, private, and welcoming. Natural
          light, comfortable seating, and an uncluttered environment help clients
          feel more at ease as soon as they arrive. Whether for in-person therapy
          or telehealth sessions, this space supports reflection, calm, and
          focus.
        </p>
      </div>
    </section>
  );
}
