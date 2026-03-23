import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Logincheck } from '../services/authservices'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigator = useNavigate();
  const [loading, setloading] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    try {
      setloading(true);
      const result = await Logincheck(data)
      if(result.success){
        localStorage.setItem("token", result.token);
        toast.success(result.message);
        navigator('/dashboard');
      }
      else{
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("Login Failed: ");
    }
    finally{
      setloading(false)
    }
  }
  return (
    <div>
        <Navbar/>
        <ToastContainer
          position="top-right"
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
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     <div className="login mx-auto signup min-h-[40vh] w-full md:w-[35vw] p-6 my-16 bg-slate-950 rounded-xl">
     <h2 className='text-2xl text-white font-bold text-center'> Welcome To Login Page</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center flex-col p-6' action="">
        <input className='bg-white w-full p-5 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out'  type="email" placeholder='Enter your Email' {...register("email", { required: "Please Fill this Field" , minLength:{value: 3, message: "Minimum 3 Length required"}})}/> <br />
        {errors.email && <div className='text-red-600'>{errors.email.message}</div>}

        <input className='bg-white w-full p-5 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out' type="password" placeholder='Enter your Password' {...register("password", { required: "Please Fill this Field" , minLength:{value: 3, message: "Minimum 3 Length required"}, maxLength:{value: 15, message: "Maximum 15 Length required"}})}/> <br />
        {errors.password && <div className='text-red-600'>{errors.password.message}</div>}

        <button disabled={loading} className='bg-blue-900 w-full p-4 rounded-md focus:scale-105 focus:transition-all focus:duration-500 focus:ease-in-out focus:outline-none' type="submit">{loading?"Login in....":"Login"}</button>
         <p className='text-white py-4 text-center flex justify-center items-center gap-3'>Do you want to Signup?<span className='underline text-blue-800'><NavLink to={"/signup"}>Signup</NavLink></span></p>
      </form>
     </div>
      <Footer/>
    </div>
  )
}

export default Login
