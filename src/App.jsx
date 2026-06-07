import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import ScrollToTop from "./components/ScrollToTop";

import JointPain from "./pages/blogs/JointPain";
import HeartHealth from "./pages/blogs/HeartHealth";
import ChildImmunity from "./pages/blogs/ChildImmunity";
import BackPain from "./pages/blogs/BackPain";
import ArthritisSymptoms from "./pages/blogs/ArthritisSymptoms";
import OrthopedicDoctor from "./pages/blogs/OrthopedicDoctor";
import HeartWarningSigns from "./pages/blogs/HeartWarningSigns";
import BloodPressureSymptoms from "./pages/blogs/BloodPressureSymptoms";

import BestHospitalShamshabad from "./pages/locations/BestHospitalShamshabad";
import OrthopedicHospitalShamshabad from "./pages/locations/OrthopedicHospitalShamshabad";
import CardiologistShamshabad from "./pages/locations/CardiologistShamshabad";
import HospitalNearAirport from "./pages/locations/HospitalNearAirport";

import KneePainTreatment from "./pages/services/KneePainTreatment";
import HeartSpecialist from "./pages/services/HeartSpecialist";
import BackPainTreatment from "./pages/services/BackPainTreatment";
import EmergencyCare from "./pages/services/EmergencyCare";
import ChildSpecialist from "./pages/services/ChildSpecialist";
import ENTSpecialist from "./pages/services/ENTSpecialist";

function App() {
  // SSR protection
  if (typeof document === "undefined") {
    return null;
  }

  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* BLOGS */}
        <Route path="/blog/joint-pain" element={<JointPain />} />
        <Route path="/blog/heart-health" element={<HeartHealth />} />
        <Route path="/blog/child-immunity" element={<ChildImmunity />} />
        <Route path="/blog/back-pain" element={<BackPain />} />
        <Route path="/blog/arthritis-symptoms" element={<ArthritisSymptoms />} />
        <Route path="/blog/orthopedic-doctor" element={<OrthopedicDoctor />} />
        <Route path="/blog/heart-warning-signs" element={<HeartWarningSigns />} />
        <Route path="/blog/blood-pressure-symptoms" element={<BloodPressureSymptoms />} />

        {/* LOCATION SEO */}
        <Route path="/best-hospital-shamshabad" element={<BestHospitalShamshabad />} />
        <Route path="/orthopedic-hospital-shamshabad" element={<OrthopedicHospitalShamshabad />} />
        <Route path="/cardiologist-shamshabad" element={<CardiologistShamshabad />} />
        <Route path="/hospital-near-airport" element={<HospitalNearAirport />} />

        {/* SERVICE SEO */}
        <Route
          path="/knee-pain-treatment-shamshabad"
          element={<KneePainTreatment />}
        />

        <Route
          path="/heart-specialist-shamshabad"
          element={<HeartSpecialist />}
        />
           <Route
          path="/back-pain-treatment-shamshabad"
          element={<BackPainTreatment />}
        />
           <Route
          path="/child-specialist-shamshabad"
          element={<ChildSpecialist />}
        />
           <Route
          path="/ent-specialist-shamshabad"
          element={<ENTSpecialist />}
        />
           <Route
          path="/emergency-care-shamshabad"
          element={<EmergencyCare />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;