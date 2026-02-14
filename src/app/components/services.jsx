import Card from "./ServiceCard/card";

export default function MyServices() {
  const cards = [
    {
      title: "Self-Esteem",
      description:
        "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      imageSrc: "/serviceCard1.png",
    },
    {
      title: "Relationships",
      description:
        "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      imageSrc: "/serviceCard2.png",
    },
    {
      title: "Burnout",
      description:
        "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      imageSrc: "/serviceCard3.png",
    },
  ];

   return (
    <section
      className="px-4 md:px-12 py-12 flex flex-col items-start md:items-center text-left"
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
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
