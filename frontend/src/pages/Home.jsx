import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import Typeanimationtext from '../components/Typeanimationtext'

const Home = () => {
  return (
    <div className='min-h-screen w-screen rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'>
        <Navbar/>
     <div className="min-h-screen w-full bg-slate-950 overflow-hidden">

        {/* <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full 
        bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}

        <div className="welcome flex justify-center flex-col items-center my-28 gap-7">
           <h1 className='md:text-4xl flex flex-col md:flex-row gap-2 text-2xl font-bold text-white text-center'>Welcome <span> <Typeanimationtext/></span></h1>
           <div className='text-center p-7'>
            <p className='md:text-2xl text-lg text-white font-semibold'>Here you can create your note for day to day routine life</p>
           <p className='md:text-2xl text-lg text-white font-semibold'>You just Enjoy Here with your own note for your digital notebook</p>
           </div>

           <div className="flex gap-5 mx-10">
            <button className='bg-blue-800 p-4 px-11 rounded-md text-white' type="button"><NavLink to={"/login"}>Login</NavLink></button>
            <button className='bg-slate-600 p-4 px-9 rounded-md text-white' type="button"><NavLink to={"/signup"}>Signup</NavLink></button>
           </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
