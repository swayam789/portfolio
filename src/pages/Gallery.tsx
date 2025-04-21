import { galleryData } from '../data/portfolioData';

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#43f6ff] mb-8 cyberpunk-glitch" data-text="Gallery">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <div key={index} className="cyber-gallery-card">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-[#43f6ff] mb-2">{item.title}</h2>
            <p className="text-gray-300 mb-2">{item.description}</p>
            <span className="tech-tag">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
