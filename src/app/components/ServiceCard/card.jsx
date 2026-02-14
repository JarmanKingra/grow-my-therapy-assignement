import Image from "next/image";

export default function Card({ title, description, imageSrc, imageAlt }) {
  return (
    <article className="bg-[var(--secondary)] shadow-md py-6 px-3 border rounded-2xl">
      <header className="mb-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </header>

      <div className="flex flex-col items-center text-start gap-4">
        <p className="text-lg text-[var(--primary)]">{description}</p>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={240}     
            height={240}
            className="rounded-full object-cover w-60 h-60"
          />
        )}
      </div>
    </article>
  );
}
