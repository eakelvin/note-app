import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Searchbar'
import Notes from '../Components/Notes'
import { useSelector } from 'react-redux'


function Home() {

  return (
    <>
      <Navbar />
      <Search />
      <Notes />
    </>
  )
}

export default Home
