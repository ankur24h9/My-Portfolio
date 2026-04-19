import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
      const [isOpen, setIsOpen] = useState(false);
  
     const skills = [
    "C Language",
    "C++",
    "Java",
    "HTML",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "MYSQL",
    "SQL",
    "GitHub",
    "Postman",
    "Apache"
  ];
  const skillLogos = {
    "C Language": "/logos/c.png",
    "C++": "/logos/C++.png",
    "Java": "/logos/Java.png",
    "HTML": "/logos/HTML.png",
    "Tailwind CSS": "/logos/tailwind.png",
    "JavaScript": "/logos/javascript.png",
    "React": "/logos/react.png",
    "MYSQL": "/logos/mysql.png",
    "SQL": "/logos/sql.png",
    "GitHub": "/logos/git.png",
    "Postman": "/logos/postman.png",
    "Apache": "/logos/apache.png",
  };

  return (
    <div className='min-h-screen bg-white text-gray-900'>
      <header className="fixed shadow-md bg-white w-full z-50">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
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
      <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
      <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
      <Link to="/certification" onClick={() => setIsOpen(false)}>Certification</Link>
      <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
    </div>
  )}
</header>
            <section id="about" className="container mx-auto  bg-gray-800 rounded-lg shadow-sm ">
        <h2 className="text-5xl font-bold text-center text-white pt-30">About Me</h2>
      
        <p className="mt-3  text-white text-2xl mx-5">I am a self-taught Full Stack Developer currently focused on building real-world projects using the Java & MERN stack.

I have hands-on experience in:

Building REST APIs with Node.js and Express
Creating responsive UIs using React and Tailwind CSS
Working with databases like MongoDB and Supabase
Integrating AI APIs such as Speech-to-Text

Currently, I am improving my skills in:

System Design basics
Backend performance optimization
Writing clean and scalable code</p>

        <h3 className="mt-6 font-medium text-3xl text-blue-600 mx-5 ">Technologies and Tools</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 py-5 mx-5">
          {skills.map((s, index) => (
            <motion.div
              key={s}
              className="flex items-center gap-3 p-3 rounded shadow hover:shadow-lg transition  text-white"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-15 h-15 bg-white rounded shadow flex items-center justify-center">
                <img
                  src={skillLogos[s]}
                  alt={s}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div className="text-sm font-semibold">{s}</div>
            </motion.div>
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default About
