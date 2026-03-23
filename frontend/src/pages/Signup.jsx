import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import { Signupcheck } from '../services/authservices'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigator = useNavigate();

  const [loading, setloading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      setloading(true)
      const result = await Signupcheck(data)
      console.log(result)
      if (result.success) {
        localStorage.setItem("token", result.token);
        // console.log("TOKEN:", result.token);
        toast.success(result.message)
        navigator('/login')
      }
      else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("Signup Failed !")
    }
    finally {
      setloading(false)
    }
  }
  return (
    <div className='flex flex-col min-h-screen absolute bottom-0 left-0 right-0 top-0 
        bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]'>
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
      <div className="relative w-full bg-slate-950 flex items-center justify-center ">

        <div className="absolute bottom-0 left-0 right-0 top-0 
        bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>

        <div className="relative min-h-screen p-4 mb-20">
          <div className="signup min-h-[30vh] w-full md:w-[35vw] p-7 py-3 my-5 bg-slate-950 rounded-xl">
            <h2 className="text-2xl text-center text-white font-bold"> Welcome To Signup Page</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center flex-col my-5' action="">
              <input className='bg-white w-full p-4 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out' type="text" placeholder='Enter your Name' {...register("name", { required: "Please Fill this Field", minLength: { value: 3, message: "Minimum 3 Length is required" }, maxLength: { value: 15, message: "Maximum 15 Length is available" } })} />
              <br />
              {errors.name && <div className='text-red-700'>{errors.name.message}</div>}
              <input className='bg-white w-full p-4 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out' type="email" placeholder='Enter your Email' {...register("email", { required: "Please Fill this Field", minLength: { value: 3, message: "Minimum 3 Length is required" } })} />
              <br />
              {errors.email && <div className='text-red-700'>{errors.email.message}</div>}
              <input className='bg-white w-full p-4 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out' type="password" placeholder='Enter your Password' {...register("password", { required: "Please Fill this Field", minLength: { value: 3, message: "Minimum 3 Length is required" }, maxLength: { value: 15, message: "Maximum 15 Length is available" } })} />
              <br />
              {errors.password && <div className='text-red-700'>{errors.password.message}</div>}
              <input className='bg-white w-full p-4 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out' type="password" placeholder='Confirm your Password' {...register("confirmpassword", { required: "Please Fill this Field", minLength: { value: 3, message: "Minimum 3 Length is required" }, maxLength: { value: 15, message: "Maximum 15 Length is available" } })} />
              <br />
              {errors.confirmpassword && <div className='text-red-700'>{errors.confirmpassword.message}</div>}
              <button className='bg-slate-500 w-full p-4 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out' type="submit">Signup</button>
              <p className='text-white py-4 text-center flex justify-center items-center gap-3'><span className='px-1'><input type="checkbox" name="check" id="check" /></span>Already aave an account?<span className='underline text-blue-800'><NavLink to={"/login"}>Login</NavLink></span></p>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Signup
