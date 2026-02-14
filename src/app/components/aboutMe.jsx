"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function AboutMe() {
  const [openIndex, setOpenIndex] = useState(null);

  const ProfessionalBackground = [
    {
      question: "Education",
      answer:
        "Doctor of Psychology (PsyD) in Clinical Psychology, Pepperdine University. Bachelor’s degree in Psychology, University of California, Los Angeles.",
    },
    {
      question: "Licensure",
      answer: "Licensed Clinical Psychologist in the state of California.",
    },
    {
      question: "Certifications",
      answer:
        "EMDR-trained therapist. Advanced training in Cognitive Behavioral Therapy (CBT), trauma-informed care, and mindfulness-based interventions.",
    },
  ];

  return (
    <section
      className="md:pb-60 py-12 md:py-20 bg-[var(--secondary)] pb-60"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col px-6 md:px-12 gap-8">
        <h2
          id="hero-heading"
          className="text-2xl md:text-4xl font-extrabold text-center"
        >
          My Professional Background
        </h2>

        <ul className="flex flex-col gap-4 w-full">
          <div className="h-px bg-gray-300 my-4 w-full">
            {ProfessionalBackground.map((faq, index) => (
              <li
                key={index}
                className="border-t pt-3 w-full flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4 text-lg md:text-xl cursor-pointer w-full">
                  <span>{faq.question}</span>
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base md:text-lg pt-4">{faq.answer}</p>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}
