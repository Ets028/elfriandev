import React from "react";

export default function CTA() {
  return (
    <>
      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-lg">Let’s build something great together.</p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Contact Me Now
        </a>
      </section>
    </>
  );
}
