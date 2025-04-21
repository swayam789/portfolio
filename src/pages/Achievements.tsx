import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#43f6ff] mb-8 cyberpunk-glitch" data-text="Achievements">
        Achievements
      </h1>
      <div className="grid gap-6">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="cyber-achievement-card">
            <div className="achievement-glow"></div>
            <h2 className="text-2xl font-bold text-[#ff00ea] mb-2">{achievement.title}</h2>
            <p className="text-gray-300 mb-2">{achievement.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-[#43f6ff]">{achievement.date}</span>
              <span className="tech-tag">{achievement.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
