import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#43f6ff] mb-8 cyberpunk-glitch" data-text="Skills">
        Skills
      </h1>
      <div className="grid gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="cyber-card">
            <div className="cyber-card-glitch"></div>
            <h2 className="text-2xl font-bold text-[#43f6ff] mb-6">{category.category}</h2>
            <div className="space-y-6">
              {category.items.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-[#43f6ff]">{skill.proficiency}%</span>
                  </div>
                  <div className="cyber-progress-bar">
                    <div 
                      className="cyber-progress-fill" 
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
