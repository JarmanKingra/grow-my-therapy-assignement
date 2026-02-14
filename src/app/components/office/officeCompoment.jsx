import Image from "next/image";

export default function OfficeComponent() {
  return (
    <section role="region"
  aria-labelledby="office-heading" className="bg-[var(--background)] py-12 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 id="office-heading" className="text-3xl md:text-4xl font-semibold text-[var(--primary)]">
          Dr. Maya Reynolds, PsyD – Office
        </h2>
        <p className="text-[var(--primary)] mt-2 text-lg md:text-xl">
          A calm, private space designed to help clients feel grounded and at ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/office1.png" 
            alt="Dr. Maya's Office 1"
            title="Dr. Maya's Office – Calm, private therapy space"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/office2.png" 
            alt="Dr. Maya's Office 2"
            title="Dr. Maya's Office – Comfortable and welcoming environment"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

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
