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

          <h2 className="text-5xl font-bold text-[#0A2A5E]">
            Our Specialities
          </h2>

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
                className="bg-white rounded-[30px] p-8 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-[#0A2A5E]">
                  {dept}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-[#0A2A5E]">
            Our Doctors
          </h2>

          <div className="mt-16 flex justify-center">
            <div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-lg w-[350px]">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
                alt="Doctor"
                className="w-full h-[350px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#0A2A5E]">
                  Dr. Satyam Yadav
                </h3>

                <p className="text-gray-500 mt-3">
                  Orthopedics Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="bg-[#0A2A5E] py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Book Appointment
          </h2>

          <div className="bg-white rounded-[35px] p-10 mt-12 text-black shadow-xl">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-2xl mb-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-2xl mb-4"
            />

            <button className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#071F45] text-white py-24 text-center">
        <h2 className="text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mt-6">📞 080087 00951</p>
        <p>✉ tridenthospitals@gmail.com</p>
        <p>📍 Shamshabad, Hyderabad</p>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918008700951"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl text-3xl">
          💬
        </div>
      </a>
    </div>
  );
}