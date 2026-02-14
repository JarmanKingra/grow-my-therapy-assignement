import EndingTerms from "@/app/components/endingTerms";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { blogs } from "@/app/lib/blogContent";

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const currentIndex = sortedBlogs.findIndex((b) => b.slug === slug);
  const blog = sortedBlogs[currentIndex];
  const prevBlog = sortedBlogs[currentIndex + 1];
  const nextBlog = sortedBlogs[currentIndex - 1];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-[#e5e0da] p-10 md:px-90 flex flex-col items-center">
        <p className="mb-6 font-semibold">MAR 11</p>
        <h1 className="text-3xl md:text-7xl font-bold mb-9">{blog.title}</h1>
        {blog.content.map((para, i) => (
          <p
            key={i}
            className="leading-relaxed text-xl mb-3 text-center md:text-start"
          >
            {para}
          </p>
        ))}
        <div className="flex flex-row justify-between gap-6 mt-20 w-full">
          {nextBlog ? (
            <a
              href={`/blog/${nextBlog.slug}`}
              className="border px-6 py-3 text-center hover:bg-black hover:text-white transition"
            >
              ← Previous Post
            </a>
          ) : (
            <div />
          )}
          {prevBlog ? (
            <a
              href={`/blog/${prevBlog.slug}`}
              className="border px-6 py-3 text-center hover:bg-black hover:text-white transition"
            >
              Next Post →
            </a>
          ) : (
            <div />
          )}
        </div>
      </div>
      <Footer />
      <EndingTerms />
    </>
  );
}
