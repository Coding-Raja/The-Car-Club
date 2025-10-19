/* blogs file jis me [blogsdata] file hai */

import blogs from "../../../data/blogsdata.json";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage({ params }) {
  const blog = blogs.find((b) => b.slug === params.blogsdata);

  if (!blog) {
    return (
      <section className="flex justify-center items-center h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold">Blog not found</h1>
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <main className="w-full md:w-5/6 lg:w-3/4 py-10">
        <Image
          src={blog.image}
          alt={blog.alt}
          width={1200}
          height={600}
          className="w-full h-auto rounded mb-6 object-cover"
          priority
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
          {blog.title}
        </h1>
        {blog.content.map((para, i) => (
          <p
            key={i}
            className="mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-justify"
          >
            {para}
          </p>
        ))}

        {/* Button under the paragraphs */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 w-full py-3 text-lg sm:text-lg sm:w-3/4 md:w-1/2 lg:w-1/4 bg-white/50 text-black rounded-lg shadow-md shadow-black/50 hover:shadow-xl hover:shadow-black/70 hover:bg-black/90 hover:text-white cursor-pointer transition duration-500">
            <Link href="/blogs">
              Go Back
            </Link>
          </button>
        </div>
      </main>
    </section>
  );
}
