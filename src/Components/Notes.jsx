import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNote } from './UserReducer'

function Notes() {
    const notes = useSelector((state) => state.notes)
    const dispatch = useDispatch()

    function handleDelete(id) {
        dispatch(deleteNote({id: id}))
    }

  return (
    <>
        <div className="grid grid-cols-1 px-10">
            {
                notes.map((item, index) => (
                    <div className='border-2 border-indigo-600 p-6 mt-5' key={index} item={item}>
                        <div className='font-bold text-red-400 text-3xl'>{item.title}</div>
                        <div>{item.description.slice(0, 100)}</div>
                        <Link style={{textDecoration: 'none'}} to={`/notedetails/${item.id}`}>
                            <button className='bg-sky-300 mt-5 text-black hover:border-l-green-500'>View full note</button>
                        </Link>
                            <button onClick={() => handleDelete(item.id)} className='bg-red-500 ms-5'>Delete Note</button>
                        
                    </div>
                ))
            }
        </div>
      
    </>
  )
}

export default Notes
