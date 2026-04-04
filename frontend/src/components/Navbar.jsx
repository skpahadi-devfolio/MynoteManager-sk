import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  //   const navigator = useNavigate()
  //   const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigator('/login');
  // }
  const [MenuOpen, setMenuOpen] = useState(false);

  const togglemenu = () => {
    setMenuOpen(!MenuOpen);
  }
  return (
    <div>
      <nav className='bg-cyan-700 p-4 cursor-pointer'>
        <ul className='flex justify-center md:gap-20 gap-4 items-center'>
          <div className="logo font-bold text-2xl px-4"><NavLink to={"/"}>NoteManagerApp</NavLink></div>

          {/* humburger for mobile */}
          <div className='md:hidden text-3xl cursor-pointer' onClick={togglemenu}><GiHamburgerMenu /></div>

          {/* for desktop */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
            <NavLink to={"/services"}>Services</NavLink>
            <div className="flex flex-col md:flex-row gap-8 mx-10">
              <button className='bg-blue-800 p-3 px-9 rounded-xl text-white' type="button"><NavLink to={"/login"}>Login</NavLink></button>
              <button className='bg-slate-600 p-3 px-9 rounded-xl text-white' type="button"><NavLink to={"/signup"}>Signup</NavLink></button>
            </div>
          </div>


        </ul>
          {/* for mobile responisve */}
          {MenuOpen && (
            <div className="md:hidden bg-gray-800 flex flex-col justify-center items-center gap-2 mt-4  p-4 rounded transition-all ease-in-out duration-700">
              <NavLink onClick={togglemenu} to="/">Home</NavLink>
              <NavLink onClick={togglemenu} to="/about">About</NavLink>
              <NavLink onClick={togglemenu} to="/contact">Contact Us</NavLink>
              <NavLink onClick={togglemenu} to="/services">Services</NavLink>

              <NavLink onClick={togglemenu} to="/login">Login</NavLink>
              <NavLink onClick={togglemenu} to="/signup">Signup</NavLink>
            </div>
          )}
      </nav>
    </div>
  )
}

export default Navbar



// onClick={handleLogout}
