import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaBeer, FaEdit, FaPlus, FaTasks, FaTrash } from 'react-icons/fa'

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />

      <div className='min-h-screen mb-20'>

      {/* introduction of this Page */}
      <div className='bg-slate-800 mx-auto w-[90vw] max-w-3xl p-5 my-16 rounded-md shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl text-white cursor-pointer transition-all duration-700 hover:-translate-y-4 active:scale-x-105'>
      <p className='text-center text-3xl font-bold text-white'>Our Services</p>
        <p className='p-6'>Our platform is designed to help you capture ideas, organize information, and manage your notes effortlessly.
          With a clean interface and powerful features, you can stay productive and keep your thoughts organized anytime.</p>
      </div>


      {/* services */}
      <div className="our-services bg-slate-800 rounded-md p-5 w-[90vw] max-w-3xl mx-auto mb-20 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl text-white cursor-pointer transition-all duration-700 hover:-translate-y-4 md:active:scale-x-0 active:scale-x-105">
        <p className='text-center text-3xl font-bold'>Service Card</p>

        <div className="Service-Cards-Content max-h-[40vh] grid md:grid-cols-3 grid-cols-1 gap-7 text-white my-5 overflow-y-scroll">
          <div className="create bg-slate-900 rounded-md transition-all duration-700 ease-in-out hover:rotate-y-90 active:rotate-y-90">
            <p className='bg-slate-950 flex justify-center items-center gap-4 p-3 text-xl rounded-md'><FaPlus className='cursor-pointer transition-all duration-200 hover:scale-125 text-green-600 active:scale-75' />Create Notes</p>
            <p className='p-5'>Easily create notes to capture ideas, reminders, or important information.
              Our platform provides a simple and distraction-free environment to help you focus on what matters most.</p>
          </div>

          <div className="edit bg-slate-900 rounded-md transition-all duration-700 ease-in-out hover:rotate-y-90 focus:rotate-y-90">
            <p className='bg-slate-950 p-3 text-xl rounded-md flex justify-center items-center gap-4'><FaEdit className='cursor-pointer transition-all duration-200 hover:scale-125 text-yellow-600 active:scale-75'/>Edit Notes</p>
            <p className='p-5'>Update your notes anytime to keep your information accurate and up to date.
              Whether you need to correct details or expand your thoughts, editing is quick and seamless.</p>
          </div>

          <div className="delete bg-slate-900 rounded-md transition-all duration-700 ease-in-out hover:rotate-y-90 focus:rotate-y-90">
            <p className='bg-slate-950 flex justify-center items-center gap-4 p-3 text-xl rounded-md'><FaTrash className='cursor-pointer transition-all duration-200 hover:scale-125 text-red-600 active:scale-75' />Delete Notes</p>
            <p className='p-5'>Remove notes that are no longer useful to keep your workspace clean and organized.
              Managing your notes becomes simple with easy delete functionality.</p>
          </div>

          <div className='bg-slate-900 rounded-md transition-all duration-700 ease-in-out hover:rotate-y-90 focus:rotate-y-90'>
            <p className='bg-slate-950 flex justify-center items-center gap-4 p-3 text-xl rounded-md'><FaTasks className='cursor-pointer transition-all duration-200 hover:scale-125 text-cyan-600 active:scale-75' />Organized & Accessible</p>
            <p className='p-5'>All your notes stay organized in one place, making it easy to find and manage your information whenever you need it.</p>
          </div>
        </div>
      </div>


      {/* End of services */}
      <div className='bg-slate-800 w-[90vw] max-w-3xl mx-auto p-5 rounded-md mb-20 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl text-white cursor-pointer transition-all duration-700 hover:-translate-y-4 active:scale-x-105'>
        <p className='p-5'>Our goal is to provide a simple and reliable platform that helps you stay organized, productive, and focused every day.</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
