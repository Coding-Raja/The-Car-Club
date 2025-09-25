'use client';

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .send(
        "service_121jcwb",      // 🔹 Replace with your EmailJS Service ID
        "template_gtglyfq",     // 🔹 Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PgeF_GKrvULUUqsLm"       // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send ❌ Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <main className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10">
      <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty">
          Contact Us
        </h1>

        <p className="text-base sm:text-lg mb-5 leading-relaxed">
          Have questions, suggestions, or just want to say hello? We’d love to
          hear from you. At <span className="font-semibold">The Car Club</span>, 
          our community grows stronger with your feedback and ideas.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Send Us a Message</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-white/20 text-black/70 cursor-pointer font-semibold rounded-lg shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 hover:bg-black/50 hover:text-white/60 duration-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && <p className="mt-4 text-center font-medium">{status}</p>}
      </div>
    </main>
  );
};

export default Contact;
