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
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
