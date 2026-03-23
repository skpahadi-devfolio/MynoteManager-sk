import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { Addnotes, Deletenotes, Editnotes, Getnotes } from '../services/notesServices.js'


const Dashboard = () => {
  const [notes, setnotes] = useState({ title: "", notes: "" })
  const [card, setcard] = useState([])
  const [EditId, setEditId] = useState(null)
  const [loading, setloading] = useState(true)


  //Loading function:-
  const delay = async(d)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }
  
 //Get All Notes:-
  useEffect(() => {
    const fetchNotes = async()=>{
      setloading(true)
      try {
        // await delay(4)
        const res = await Getnotes()
        setcard(res?.data || []);
      } catch (error) {
        toast.error("Sorry This time your note can't show")
      }
       setloading(false)
    }
    fetchNotes()
  }, [])
  

  const handleChange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value })
  }

  //Add Note:-
  const handleClick = async() => {
    try {
      if(EditId){
        const res = await Editnotes(EditId, notes)
        toast.success(res.message)
        setEditId(null)
      }
      else{
       
        const res = await Addnotes(notes)
        toast.success(res.message)
        console.log(res)
      }

      //referseh the notes
      const updated = await Getnotes()
      setcard(updated?.data || [])
      setnotes({title: "", notes: ""})
    } catch (error) {
      toast.error("Something went wrong to add note !")
    }
  }


  //Deleted Note:-
  const handleDelete = async(id) => {
    await Deletenotes(id);
    toast.success("Note Deleted !")

    const updated = await Getnotes()
    setcard(updated?.data || [])
  }

  //Edit Note:-
  const handleEdit = (note) => {
    setnotes(note)
    setEditId(note._id)
  }


  return (
    <>
      <div className='min-h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
        <Navbar />
        <div className='flex justify-center items-center flex-col md:text-5xl text-2xl font-semibold gap-5 my-10 text-white'>
          <p>Manage Your DashBoard</p>
          <p className='md:text-2xl text-xl font-semibold'>Add Your Notes</p>
        </div>
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
        <div className="Addnotes mx-auto flex justify-center items-center flex-col max-w-xl w-[92vw] bg-slate-800 min-h-[40vh] gap-5 md:p-10 p-6 rounded-xl">
          <input onChange={handleChange} className='bg-white p-5 w-full rounded-md' type="text" name='title' value={notes.title} placeholder='Enter Your Note Title' />
          <input onChange={handleChange} className='bg-white p-5 w-full rounded-md' type="text" name='notes' value={notes.notes} placeholder='Enter your Notes' />
          <button onClick={handleClick} className='bg-slate-600 p-5 w-full rounded-md' type="button">Add Notes</button>
        </div>

         
        <p className='text-3xl text-white text-center my-16'>{loading?(<p>Loading....</p>):card?.length === 0?(<p>No Notes here</p>):(<p>Your Notes List</p>)}</p>
        <div className="notelist grid md:grid-cols-3 grid-cols-1 mx-auto items-center gap-6 px-20 pb-10 overflow-y-scroll h-[60vh]">
          {card?.map((note) => {
            return <div key={note._id} className="relative mx-auto my-5 flex gap-5 flex-col bg-[#1F2937] max:w-[25vw] w-full min-h-[40vh] max-h-[30vh] text-white  hover:-translate-y-4 active:scale-95 transition-all hover:ease-in-out duration-700 cursor-pointer mb-20">
              <div className="card bg-slate-900 text-center p-2">Title:- {note.title}</div>
              <div className="card overflow-y-scroll text-center">{note.notes}</div>
              <div className='absolute flex gap-16 text-2xl justify-center w-full bottom-0 bg-slate-950 p-4'>
                <FaEdit onClick={() => { handleEdit(note) }} className='cursor-pointer transition-all duration-200 hover:scale-125 text-yellow-600 active:scale-75' />
                <FaTrash onClick={() => { handleDelete(note._id) }} className='cursor-pointer transition-all duration-200 hover:scale-125 text-red-700 active:scale-75' />

              </div>
            </div>
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard



