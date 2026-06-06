import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function BlogTemplate({
  category,
  title,
  image,
  content,
  ctaTitle,
  ctaText,
  metaTitle,
  metaDescription,
  keywords,
}) {
  return (
    <>
  <Helmet>
    <title>{metaTitle || title}</title>

    <meta
      name="description"
      content={metaDescription}
    />

    <meta
      name="keywords"
      content={keywords}
    />

    <meta
      property="og:title"
      content={metaTitle || title}
    />

    <meta
      property="og:description"
      content={metaDescription}
    />

    <meta
      property="og:image"
      content={image}
    />
  </Helmet>

    
    <div className="bg-[#F8FAFC] min-h-screen py-20">

      <div className="max-w-5xl mx-auto px-6">

        <Link
          to="/"
          className="text-[#0A2A5E] font-semibold"
        >
          ← Back to Home
        </Link>

        <img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover rounded-[40px] mt-8 shadow-2xl"
        />

        <div className="bg-white rounded-[40px] p-10 mt-10 shadow-xl">

          <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
            {category}
          </span>

          <h1 className="text-5xl font-bold text-[#0A2A5E] mt-4">
            {title}
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Published by Trident Hospitals
          </p>

          <div className="mt-10 space-y-8 text-gray-700 leading-loose text-lg whitespace-pre-line">
            {content}
          </div>

          <div className="bg-[#0A2A5E] rounded-[35px] p-10 text-white mt-12">

            <h3 className="text-3xl font-bold">
              {ctaTitle}
            </h3>

            <p className="mt-4 text-blue-100">
              {ctaText}
            </p>

            <a
              href="/"
              className="inline-block mt-6 bg-white text-[#0A2A5E] px-8 py-4 rounded-full font-semibold"
            >
              Book Appointment
            </a>

          </div>
        </div>
      </div>
    </div>
    </>
  );
  
}