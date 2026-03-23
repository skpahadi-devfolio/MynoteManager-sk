import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaClock, FaEnvelope } from 'react-icons/fa'
import { contactform } from '../services/contactservices'
import { ToastContainer, toast } from 'react-toastify'

const Contact = () => {

  const [form, setform] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await contactform(form)
    alert("Your Form is submiited successfully!")
    console.log("form", form)
    setform({ name: "", email: "", message: "" })
  }
  return (
    <div className="min-h-screen flex flex-col pb-16 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* Intro for contact */}
      <div className='w-full p-4 md:max-w-[40vw] mx-auto text-xl text-white my-16 transition-all duration-700 text-shadow-2xs text-shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-3xl text-center font-bold'>Get in Touch</p>
        <p className='my-5'>Have a question, suggestion, or feedback?
          We'd love to hear from you. Feel free to reach out using the form below
          and we'll get back to you as soon as possible.</p>
      </div>


      {/* Contact Form */}
      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col mx-auto bg-slate-900 md:p-10 p-4 rounded-md w-[90vw] max-w-xl gap-5 mb-28 hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer' action="">
        <input onChange={handleChange} value={form.name} className='w-full bg-white p-4 rounded-md' type="text" name='name' placeholder='Enter your Name' />
        <input onChange={handleChange} value={form.email} className='w-full bg-white p-4 rounded-md' type="email" name='email' placeholder='Enter your Email' />
        <textarea onChange={handleChange} value={form.message} className='w-full bg-white p-4 pb-16 rounded-md' name="message" id="message" type="text" placeholder='Enter your Message'></textarea>
        <button className='w-full bg-gray-950 text-white p-4 rounded-md font-bold text-xl' type="submit">Send Message</button>
      </form>


      {/* other option to contact us */}
      <div className='bg-slate-900 flex flex-col mb-20 w-[90vw] max-w-xl mx-auto gap-6 hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-white text-3xl font-bold text-center bg-slate-950 p-4'>More Contact Options</p>
        <div className='flex gap-5 font-bold text-xl text-white mx-auto flex-col'>
          <p className='flex justify-center items-center'><FaEnvelope />Email Support:-</p>
          <a href="https://mail.google.com/mail/?view=cm&to=sandeepkohli180@gmail.com"
            target="_blank" rel="noreferrer" className='break-all text-center px-2 underline text-blue-800'>sandeepkohli180@gmail.com</a>
        </div>

        <div className='flex flex-col gap-5 font-bold text-xl text-white p-2 mx-auto'>
          <p className='flex justify-center items-center'><FaClock />Response Time:-</p>
          <p>Usually within 24 hours</p>
        </div>
      </div>

      {/* Your Feedback  */}
      <div className='bg-slate-900 mb-20 w-[90vw] max-w-xl mx-auto gap-6 hover:-translate-y-4 transition-all duration-700 active:rotate-y-60 shadow-lg shadow-blue-400 hover:shadow-xl active:shadow-xl cursor-pointer'>
        <p className='text-3xl text-center font-bold bg-slate-950 text-white p-4'>Feedback</p>
        <div className='flex flex-col gap-5 font-bold text-xl text-white p-10'>
          <p>Share your suggestions to improve the platform.</p>
          <p>Your feedback helps us improve and build a better experience for everyone.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
