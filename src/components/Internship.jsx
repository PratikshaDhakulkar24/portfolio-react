export default function Internship() {
  return (
    <section
      id="internship"
      className="py-24 bg-gradient-to-br from-[#020617] via-[#3b0764] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-400 mb-12">
          My Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Internship 1 */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Full-Stack Developer Intern
            </h3>
            <h4 className="text-lg text-gray-300 mb-1">
              🏢 Widesoftech Pvt. Ltd
            </h4>
            <h4 className="text-lg text-gray-300 mb-1">
              🗓️ Jan 2024 – June 2024
            </h4>
            <h4 className="text-lg text-gray-300 mb-4">
              📍 Nagpur, Maharashtra
            </h4>

            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Developed web applications using full-stack technologies.</li>
              <li>Helped in designing, coding, and testing new features.</li>
              <li>
                Worked with the team to fix issues and improve performance.
              </li>
              
              <li>
                Gained hands-on experience in real-world development and version
                control tools.
              </li>
            </ul>
          </div>

          {/* Internship 2 */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Java Full Stack Developer Intern
            </h3>
            <h4 className="text-lg text-gray-300 mb-1">
              🏢 Giris Tech Hub Pvt. Ltd
            </h4>
            <h4 className="text-lg text-gray-300 mb-1">
              🗓️ June 2025 – Dec 2025
            </h4>
            <h4 className="text-lg text-gray-300 mb-4">📍 Pune, Maharashtra</h4>

            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>
                Built Campus Event Management System using Java, JSP, Servlets,
                JDBC, and MySQL.
              </li>
              <li>
                Developed event creation, registration, user management, and
                admin dashboard modules with CRUD operations.
              </li>
              <li>
                Implemented database integration and form validation to improve
                performance and user experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
