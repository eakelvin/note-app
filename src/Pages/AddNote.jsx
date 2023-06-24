import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../Components/UserReducer'


function AddNote() {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes)
  const navigate = useNavigate()

  const [dataForm, setDataForm] = useState({
    title: "",
    description: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setDataForm(prevState => {
      return {
        ...prevState,
        [name] : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newNote = {
      title: dataForm.title,
      description: dataForm.description
    }
    dispatch(addNote(newNote))
    navigate('/')
  }

  return (
    <>

      <div className='pt-10 flex items-center justify-center'>
        <div className='p-5'>
          <h1 className='font-bold text-center'>Add Note :) </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input className='p-2 mt-8 border-4 border-indigo-500/100' 
                type='text' 
                name='title'
                value={dataForm.title}
                onChange={handleChange} 
                placeholder='Title' />
          <textarea className='p-2 border-4 border-black-500/50 resize-none leading-6 w-full lg:resize' cols="100" rows="20"
                    name="description"
                    value={dataForm.description}
                    onChange={handleChange} />
          <button className='bg-red-400'>Save Note</button>
        </form>

        </div>
      </div>

    </>
  )
}

export default AddNote
