import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#43f6ff] mb-8 cyberpunk-glitch" data-text="Projects">
        Projects
      </h1>
      <div className="grid gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="cyber-card">
            <div className="cyber-card-glitch"></div>
            <h2 className="text-2xl font-bold text-[#43f6ff] mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button text-sm"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
