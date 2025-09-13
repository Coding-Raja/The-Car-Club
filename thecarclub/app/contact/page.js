import React from "react";

const Contact = () => {
  return (
    <>
      <main className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10">
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty">
            Contact Us
          </h1>

          {/* Intro */}
          <p className="text-base sm:text-lg mb-5 leading-relaxed">
            Have questions, suggestions, or just want to say hello? We’d love to
            hear from you. At <span className="font-semibold">The Car Club</span>, 
            our community grows stronger with your feedback and ideas.
          </p>

          {/* Contact Form */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-white/20 text-black/70 cursor-pointer font-semibold rounded-lg shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 hover:bg-black/50 hover:text-white/60 duration-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;
