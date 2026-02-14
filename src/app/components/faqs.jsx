"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you take insurance?",
      answer:
        "I am an out-of-network provider and do not bill insurance directly. Upon request, I can provide a superbill that you may submit to your insurance company for potential reimbursement.",
    },
    {
      question: "What are your rates?",
      answer:
        "My standard fee for a 50-minute individual therapy session is $225. I can discuss limited sliding scale options based on availability.",
    },
    {
      question: "Do you offer in-person or virtual sessions?",
      answer:
        "I offer in-person sessions in Santa Monica and secure telehealth sessions for clients located anywhere in California.",
    },
  ];

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-12 py-12 md:py-20"
      role="region"
  aria-labelledby="faq-heading"
    >
      <div className="col-span-6 px-6 py-12 md:p-12 flex justify-center order-1">
        <Image
          src="/faq.png"
          alt="Therapy session illustration representing growth and healing"
          width={500}
          height={600}
          className="w-full max-w-md h-[500px] md:h-[500px] object-cover rounded-t-[200px] md:rounded-t-[270px]"
          priority
        />
      </div>
      <div className="col-span-6 flex flex-col justify-center items-start px-6 py-12 md:p-12 gap-6 order-2">
        <h2 id="faq-heading"  className="text-4xl md:text-5xl ">
          FAQs
        </h2>

        <ul className="flex flex-col gap-4 w-full">
          <div className="">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="border-t border-b py-4 w-full flex flex-col"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex items-start gap-4 text-3xl cursor-pointer text-left"
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                  <span>{faq.question}</span>
                </button>

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
