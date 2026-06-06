import React from "react";
import { Link } from "react-router-dom";

export default function HeartHealth() {
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
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56"
          alt="Heart Health"
          className="w-full h-[500px] object-cover rounded-[40px] mt-8 shadow-2xl"
        />

        <div className="bg-white rounded-[40px] p-10 mt-10 shadow-xl">

          <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
            Cardiology
          </span>

          <h1 className="text-5xl font-bold text-[#0A2A5E] mt-4">
            10 Daily Habits for Better Heart Health
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Published by Trident Hospitals
          </p>

          <div className="mt-10 space-y-8 text-gray-700 leading-loose text-lg">

            <p>
              Your heart health depends heavily on daily lifestyle habits.
              Small changes can significantly reduce the risk of heart disease.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              1. Eat Healthy Foods
            </h2>

            <p>
              Include fruits, vegetables, whole grains, and healthy fats
              while avoiding processed foods.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              2. Stay Active
            </h2>

            <p>
              Daily walking or exercise improves blood circulation and
              strengthens the heart.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              3. Manage Stress
            </h2>

            <p>
              High stress levels may increase blood pressure and heart risk.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              4. Regular Health Checkups
            </h2>

            <p>
              Monitoring BP, cholesterol, and sugar levels helps early detection.
            </p>

            <div className="bg-[#0A2A5E] rounded-[35px] p-10 text-white mt-10">

              <h3 className="text-3xl font-bold">
                Need a Heart Health Checkup?
              </h3>

              <p className="mt-4 text-blue-100">
                Consult Trident Hospitals Cardiology specialists today.
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