import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";

import JointPain from "./pages/blogs/JointPain";
import HeartHealth from "./pages/blogs/HeartHealth";
import ChildImmunity from "./pages/blogs/ChildImmunity";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/blog/joint-pain"
        element={<JointPain />}
      />

      <Route
        path="/blog/heart-health"
        element={<HeartHealth />}
      />

      <Route
        path="/blog/child-immunity"
        element={<ChildImmunity />}
      />
    </Routes>
  );
}

function App() {
  if (typeof document === "undefined") {
    return null;
  }

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );

}

export default App;