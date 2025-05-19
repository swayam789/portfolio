import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header id="nav1" className="fixed top-0 w-full z-50 bg-[#0a0a1f]/80 backdrop-blur-sm border-b border-[#ff00ea]/30">
      <nav id="nav2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold cyberpunk-glitch" data-text="SWAYAM LAMA">
          SWAYAM LAMA
        </Link>
        <div className="flex space-x-6">
          <Link to="/portfolio/education" className="nav-link">Education</Link>
          <Link to="/portfolio/projects" className="nav-link">Projects</Link>
          <Link to="/portfolio/skills" className="nav-link">Skills</Link>
          <Link to="/portfolio/achievements" className="nav-link">Achievements</Link>
          <Link to="/portfolio/gallery" className="nav-link">Gallery</Link>
          <Link to="/portfolio/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
