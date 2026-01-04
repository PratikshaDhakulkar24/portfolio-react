export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#020617] via-[#3b0764] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-300 mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card text-center">
            <h3 className="text-pink-400 text-xl mb-2">Email</h3>
            <p className="text-gray-300">pratikshadhakulkar24@gmail.com</p>
          </div>

          <div className="glass-card text-center">
            <h3 className="text-pink-400 text-xl mb-2">Phone</h3>
            <p className="text-gray-300">+91 8857057363</p>
          </div>

          <div className="glass-card text-center">
            <h3 className="text-pink-400 text-xl mb-2">Links</h3>
            <p className="text-gray-300">
              <a href="https://github.com/PratikshaDhakulkar24" target="_blank">
                GitHub
              </a>
              <br />
              <a href="https://www.linkedin.com/in/dhakulkar/" target="_blank">
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <p className="text-gray-500 mt-16">© 2025 Pratiksha Dhakulkar</p>
      </div>
    </section>
  );
}
