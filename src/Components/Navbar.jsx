import React from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='px-10 py-5 flex justify-between'>
        <Link style={{textDecoration: 'none'}} to='/'>
            <h1 className='underline text-3xl font-bold text-black'>
                Notes </h1>
        </Link>
       
        <Link style={{textDecoration: 'none'}} to='/addnote'>
            <MdLibraryAdd className='cursor-pointer text-5xl text-black' />
        </Link>
    </div>
  )
}

export default Navbar
