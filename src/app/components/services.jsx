import Card from "./ServiceCard/card";

export default function MyServices() {
  const cards = [
    {
      title: "Anxiety & Overthinking",
      description:
        "If your mind rarely slows down and you're constantly bracing for what might go wrong, therapy can help you feel more steady and grounded.",
      imageSrc: "/serviceCard1.png",
    },
    {
      title: "Trauma & EMDR",
      description:
        "We’ll work at a pace that feels safe, helping you process difficult experiences while building stability and nervous system regulation.",
      imageSrc: "/serviceCard2.png",
    },
    {
      title: "Burnout & Perfectionism",
      description:
        "For high-achieving professionals who feel exhausted from internal pressure, therapy can help you reconnect and build a more sustainable rhythm.",
      imageSrc: "/serviceCard3.png",
    },
  ];

  return (
    <section
      className="px-4 md:px-12 py-12 flex flex-col items-start md:items-center text-left"
      role="region"
  aria-labelledby="service-heading"
    >
      <h2
        id="service-heading"
        className="text-3xl md:text-5xl font-semibold mb-8 md:mb-12"
      >
        My Specialties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            alt={`${title} therapy illustration`}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
