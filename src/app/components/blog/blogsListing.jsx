import Card from "../BlogCard/card";
import { blogs } from "@/app/lib/blogContent";

const blog = blogs;

export default function BlogsListing() {
  return (
    <section className="grid md:grid-cols-12 bg-[var(--secondary)]" aria-labelledby="blogsListing">
      {blog.map((Eachblog, index) => (
        <div key={index} className="col-span-6 py-4 w-full flex flex-col">
            <Card title={Eachblog.title} date={Eachblog.date} imageSrc={Eachblog.image} imageAlt={Eachblog.title} slug={Eachblog.slug}/>
        </div>
      ))}
    </section>
  );
}
