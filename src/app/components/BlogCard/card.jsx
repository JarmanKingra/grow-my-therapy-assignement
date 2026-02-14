"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({ title, imageSrc, imageAlt, date, slug }) {
  const router = useRouter();
  return (
    <article className="bg-[#e5e0da] shadow-md py-6 px-3 m-5">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={500}     
            height={500}
            className="object-cover w-full aspect-video mb-5 cursor-pointer"
            onClick={() => router.push(`/blog/${slug}`)}
          />
        )}
        <p className="text-lg text-gray-700 mb-3">{date}</p>
      <header className="mb-6">
        <h3 className="text-4xl font-semibold cursor-pointer" onClick={() => router.push(`/blog/${slug}`)}>{title}</h3>
      </header>
      <a className="underline text-xl" href={`/blog/${slug}`}>Read More</a>

    </article>
  );
}
