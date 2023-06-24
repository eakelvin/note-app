import React from 'react'

function Searchbar() {
  return (
    <>
        <div className="sm:mx-auto sm:max-w-lg sm:px-10 pb-10">
            <div className="mx-auto max-w-md">
                <form action="" className="relative mx-auto w-max">
                    <input type="search" placeholder='Search'
                        className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-indigo-300 focus:pl-16 focus:pr-4" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </form>
            </div>
         </div>  
    </>
  )
}

export default Searchbar
