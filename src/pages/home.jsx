import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";




import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Menu,
  X,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_tl54p3g",
      "template_rfm450v",
      {
        name: formData.name,
        phone: formData.phone,
      },
      "M-9co9bnjNuU-Nvxs"
    )
    .then(() => {
      alert("Appointment Request Sent Successfully!");
      setFormData({
        name: "",
        phone: "",
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send appointment request.");
    });
};
  const [menuOpen, setMenuOpen] = useState(false);

const departmentDetails = {
  Orthopedics: {
    title: "Orthopedics Department",
    content: `
At Trident Hospitals, our Orthopedics Department provides specialized care for bone, joint, muscle, and spine-related conditions.

Services Include:
• Fracture & Trauma Care
• Arthritis & Joint Pain Treatment
• Sports Injury Management
• Spine & Back Pain Care
• Knee, Hip & Shoulder Treatments
• Physiotherapy Guidance

Our goal is to restore mobility, reduce pain, and help patients return to a healthy and active lifestyle.
    `,
  },

  Cardiology: {
    title: "Cardiology Department",
    content: `
The Cardiology Department at Trident Hospitals offers comprehensive heart care services with a focus on diagnosis, prevention, and treatment.

Services Include:
• ECG & Cardiac Evaluation
• Blood Pressure Management
• Chest Pain Diagnosis
• Preventive Heart Checkups
• Lifestyle Counseling

We help patients maintain heart health through expert care.
    `,
  },

  Neurology: {
    title: "Neurology Department",
    content: `
Our Neurology Department provides expert treatment for disorders affecting the brain, spine, and nervous system.

Services Include:
• Headache & Migraine Treatment
• Stroke Evaluation
• Nerve Pain Management
• Epilepsy Care
• Neurological Consultation

Advanced neurological care with compassionate treatment.
    `,
  },

  Pediatrics: {
    title: "Pediatrics Department",
    content: `
The Pediatrics Department provides complete healthcare services for newborns, infants, and children.

Services Include:
• Child Health Checkups
• Vaccination Programs
• Fever & Infection Treatment
• Growth Monitoring

Safe and compassionate care for every child.
    `,
  },

  ENT: {
    title: "ENT Department",
    content: `
The ENT Department specializes in ear, nose, and throat conditions.

Services Include:
• Ear Infection Treatment
• Hearing Assessment
• Sinus & Allergy Care
• Tonsil Treatment

Helping patients breathe, hear, and speak comfortably.
    `,
  },

  Dermatology: {
    title: "Dermatology Department",
    content: `
Our Dermatology Department offers complete skin, hair, and nail care.

Services Include:
• Acne Treatment
• Hair Fall Care
• Skin Allergy Care
• Pigmentation Solutions

Advanced skincare solutions for healthy skin.
    `,
  },

  "General Medicine": {
    title: "General Medicine Department",
    content: `
Our physicians provide expert care for fever, diabetes, BP, infections, and wellness.

Services Include:
• Fever Treatment
• Diabetes Management
• BP Care
• Thyroid Evaluation

Focused on long-term health management.
    `,
  },

  "Emergency Care": {
    title: "Emergency Care Department",
    content: `
Our Emergency Department operates 24/7 for urgent medical situations.

Services Include:
• Trauma Care
• Accident Treatment
• Critical Care
• Emergency Consultation

Fast medical response when every second matters.
    `,
  },
};
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
              <span>tridenthospital@gmail.com</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <MapPin size={16} />
            <span>Shamshabad, Hyderabad</span>
          </div>
          {/* SOCIAL ICONS */}
<div className="flex items-center gap-4 text-lg">

  <a
    href="https://facebook.com/tridenthospitals"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-300 transition duration-300"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com/tridenthospitaldigital"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-300 transition duration-300"
  >
    <FaInstagram />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-red-400 transition duration-300"
  >
    <FaYoutube />
  </a>

</div>
        </div>
        {/* DEPARTMENT MODAL */}
{selectedDepartment && (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-6">

    <div className="bg-white rounded-[35px] max-w-3xl w-full p-10 relative shadow-2xl animate-fadeIn">

      {/* Close */}
      <button
        onClick={() => setSelectedDepartment(null)}
        className="absolute top-6 right-6 text-3xl text-gray-500 hover:text-red-500"
      >
        ✕
      </button>

      <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
        Department Details
      </span>

      <h2 className="text-4xl font-bold text-[#0A2A5E] mt-3">
        {departmentDetails[selectedDepartment].title}
      </h2>

      <div className="w-20 h-1 bg-[#0A2A5E] rounded-full mt-5 mb-8"></div>

      <p className="text-gray-600 leading-loose whitespace-pre-line text-lg">
        {departmentDetails[selectedDepartment].content}
      </p>

      <a
        href="#appointment"
        onClick={() => setSelectedDepartment(null)}
        className="inline-block mt-8 bg-[#0A2A5E] text-white px-8 py-4 rounded-full hover:bg-blue-900 transition"
      >
        Book Appointment
      </a>
    </div>
  </div>
)}
      </div>

      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
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
   <a
  href="#appointment"
  className="hidden lg:flex bg-[#0A2A5E] text-white px-6 py-3 rounded-full shadow-lg items-center gap-2"
>
  <Calendar size={18} />
  Book Appointment
</a>

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

          <div data-aos="fade-right">
            <span className="inline-block bg-white/20 px-5 py-3 rounded-full text-sm font-medium">
              Premium Multi-Speciality Hospital
            </span>

            <h1 className="text-5xl lg:text-8xl leading-tight tracking-tight font-bold mt-8 leading-tight">
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
                   <a
                        href="#appointment"
                    className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 hover:scale-105 transition duration-300 transition"
                        >
                       Book Appointment
                          </a>

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
      {/* STATS */}
<section className="bg-white py-14">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid  grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">

      <div className="bg-[#F8FAFC] rounded-[30px] p-8 text-center shadow-md">
        <h3 className="text-5xl font-bold text-[#0A2A5E]">
          10+
        </h3>
        <p className="text-gray-500 mt-3">
          Expert Doctors
        </p>
      </div>

      <div className="bg-[#F8FAFC] rounded-[30px] p-8 text-center shadow-md">
        <h3 className="text-5xl font-bold text-[#0A2A5E]">
          25K+
        </h3>
        <p className="text-gray-500 mt-3">
          Happy Patients
        </p>
      </div>

      <div className="bg-[#F8FAFC] rounded-[30px] p-8 text-center shadow-md">
        <h3 className="text-5xl font-bold text-[#0A2A5E]">
          15+
        </h3>
        <p className="text-gray-500 mt-3">
          Specialities
        </p>
      </div>

      <div className="bg-[#F8FAFC] rounded-[30px] p-8 text-center shadow-md">
        <h3 className="text-5xl font-bold text-[#0A2A5E]">
          24/7
        </h3>
        <p className="text-gray-500 mt-3">
          Emergency Care
        </p>
      </div>

    </div>
  </div>
</section>

     {/* DEPARTMENTS */}
<section id="departments" className="bg-[#F8FAFC] py-24">
  
  <div className="max-w-7xl mx-auto px-6 text-center">
<div className="w-24 h-1 bg-[#0A2A5E] rounded-full mx-auto mb-5"></div>
    <h2 className="text-5xl font-bold text-[#0A2A5E] mb-16">
      Our Specialities
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">

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

          <button
  onClick={() => setSelectedDepartment(dept)}
  className="text-[#0A2A5E] font-bold mt-5 hover:text-blue-600 transition"
>
  Know More →
</button>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* DOCTORS SECTION */}
<section id="doctors" className="bg-gradient-to-b from-white to-[#F8FAFC] py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center">
      <div className="w-24 h-1 bg-[#0A2A5E] rounded-full mx-auto mb-5"></div>
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16" data-aos="fade-up">

      {/* DOCTOR 1 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-2 transition duration-300">

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

   <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
  </div>
</div>

{/* DOCTOR 2 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-2 transition duration-300">

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

    <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
  </div>
</div>

{/* DOCTOR 3 */}
<div className="bg-[#F8FAFC] rounded-[35px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:-translate-y-2 transition duration-300">

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

   <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
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

    <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
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

    <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
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

    <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
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

    <a
  href="#appointment"
  className="bg-[#0A2A5E] text-white px-8 py-4 rounded-full inline-flex items-center justify-center hover:bg-blue-900 transition"
>
  Book Appointment
</a>
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
{/* TESTIMONIALS */}

{/* TESTIMONIALS */}
<section className="bg-[#F8FAFC] py-28">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <div className="w-24 h-1 bg-[#0A2A5E] rounded-full mx-auto mb-5"></div>

      <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
        Testimonials
      </span>

      <h2 className="text-5xl font-bold text-[#0A2A5E] mt-4">
        What Our Patients Say
      </h2>

      <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
        Trusted healthcare and compassionate treatment experiences
        shared by our patients.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16" data-aos="fade-up">

      {/* Testimonial 1 */}
      <div className="bg-white rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="flex items-center gap-4">

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Patient"
            className="w-20 h-20 rounded-full object-cover border-4 border-[#0A2A5E]/10"
          />

          <div>
            <h4 className="text-2xl font-bold text-[#0A2A5E]">
              Ravi Kumar
            </h4>

            <p className="text-gray-500">
              Shamshabad
            </p>
          </div>
        </div>

        <div className="text-yellow-500 text-2xl mt-5">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed text-lg">
          Excellent doctors and caring staff.
          The treatment process was smooth and professional.
          Highly recommended hospital.
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="flex items-center gap-4">

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Patient"
            className="w-20 h-20 rounded-full object-cover border-4 border-[#0A2A5E]/10"
          />

          <div>
            <h4 className="text-2xl font-bold text-[#0A2A5E]">
              Priya Sharma
            </h4>

            <p className="text-gray-500">
              Hyderabad
            </p>
          </div>
        </div>

        <div className="text-yellow-500 text-2xl mt-5">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed text-lg">
          Clean hospital, experienced doctors and
          excellent patient care. Very satisfied
          with the treatment.
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="flex items-center gap-4">

          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Patient"
            className="w-20 h-20 rounded-full object-cover border-4 border-[#0A2A5E]/10"
          />

          <div>
            <h4 className="text-2xl font-bold text-[#0A2A5E]">
              Ahmed Khan
            </h4>

            <p className="text-gray-500">
              Shamshabad
            </p>
          </div>
        </div>

        <div className="text-yellow-500 text-2xl mt-5">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed text-lg">
          Emergency care was quick and professional.
          Doctors explained everything clearly.
          Great experience.
        </p>
      </div>

    </div>
  </div>
</section>
{/* TRUST & CERTIFICATIONS */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <div className="w-24 h-1 bg-[#0A2A5E] rounded-full mx-auto mb-5"></div>

    <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
      Why Patients Trust Us
    </span>

    <h2 className="text-5xl font-bold text-[#0A2A5E] mt-4">
      Trusted Healthcare,
      <br />
      Exceptional Care
    </h2>

    <p className="text-gray-500 mt-5 max-w-3xl mx-auto text-lg">
      Trident Hospitals combines expert doctors, advanced medical care,
      modern facilities and compassionate treatment to deliver trusted
      healthcare in Shamshabad, Hyderabad.
    </p>

    {/* Trust Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {/* Card 1 */}
      <div className="bg-[#F8FAFC] rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="text-5xl">🏥</div>

        <h3 className="text-2xl font-bold text-[#0A2A5E] mt-5">
          Multi-Speciality Care
        </h3>

        <p className="text-gray-500 mt-4">
          Comprehensive healthcare across multiple specialities.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F8FAFC] rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="text-5xl">👨‍⚕️</div>

        <h3 className="text-2xl font-bold text-[#0A2A5E] mt-5">
          Expert Doctors
        </h3>

        <p className="text-gray-500 mt-4">
          Experienced specialists providing quality medical care.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F8FAFC] rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="text-5xl">🚑</div>

        <h3 className="text-2xl font-bold text-[#0A2A5E] mt-5">
          24/7 Emergency
        </h3>

        <p className="text-gray-500 mt-4">
          Emergency healthcare services available around the clock.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#F8FAFC] rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

        <div className="text-5xl">❤️</div>

        <h3 className="text-2xl font-bold text-[#0A2A5E] mt-5">
          Patient-Centered Care
        </h3>

        <p className="text-gray-500 mt-4">
          Compassionate care focused on patient comfort and recovery.
        </p>
      </div>

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

      <h2 className="text-5xl font-bold mt-4">
        Schedule Your Visit
      </h2>

      <p className="text-blue-100 mt-5 max-w-2xl mx-auto text-lg">
        Book appointments with our specialists quickly and easily.
      </p>
    </div>

    {/* Form Card */}
    <div className="mt-16 bg-white rounded-[40px] p-10 lg:p-14 shadow-2xl text-black">
      <form onSubmit={sendEmail}>

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
         <input
  type="text"
  name="name"
  placeholder="Enter Full Name"
  value={formData.name}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]"
  required
/>
        </div>

        {/* Phone */}
        <div>
          <input
  type="text"
  name="phone"
  placeholder="Enter Phone Number"
  value={formData.phone}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#0A2A5E]"
  required
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
        <button
  type="submit"
  className="bg-[#0A2A5E] text-white px-10 py-4 rounded-full hover:bg-blue-900 transition shadow-xl font-semibold"
>
  Book Appointment
</button>
      </div>
      </form>
    </div>
    
  </div>
  
</section>

      {/* GOOGLE MAPS */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <span className="uppercase tracking-wider text-[#0A2A5E] font-semibold">
        Find Us
      </span>

      <h2 className="text-5xl font-bold text-[#0A2A5E] mt-4">
        Visit Trident Hospitals
      </h2>

      <p className="text-gray-500 mt-4 text-lg">
        Shamshabad, Hyderabad
      </p>
    </div>

    <div className="mt-14 rounded-[35px] overflow-hidden shadow-2xl">
      <iframe
        src="https://www.google.com/maps?q=Shamshabad,Hyderabad&output=embed"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
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
          <p>✉ tridenthospital@gmail.com</p>
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
  {/* Social Icons */}
<div className="flex justify-center lg:justify-start gap-4 mt-8">

  <a
    href="https://facebook.com/tridenthospitals"
    target="_blank"
    className="bg-white text-[#071F45] p-4 rounded-full hover:scale-110 transition"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="https://instagram.com/tridenthospitaldigital"
    target="_blank"
    className="bg-white text-[#071F45] p-4 rounded-full hover:scale-110 transition"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    className="bg-white text-[#071F45] p-4 rounded-full hover:scale-110 transition"
  >
    <FaYoutube size={20} />
  </a>

</div>
</section>

      {/* WHATSAPP */}
     {/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/918008700951?text=Hello%20Trident%20Hospitals,%20I%20would%20like%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50"
>
  <div className="bg-green-500 hover:bg-green-600 transition text-white rounded-full px-6 py-4 flex items-center gap-3 shadow-2xl">
    <span className="text-3xl">💬</span>
    <span className="font-semibold hidden md:block">
      Chat on WhatsApp
    </span>
  </div>
</a>
{/* CALL BUTTON */}
<a
  href="tel:08008700951"
  className="fixed bottom-24 right-6 z-50"
>
  <div className="bg-[#0A2A5E] hover:bg-blue-900 transition text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl text-3xl">
    📞
  </div>
</a> 
    </div>
  );
}