import React, { useState } from 'react'
import { editNote } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

function EditNote(props) {
    const {id} = useParams()
    const notes = useSelector((state) => state.notes);
    const existingNotes = notes.filter(f => f.id == id)
    const {title, description} = existingNotes[0]
    const [updatedNotes, setUpdatedNotes] = useState({
        title,
        description
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [dataForm, setDataForm] = useState({
    //     id:props.id,
    //     title: props.title,
    //     description: props.description
    // })

    function handleChange(event) {
        const {name, value} = event.target
        setUpdatedNotes(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(editNote({ 
            id: id, 
            title: updatedNotes.title, 
            description: updatedNotes.description
        }))
        navigate('/')
    }

  return (
    <div>
        <div className=''>
        <div className='p-5'>
          <h1 className='font-bold text-center'>Edit Note :) </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input className='p-2 mt-8 border-4 border-indigo-500/100' 
                type='text' 
                name='title'
                value={updatedNotes.title}
                onChange={handleChange} 
                placeholder='Title' />
          <textarea className='p-2 border-4 border-black-500/50' cols="" rows="15"
                    name="description"
                    value={updatedNotes.description}
                    onChange={handleChange} />
          <button className='bg-red-400'>Save Changes</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default EditNote
