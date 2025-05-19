import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      <Background/>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/achievements" element={<Achievements />} />
          <Route path="/portfolio/gallery" element={<Gallery />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
