"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({ title, imageSrc, imageAlt, date, slug }) {
  const router = useRouter();
  return (
    <article className="bg-[var(--background)] shadow-md py-6 px-3 m-5">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          title={`Read full blog: ${title}`}
          width={500}
          height={500}
          className="object-cover w-full aspect-video mb-5 cursor-pointer"
          onClick={() => router.push(`/blog/${slug}`)}
        />
      )}
      <time dateTime={date} className="text-lg text-gray-700 mb-3">
        {date}
      </time>
      <header className="mb-6">
        <h3
          title={`Read full blog: ${title}`}
          className="text-4xl font-semibold cursor-pointer"
          onClick={() => router.push(`/blog/${slug}`)}
        >
          {title}
        </h3>
      </header>
      <a
        title={`Read full blog: ${title}`}
        className="underline text-xl"
        href={`/blog/${slug}`}
      >
        Read More
      </a>
    </article>
  );
}
