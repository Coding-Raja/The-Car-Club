//[blogsdata] jis me page.json file

import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogs from "../../data/blogsdata.json";

export default function Blogs() {
  return (
    
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg bg-white/30"
          >
            <Image
              src={blog.image}
              alt={blog.alt}
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="mb-3 text-sm sm:text-base">
              {blog.content[0].slice(0, 100)}...
            </p>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-sky-700 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

