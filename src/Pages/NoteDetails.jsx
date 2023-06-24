import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Modal from '../Components/Modal'
import EditNote from '../Components/EditNote'


function NoteDetails() {
    const {id} = useParams()
    const notes = useSelector((state) => state.notes)
    const noteDetails = notes.find((note) => note.id === id)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    
    if (!noteDetails) {
        return <div>Note not found.</div>;
      }

  return (
    <>
    <div className="container mx-auto px-10 py-10">
        <button onClick={() => setShowModal(true)} className='bg-green-900 text-white mb-10 hover:bg-emerald-300'>Edit Note</button>
        <h1>{noteDetails.title}</h1>
        <p>{noteDetails.description}</p>
    </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className=''>
        <EditNote />
        </div>
      </Modal>
    </>
  )
}

export default NoteDetails
