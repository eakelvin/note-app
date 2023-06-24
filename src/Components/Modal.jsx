import React from 'react'
import EditNote from './EditNote'

function Modal({ isVisible, onClose }) {
    if (!isVisible) return null

  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[500px]'>
            <button onClick={() => onClose()} className='text-xl place-self-end'>X</button>
            <div className='bg-white p-10 rounded py-6 px-6'>
                <EditNote  />
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Modal
