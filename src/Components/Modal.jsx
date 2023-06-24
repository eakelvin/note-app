import React from 'react'

function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null

    const handleClose = (event) => {
      if ( event.target.id === 'wrapper' ) onClose()
    }

  return (
    <>
    <div id='wrapper' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px]'>
        <button onClick={() => onClose()} className='text-xl place-self-end text-black'>X</button>
            <div className='bg-white p-2 rounded'>
                {children}
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Modal
