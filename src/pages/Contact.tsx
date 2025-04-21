export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#43f6ff] mb-8 cyberpunk-glitch" data-text="Contact">
        Contact
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="cyber-card">
          <div className="cyber-card-glitch"></div>
          <form className="space-y-6" action="https://getform.io/f/anlqmjya" method="POST">
            <div>
              <label className="block text-[#43f6ff] mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-[#0a0a1f] border-2 border-[#43f6ff] rounded-lg p-3 text-white"
                placeholder="Enter your name" name="name"
              />
            </div>
            <div>
              <label className="block text-[#43f6ff] mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-[#0a0a1f] border-2 border-[#43f6ff] rounded-lg p-3 text-white"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div>
              <label className="block text-[#43f6ff] mb-2">Message</label>
              <textarea
                className="w-full bg-[#0a0a1f] border-2 border-[#43f6ff] rounded-lg p-3 text-white h-32"
                placeholder="Enter your message"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="cyber-button w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
