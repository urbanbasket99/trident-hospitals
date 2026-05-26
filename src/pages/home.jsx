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
    <div className="bg-white overflow-hidden">

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
        <div className="w-full px-10 mx-auto px-6 py-5 flex justify-evenly items-center">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Trident Hospitals"
            className="h-16 object-contain"
          />

          {/* MENU */}
          {/* NAVBAR */}
<nav className="bg-white shadow-sm sticky top-0 z-50">
  <div className="w-full px-6 lg:px-10 py-4 flex justify-between items-center">

    {/* LOGO */}
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

    {/* DESKTOP BUTTON */}
    <button className="hidden lg:flex bg-[#0A2A5E] text-white px-6 py-3 rounded-full shadow-xl items-center gap-2 hover:bg-blue-900 transition">
      <Calendar size={18} />
      Book Appointment
    </button>

    {/* MOBILE MENU BUTTON */}
    <button
      className="lg:hidden text-[#0A2A5E]"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="lg:hidden bg-white shadow-lg px-6 py-6 space-y-5 text-[#0A2A5E] font-semibold">

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
          {/* BUTTON */}
          <button className="bg-[#0A2A5E] hover:bg-blue-900 text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3 transition duration-300">
            <Calendar size={18} />
            Book Appointment
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
  id="home"
  className="bg-gradient-to-r from-[#0A2A5E] via-[#103D82] to-[#144B9B] text-white"
>
  <section id="home" className="bg-gradient-to-r from-[#0A2A5E] via-[#103D82] to-[#144B9B] text-white"></section>
        <div className="max-w-[1450px] mx-auto px-6 py-28 grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE */}
          <div>

            <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-3 rounded-full text-sm font-medium">
              Premium Multi-Speciality Hospital
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mt-8 leading-tight text-white">
  Your Health,
  <br />
  Our Priority
</h1>


            <p className="mt-8 text-xl text-blue-100 leading-relaxed max-w-xl">
              Advanced multi-speciality healthcare in
              Shamshabad, Hyderabad with expert doctors,
              cutting-edge technology, and compassionate care.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-white text-[#0A2A5E] px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-xl">
                Book Appointment
              </button>

              <button className="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0A2A5E] transition">
                Emergency Care
              </button>
            </div>

            {/* TRUST BOXES */}
            <div className="grid grid-cols-2 gap-5 mt-14">

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">
                <h3 className="font-bold text-lg">
                  24/7 Emergency
                </h3>

                <p className="text-sm text-blue-100 mt-2">
                  Emergency support anytime
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">
                <h3 className="font-bold text-lg">
                  Expert Specialists
                </h3>

                <p className="text-sm text-blue-100 mt-2">
                  Trusted medical experts
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
              alt="Hospital"
              className="rounded-[40px] shadow-2xl w-full h-[650px] object-cover"
            />

            <div className="absolute -bottom-8 -left-6 bg-white text-[#0A2A5E] rounded-[30px] shadow-2xl p-6 w-[280px]">
              <h3 className="text-2xl font-bold">
                10+ Specialists
              </h3>

              <p className="text-[#0A2A5E] mt-2">
                Trusted multi-speciality care in Hyderabad
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* DEPARTMENTS SECTION */}
<section
  id="departments"
  className="bg-[#F8FAFC] py-28"
>
  <section id="departments" className="bg-[#F8FAFC] py-28"></section>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <span className="text-[#0A2A5E] font-semibold uppercase tracking-wider">
        Our Specialities
      </span>

      <h2 className="text-5xl font-bold text-[#0A2A5E] mt-4">
        Excellence Across
        <br />
        Multiple Departments
      </h2>

      <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
        Comprehensive healthcare services delivered
        by expert specialists with advanced medical technology.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Pediatrics",
        "ENT",
        "Dermatology",
        "General Medicine",
        "Emergency Care",
      ].map((dept) => (
        <div
          key={dept}
          className="bg-white rounded-[30px] p-8 shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-2 cursor-pointer"
        >
          <div className="w-16 h-16 bg-[#0A2A5E]/10 rounded-2xl mb-6"></div>

          <h3 className="text-2xl font-bold text-[#0A2A5E]">
            {dept}
          </h3>

          <p className="text-gray-500 mt-3">
            Advanced healthcare with experienced specialists.
          </p>

          <button className="mt-6 text-[#0A2A5E] font-semibold">
            Learn More →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
{/* DOCTORS SECTION */}
<section
  id="doctors"
  className="bg-white py-28"
>
  <div className="max-w-7xl mx-auto px-6">

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

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

      {/* Doctor Card */}
      <div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
          alt="Doctor"
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8">
          <span className="text-sm text-[#0A2A5E] font-semibold uppercase">
            Orthopedics
          </span>

          <h3 className="text-3xl font-bold text-[#0A2A5E] mt-3">
            Dr. Satyam Yadav
          </h3>

          <p className="text-gray-500 mt-3">
            Specialist in orthopedic treatments and advanced bone care.
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
          className="bg-[#F8FAFC] rounded-[35px] p-10 border border-gray-200 flex flex-col justify-center items-center text-center"
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
  className="bg-[#0A2A5E] py-28 text-white"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <span className="uppercase tracking-wider text-blue-200 font-semibold">
        Book Appointment
      </span>

      <h2 className="text-5xl font-bold mt-4">
        Schedule Your Visit
      </h2>

      <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
        Book appointments with our specialists quickly and easily.
      </p>
    </div>

    <div className="mt-16 bg-white rounded-[40px] p-10 shadow-2xl text-black">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Department */}
        <div>
          <label className="block mb-2 font-semibold text-[#0A2A5E]">
            Department
          </label>

          <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none">
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

          <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none">
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
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none"
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
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none"
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
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none"
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
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none"
          />
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-[#0A2A5E] text-white px-10 py-4 rounded-full hover:bg-blue-900 transition shadow-xl">
          Book Appointment
        </button>
      </div>
    </div>
  </div>
</section>
{/* FOOTER / CONTACT SECTION */}
<section
  id="contact"
  className="bg-[#071F45] text-white py-24"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Hospital Info */}
      <div>
        <img
          src="/logo.png"
          alt="Trident Hospitals"
          className="h-20 mb-5 bg-white rounded-xl p-2"
        />

        <p className="text-gray-300 leading-relaxed">
          Trident Hospitals provides advanced multi-speciality
          healthcare with compassionate patient care and
          expert medical professionals.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-bold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li className="hover:text-white cursor-pointer">
            Home
          </li>

          <li className="hover:text-white cursor-pointer">
            About
          </li>

          <li className="hover:text-white cursor-pointer">
            Departments
          </li>

          <li className="hover:text-white cursor-pointer">
            Doctors
          </li>
        </ul>
      </div>

      {/* Departments */}
      <div>
        <h3 className="text-2xl font-bold mb-5">
          Departments
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>Orthopedics</li>
          <li>Cardiology</li>
          <li>Neurology</li>
          <li>Pediatrics</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-2xl font-bold mb-5">
          Contact Us
        </h3>

        <div className="space-y-4 text-gray-300">
          <p>📞 080087 00951</p>
          <p>✉ tridenthospitals@gmail.com</p>
          <p>📍 Shamshabad, Hyderabad</p>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-400">
      © 2026 Trident Hospitals. All Rights Reserved.
    </div>
  </div>
</section>
{/* LOCATION + EMERGENCY */}
<section className="bg-[#F8FAFC] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Emergency Banner */}
    <div className="bg-[#0A2A5E] rounded-[40px] text-white p-10 flex flex-col lg:flex-row justify-between items-center mb-16">

      <div>
        <h2 className="text-4xl font-bold">
          Need Emergency Care?
        </h2>

        <p className="text-blue-100 mt-3">
          24/7 Emergency medical support available.
        </p>
      </div>

      <a
        href="tel:08008700951"
        className="mt-6 lg:mt-0 bg-white text-[#0A2A5E] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
      >
        Call Now
      </a>
    </div>

    {/* Google Map */}
    <div>
      <h2 className="text-5xl font-bold text-[#0A2A5E] text-center mb-10">
        Visit Trident Hospitals
      </h2>

      <div className="rounded-[40px] overflow-hidden shadow-xl">
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps?q=Shamshabad,Hyderabad&output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>
{/* WHATSAPP FLOATING BUTTON */}
<a
  href="https://wa.me/918008700951"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300">
    <span className="text-3xl">💬</span>
  </div>
</a>
    </div>
  );
}