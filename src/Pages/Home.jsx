import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Search from '../Components/Searchbar'
import Notes from '../Components/Notes'
import { useSelector } from 'react-redux'


function Home() {
  const notes = useSelector((state) => state.notes)
  const [finalNotes, setFinalNotes] = useState(notes)

  const handleSearch = (value) => {
    const filteredNotes = notes.filter( (note) => note.title.toLowerCase().includes(value.toLowerCase()))
    setFinalNotes(filteredNotes)
  }

  return (
    <>
      <Navbar />
      <Search handleSearch={handleSearch} />
      <Notes finalNotes={finalNotes} />
    </>
  )
}

export default Home
