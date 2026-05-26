import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* TOP BAR */}
      <div className="bg-[#0A2A5E] text-white py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>080087 00951</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Mail size={16} />
              <span>tridenthospitals@gmail.com</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <MapPin size={16} />
            <span>Shamshabad, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full px-6 lg:px-10 py-3 flex justify-between items-center">

          <img
            src="/logo.png"
            alt="Trident Hospitals"
            className="h-14 lg:h-16 object-contain"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-[#0A2A5E]">

            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#departments" className="hover:text-blue-600 transition">
                Departments
              </a>
            </li>

            <li>
              <a href="#doctors" className="hover:text-blue-600 transition">
                Doctors
              </a>
            </li>

            <li>
              <a href="#appointment" className="hover:text-blue-600 transition">
                Appointment
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* BUTTON */}
          <button className="hidden lg:flex bg-[#0A2A5E] text-white px-6 py-3 rounded-full shadow-lg items-center gap-2 hover:bg-blue-900 transition">
            <Calendar size={18} />
            Book Appointment
          </button>

          {/* MOBILE MENU */}
          <button
            className="lg:hidden text-[#0A2A5E]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU CONTENT */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md px-6 py-5 space-y-5 font-semibold text-[#0A2A5E]">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#departments" onClick={() => setMenuOpen(false)}>
              Departments
            </a>

            <a href="#doctors" onClick={() => setMenuOpen(false)}>
              Doctors
            </a>

            <a href="#appointment" onClick={() => setMenuOpen(false)}>
              Appointment
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-gradient-to-r from-[#0A2A5E] via-[#103D82] to-[#144B9B] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 items-center gap-12">

          <div>
            <span className="inline-block bg-white/20 px-5 py-3 rounded-full text-sm font-medium">
              Premium Multi-Speciality Hospital
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold mt-8 leading-tight">
              Your Health,
              <br />
              Our Priority
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-relaxed">
              Advanced multi-speciality healthcare in
              Shamshabad, Hyderabad with expert doctors
              and compassionate care.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-white text-[#0A2A5E] px-8 py-4 rounded-full font-semibold">
                Book Appointment
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0A2A5E] transition">
                Emergency Care
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
              alt="Hospital"
              className="rounded-[40px] shadow-2xl w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>

     {/* DEPARTMENTS */}
<section id="departments" className="bg-[#F8FAFC] py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold text-[#0A2A5E] mb-16">
      Our Specialities
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Pediatrics",
        "ENT",
        "Dermatology",
        "General Medicine",
        "Emergency Care",
      ].map((dept, index) => (
        <div
          key={index}
          className="bg-white rounded-[30px] p-8 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-100 mx-auto mb-5 flex items-center justify-center text-2xl">
            🏥
          </div>

          <h3 className="text-2xl font-bold text-[#0A2A5E]">
            {dept}
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Advanced healthcare with experienced specialists.
          </p>

          <button className="mt-5 text-[#0A2A5E] font-semibold">
            Learn More →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* DOCTORS SECTION */}
<section id="doctors" className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center">
      <span className="text-[#0A2A5E] font-semibold uppercase tracking-wider">
        Our Doctors
      </span>

      <h2 className="text-5xl font-bold text-[#0A2A5E] mt-4">
        Meet Our Medical
        <br />
        Specialists
      </h2>

      <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
        Experienced doctors dedicated to delivering
        world-class patient care.
      </p>
    </div>

    {/* Doctor Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

      {/* DOCTOR 1 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/satyam yadav.jpg"
    alt="Dr. Satyam Yadav"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Orthopedics
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
      Dr. Satyam Yadav
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Specialist in orthopedic treatments and advanced bone care.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>

{/* DOCTOR 2 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/chaitanya.jpg"
    alt="Doctor"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Gynacology
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
     Dr Chaitanya B
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Expert in heart care, cardiac diagnosis and treatments.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>

{/* DOCTOR 3 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/drkasha.jpg"
    alt="Doctor"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Neurology
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
      Dr. Kasha
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Specialist in neurological disorders and brain care.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>
{/* DOCTOR 4 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/RAKESH.png"
    alt="Doctor"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Neurology
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
      Dr. Rakesh
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Specialist in neurological disorders and brain care.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>
{/* DOCTOR 5 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/soma Rakesh.jpeg"
    alt="Doctor"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Neurology
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
      Dr.soma Rakesh
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Specialist in neurological disorders and brain care.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>
{/* DOCTOR 6 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/ravi kumar.jpg"
    alt="Doctor"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Neurology
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
      Dr. ravi kumar
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Specialist in neurological disorders and brain care.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>
{/* DOCTOR 7 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">

  <img
    src="/DrJalapathiReddy.jpg"
    alt="Doctor"
    className="w-full h-[350px] object-cover"
  />

  <div className="p-8">
    <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
      Neurology
    </span>

    <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
      Dr.JalapathiReddy
    </h3>

    <p className="text-gray-500 mt-3 text-lg">
      Specialist in neurological disorders and brain care.
    </p>

    <button className="mt-6 bg-[#0A2A5E] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
      Book Appointment
    </button>
  </div>
</div>

      {/* Placeholder Doctors */}
      {[1, 2].map((item) => (
        <div
          key={item}
          className="bg-[#F8FAFC] rounded-[35px] p-10 border border-gray-200 flex flex-col justify-center items-center text-center shadow-md"
        >
          <div className="w-28 h-28 rounded-full bg-gray-200"></div>

          <h3 className="text-2xl font-bold text-[#0A2A5E] mt-6">
            Doctor Coming Soon
          </h3>

          <p className="text-gray-500 mt-3">
            Specialist details will be added soon.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* APPOINTMENT SECTION */}
<section
  id="appointment"
  className="bg-gradient-to-r from-[#0A2A5E] to-[#144B9B] py-28 text-white"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center">
      <span className="uppercase tracking-wider text-blue-200 font-semibold">
        Book Appointment
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Schedule Your Visit
      </h2>

      <p className="text-blue-100 mt-5 max-w-2xl mx-auto text-lg">
        Book appointments with our specialists quickly and easily.
      </p>
    </div>

    {/* Form Card */}
    <div className="mt-16 bg-white rounded-[40px] p-10 lg:p-14 shadow-2xl text-black">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Department */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Department
          </label>

          <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]">
            <option>Select Department</option>
            <option>Orthopedics</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>ENT</option>
            <option>Dermatology</option>
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Doctor
          </label>

          <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]">
            <option>Select Doctor</option>
            <option>Dr. Satyam Yadav</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Appointment Date
          </label>

          <input
            type="date"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]"
          />
        </div>

        {/* Symptoms */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Symptoms
          </label>

          <input
            type="text"
            placeholder="Brief Description"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]"
          />
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-[#0A2A5E] text-white px-10 py-4 rounded-full hover:bg-blue-900 transition shadow-xl font-semibold">
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</section>

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold text-[#0A2A5E] mb-10">
      Find Us
    </h2>

    <iframe
      title="Hospital Location"
      src="https://www.google.com/maps?q=Shamshabad,Hyderabad&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      className="rounded-[30px] shadow-xl"
    ></iframe>
  </div>
</section>

     {/* CONTACT / FOOTER */}
<section
  id="contact"
  className="bg-[#071F45] text-white pt-24 pb-10"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Hospital Info */}
      <div>
        <img
          src="/logo.png"
          alt="Trident Hospitals"
          className="h-20 mb-5 bg-white rounded-2xl p-2"
        />

        <p className="text-blue-100 leading-relaxed">
          Trident Hospitals provides advanced multi-speciality
          healthcare with compassionate patient care,
          expert specialists, and modern technology.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-bold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4 text-blue-100">

          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#departments" className="hover:text-white transition">
              Departments
            </a>
          </li>

          <li>
            <a href="#doctors" className="hover:text-white transition">
              Doctors
            </a>
          </li>

          <li>
            <a href="#appointment" className="hover:text-white transition">
              Appointment
            </a>
          </li>
        </ul>
      </div>

      {/* Departments */}
      <div>
        <h3 className="text-2xl font-bold mb-6">
          Departments
        </h3>

        <ul className="space-y-4 text-blue-100">
          <li>Orthopedics</li>
          <li>Cardiology</li>
          <li>Neurology</li>
          <li>Pediatrics</li>
          <li>ENT</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-2xl font-bold mb-6">
          Contact Us
        </h3>

        <div className="space-y-4 text-blue-100 text-lg">
          <p>📞 080087 00951</p>
          <p>✉ tridenthospitals@gmail.com</p>
          <p>📍 Shamshabad, Hyderabad</p>
        </div>

        <button className="mt-6 bg-white text-[#071F45] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Emergency Care
        </button>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-blue-800 mt-16 pt-8 text-center text-blue-200">
      © 2026 Trident Hospitals. All Rights Reserved.
    </div>
  </div>
</section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918008700951"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-f right-6 z-50"
      >
        <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl text-3xl">
          💬
        </div>
      </a>
    </div>
  );
}