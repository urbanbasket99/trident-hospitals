import React from "react";
import { Link } from "react-router-dom";

export default function ChildImmunity() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-20">

      <div className="max-w-5xl mx-auto px-6">

        <Link
          to="/"
          className="text-[#0A2A5E] font-semibold"
        >
          ← Back to Home
        </Link>

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          alt="Child Immunity"
          className="w-full h-[500px] object-cover rounded-[40px] mt-8 shadow-2xl"
        />

        <div className="bg-white rounded-[40px] p-10 mt-10 shadow-xl">

          <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
            Pediatrics
          </span>

          <h1 className="text-5xl font-bold text-[#0A2A5E] mt-4">
            How To Improve Your Child's Immunity
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Published by Trident Hospitals
          </p>

          <div className="mt-10 space-y-8 text-gray-700 leading-loose text-lg">

            <p>
              A strong immune system helps children stay healthy and fight
              infections effectively. Healthy habits play an important role
              in building strong immunity.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              1. Nutritious Diet
            </h2>

            <p>
              Include fruits, vegetables, proteins, and healthy foods rich
              in vitamins and minerals.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              2. Proper Sleep
            </h2>

            <p>
              Children need enough sleep for healthy growth and immune strength.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              3. Vaccinations
            </h2>

            <p>
              Vaccinations protect children against many preventable diseases.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              4. Outdoor Activity
            </h2>

            <p>
              Regular physical activity strengthens overall health and immunity.
            </p>

            <div className="bg-[#0A2A5E] rounded-[35px] p-10 text-white mt-10">

              <h3 className="text-3xl font-bold">
                Need Pediatric Consultation?
              </h3>

              <p className="mt-4 text-blue-100">
                Visit Trident Hospitals for expert child healthcare.
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
    </div>
  );
}