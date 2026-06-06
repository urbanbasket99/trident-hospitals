import React from "react";
import { Link } from "react-router-dom";

export default function JointPain() {
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
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
          alt="Joint Pain"
          className="w-full h-[500px] object-cover rounded-[40px] mt-8 shadow-2xl"
        />

        <div className="bg-white rounded-[40px] p-10 mt-10 shadow-xl">

          <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
            Orthopedics
          </span>

          <h1 className="text-5xl font-bold text-[#0A2A5E] mt-4">
            5 Signs You Should Not Ignore Joint Pain
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Published by Trident Hospitals
          </p>

          <div className="mt-10 space-y-8 text-gray-700 leading-loose text-lg">

            <p>
              Joint pain is a common problem affecting people of all ages.
              While occasional discomfort may not be serious, persistent
              joint pain should never be ignored.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              1. Persistent Pain
            </h2>

            <p>
              If your joint pain lasts more than a few weeks, it may indicate
              arthritis, inflammation, or underlying orthopedic issues.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              2. Swelling Around Joints
            </h2>

            <p>
              Swelling, redness, or tenderness around joints may indicate
              inflammation or injury requiring medical attention.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              3. Difficulty Walking
            </h2>

            <p>
              Pain that affects movement, climbing stairs, or walking should
              be evaluated by an orthopedic specialist.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              4. Morning Stiffness
            </h2>

            <p>
              Stiffness after waking up could be a sign of arthritis or
              joint degeneration.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2A5E]">
              5. Pain During Daily Activities
            </h2>

            <p>
              If pain interferes with work, exercise, or daily life,
              early treatment can prevent worsening conditions.
            </p>

            <div className="bg-[#0A2A5E] rounded-[35px] p-10 text-white mt-10">

              <h3 className="text-3xl font-bold">
                Need Expert Orthopedic Care?
              </h3>

              <p className="mt-4 text-blue-100">
                Book an appointment with Trident Hospitals today.
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