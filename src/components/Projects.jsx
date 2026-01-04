export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#0f172a] via-[#3b0764] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-400 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 1. Campus Event Management */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Campus Event Management System
            </h3>
            <p className="text-gray-300 mb-4">
              A web-based application developed using Java Full-Stack
              technologies to manage campus events efficiently. The system
              allows administrators to create, update, and manage events while
              enabling users to register for events online. It includes secure
              form handling, database integration using MySQL, and CRUD
              operations. Built using Java, JSP, Servlets, JDBC, HTML, CSS, and
              JavaScript to ensure a smooth and user-friendly experience.
            </p>
            <p className="text-sm text-pink-300">
              Java · JSP · Servlets · JDBC · MySQL · MVC
            </p>
          </div>

          {/* 2. Residential Remodeling Website */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              TravelWise Website
            </h3>
            <p className="text-gray-300 mb-4">
              TravelWise is a modern travel-booking website that helps users
              explore and book dream destinations around the world. It features
              a curated list of popular destinations with special offers, such
              as early-bird discounts and couple deals. The platform emphasizes
              a seamless booking experience, competitive pricing, and traveler
              safety. It also includes real traveler testimonials and practical
              travel guides covering planning, seasonality, and health & safety
              tips
            </p>
            <p className="text-sm text-pink-300">
              HTML · CSS · JavaScript · UI Design
            </p>
          </div>

          {/* 3. Educational Website */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Portfolio
            </h3>
            <p className="text-gray-300 mb-4">
              A web-based application developed using HTML, Tailwind CSS, React,
              and JavaScript to showcase personal projects, skills, and
              experience. The website features a modern, responsive design with
              interactive components and smooth navigation. Implemented reusable
              React components and styled layouts for consistent UI. Optimized
              for performance and mobile devices, providing a seamless user
              experience.
            </p>
            <p className="text-sm text-pink-300">
              HTML · CSS · JavaScript · React.js · Responsive Design
            </p>
          </div>

          {/* 4. Computer User Interaction */}
          <div className="glass-card">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Computer User Interaction using Hand Gesture & Voice Assistant
            </h3>
            <p className="text-gray-300 mb-4">
              Developed a Computer User Interaction system that enables
              hands-free control using real-time hand gesture recognition and
              voice commands. The system uses computer vision techniques to
              track and interpret hand movements for actions like cursor control
              and application navigation. Integrated a voice assistant to
              execute commands, improving accessibility and user convenience.
              Focused on enhancing human–computer interaction by reducing
              dependency on traditional input devices. The project demonstrates
              practical applications of AI, machine learning, and image
              processing in assistive technology.
            </p>
            <p className="text-sm text-pink-300">
              Python · OpenCV · SpeechRecognition · pyttsx3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
