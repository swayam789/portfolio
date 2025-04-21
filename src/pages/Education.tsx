import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#43f6ff] mb-8 cyberpunk-glitch" data-text="Education">
        Education
      </h1>
      <div className="grid gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="cyber-education-card">
            <div className="cyber-card-glitch"></div>
            <h2 className="text-2xl font-bold text-[#43f6ff] mb-2">{edu.institution}</h2>
            <p className="text-xl mb-2">{edu.degree} in {edu.field}</p>
            <p className="text-gray-400 mb-2">{edu.year}</p>
            {edu.gpa && <p className="text-gray-400 mb-4">GPA: {edu.gpa}</p>}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[#43f6ff] mb-2">Achievements</h3>
              <ul className="list-disc list-inside">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
