import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
//   const navigator = useNavigate()
//   const handleLogout = () => {
//   localStorage.removeItem("token");
//   navigator('/login');
// }
  return (
    <div>
      <nav className='bg-cyan-700 p-4 cursor-pointer'>
        <ul className='flex justify-center md:gap-20 gap-4 items-center flex-col md:flex-row'>
            <div className="logo font-bold text-2xl px-4"><NavLink to={"/"}>NoteManagerApp</NavLink></div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
            <NavLink to={"/services"}>Services</NavLink>
            <div className="flex flex-col md:flex-row gap-8 mx-10">
            <button className='bg-blue-800 p-3 px-9 rounded-xl text-white' type="button"><NavLink to={"/login"}>Login</NavLink></button>
            <button className='bg-slate-600 p-3 px-9 rounded-xl text-white' type="button"><NavLink to={"/signup"}>Signup</NavLink></button>
           </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar



// onClick={handleLogout}
