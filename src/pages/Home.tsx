export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 cyberpunk-glitch" data-text="Cyber Security and Networking Student">
          Cyber Security and Networking Student
        </h1>
        <p className="text-2xl text-[#43f6ff] mb-8 typing-text">
          Securing the digital frontier, one line of code at a time.
        </p>
        <p className="text-xl text-gray-300 mb-12">
          Speacializing in Web Development, Cyber Security, and Networking.
          <br />
          Current 2nd Year student in Forbes college <br/> in kshetrapur, Chitwan - Nepal.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="cyber-button">View Projects</a>
          <a href="/contact" className="cyber-button">Get in Touch</a>
        </div>
      </div>
    </div>
  );
}
