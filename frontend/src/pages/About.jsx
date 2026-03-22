import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {

  const [steptwo, setsteptwo] = useState([
    "Quickly create and organize your notes",
    "Update information whenever needed",
    "Remove notes that are no longer useful",
    "Keep your notes accessible within your browser",
    "Enjoy a clean and responsive interface designed for productivity"
  ])
  return (
    <div className='min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <Navbar />

    <div className='min-h-screen pb-20'>
      {/* first section */}
      <section className='flex justify-center items-center gap-5 mx-auto flex-col w-[83vw] max-w-2xl bg-slate-800 text-white my-16 p-6 rounded-md hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-2xl text-center font-bold'>About This Note Manager App</p>
        <p>Our Notes platform is designed to make capturing ideas, tasks, and important information simple and fast.
          Whether you're managing daily tasks, saving quick thoughts, or organizing important notes, the application
          provides a clean and distraction-free environment to keep everything in one place.
        </p>
        <p>With a focus on speed and usability, the platform allows users to create, update, and manage notes instantly.
          The interface is built to be minimal, responsive, and easy to use across different devices.</p>
      </section>



      {/* second section */}
      <section className='flex gap-5 mx-auto flex-col w-[83vw] max-w-2xl bg-slate-800 text-white my-16 p-6 rounded-md hover:-translate-y-5 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-2xl text-center font-bold'>What You Can Do</p>
        {steptwo.map((item, index) => {
          return <p key={index}>{index + 1}.{item}</p>
        })}
      </section>


      {/* third section */}
      <section className='flex justify-center items-center gap-5 mx-auto flex-col w-[83vw] max-w-2xl bg-slate-800 text-white my-16 p-6 rounded-md hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-2xl text-center font-bold'>Our Approach</p>
        <p>We believe note-taking should be effortless. The platform focuses on simplicity,
          speed, and clarity so users can focus on their ideas rather than complicated tools.
        </p>
        <p>We believe note-taking should be effortless. The platform focuses on simplicity,
          speed, and clarity so users can focus on their ideas rather than complicated tools.
        </p>
      </section>


      {/* fourth section */}
      <section className='flex justify-center items-center gap-5 mx-auto flex-col w-[83vw] max-w-2xl bg-slate-800 text-white my-16 p-6 rounded-md hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-2xl text-center font-bold'>Why This Platform</p>
        <p>Many note-taking tools are overloaded with features. This platform focuses on the essentials:
          writing, organizing, and managing notes quickly without distractions.</p>
      </section>



      {/* fifth section */}
      <section className='flex justify-center items-center gap-5 mx-auto flex-col w-[83vw] max-w-2xl bg-slate-800 text-white my-16 p-6 rounded-md hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
      <p className='text-2xl text-center font-bold'>Future Vision</p>
      <p>The platform will continue to evolve with improvements aimed at making note management
        even more powerful and flexible, including advanced organization, smarter search,
        and enhanced user experiences.</p>
        </section>
        </div>
      <Footer />
    </div>
  )
}

export default About
