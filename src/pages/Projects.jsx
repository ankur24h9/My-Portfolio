import React, { useState } from 'react'
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      title: "Weather forecast Web App",
      description:
        "A full-stack application that gives information about tempreture, humidity, and weather conditions.",
      tech: "HTML, CSS, JavaScript, OpenWeather API",
      img: "/logos/Weather.jpg",
      github: "/",
      live: "/",
    },
    {
      title: "RideXperts",
      description:
        "A web app that gives facility to users for booking rides and managing their travel plans.",
      tech: "React, Tailwind CSS, Node.js, Supabase, GOOGLE MAP API",
      img: "/logos/RideXperts.jpg",
      github: "/",
      live: "/",
    },
    {
      title: "Hiresense Job Tracker",
      description:
        "AI-Powered job tracking application that helps users find the right opportunities in their job search process.",
      tech: "HTML, Bootstrap, MySQL, Java",
      img: "/logos/JobLinker.jpg",
      github: "/",
      live: "/",
    },
  ];

  return (
    <div className='min-h-screen bg-white text-gray-900'>

      {/* HEADER */}
      <header className=" shadow-md bg-white w-full z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              AK
            </div>
            <div className="font-semibold">Ankur Kumar</div>
          </div>

          <nav className="hidden md:flex space-x-6 text-md">
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/services">Services</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/certification">Certification</Link>
                      <Link to="/contact">Contact</Link>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* PROJECT SECTION */}
      <section
        id="projects"
        className="container mx-auto bg-gray-900 rounded-lg shadow-sm py-12 mt-0"
      >
        <h2 className="text-4xl font-bold text-center text-white mt-0">Projects</h2>
        <p className="mt-2 text-center text-gray-300">
          Real-world applications I have built
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {projects.map((p, index) => (
            <motion.article
              key={p.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold">{p.title}</h3>

                <p className="text-sm text-gray-600 mt-2">
                  {p.description}
                </p>

                <p className="text-xs text-indigo-600 mt-2 font-semibold">
                  {p.tech}
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    Live
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects