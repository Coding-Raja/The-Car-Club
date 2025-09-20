import blogs from "../../data/blogsdata.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Group blogs by category
  const categories = blogs.reduce((acc, blog) => {
    if (!acc[blog.category]) acc[blog.category] = [];
    acc[blog.category].push(blog);
    return acc;
  }, {});

  return (
    <main className="px-6 py-10">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center max-w-lg w-full mx-auto p-4 bg-white/30 rounded-lg shadow shadow-black/30">Latest Blogs</h1>
      </div>

      {Object.keys(categories).map((cat) => (
        <section key={cat} className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 mt-8 text-center">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories[cat].map((blog) => (
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
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="mb-3 text-sm sm:text-base">{blog.excerpt}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-sky-700 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
