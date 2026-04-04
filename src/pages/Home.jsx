import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    function DynamicRole() {
      return (
        <div className="text-4xl text-white font-bold">
          <Typewriter
            words={[
              "Frontend Developer",
              "Backend Developer",
              "Full-Stack Developer",
            ]}
            loop={true}
            cursor
            cursorStyle=""
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      );
    }
  return (
    <div className='min-h-screen bg-white text-gray-900'>
    <header className="fixed shadow-md bg-white w-full z-50">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">

    
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
     

      <section id="home" className="bg-linear-to-br from-indigo-500 to-purple-500 container mx-auto px-6 py-26 flex flex-col md:flex-row items-center gap-8 rounded-2xl">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-amber-300">Hi, I am Ankur</h1> <DynamicRole />
          <p className="font-bold text-2xl mt-5 text-white ">I am a Passionate Full-Stack Developer. I am currently working at React Technologies as a web Developer.</p>
          <div className="flex items-center gap-3 mt-20 md-20 ">
            <a
              href="/autoCV1.pdf"
              download="autoCV1.pdf"
              className="w-50 mx-4 hover:opacity-0.4  px-4 py-2 text-xl hover:bg-violet-500 bg-white text-center justify-center rounded-3xl"
            >
              Download CV
            </a>

          </div>


          <div className="flex space-x-4  mx-14 mt-10">

            <a href="https://www.linkedin.com/in/ankur24h9" target="_blank" rel="noreferrer">
              <img
                src="/logos/images.png"
                alt="LinkedIn"
                className="w-8 h-8 hover:opacity-8 "
              />
            </a>

            <a href="https://github.com/ankur24h9" target="_blank" rel="noreferrer">
              <img
                src="/logos/github.png"
                alt="GitHub"
                className="w-8 h-8 hover:opacity-8"
              />
            </a>

            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
              <img
                src="/logos/twitter.png"
                alt="Twitter"
                className="w-8 h-8 hover:opacity-8"
              />
            </a>


          </div>
          <div className="mt-15 flex gap-4">
            <a href="tel:+916204979918" className="px-4 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">Contact Me</a>
            <a href="mailto:ankurkumar62049@gmail.com" className="px-6 py-3 border border-gray-200 rounded-full hover:bg-gray-100">Send Email</a>
          </div>


        </div>

        <div className="flex justify-end items-center w-full md:w-1/2 mt-0">
          <div className="w-100 h-100 rounded-full shadow-md overflow-hidden md-170 ">
            <img
              src="/logos/image.png"
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
