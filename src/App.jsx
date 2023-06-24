import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AddNote from './Pages/AddNote'
import NoteDetails from './Pages/NoteDetails'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/addnote' element={<AddNote />} />
          <Route path='/notedetails/:id' element={<NoteDetails />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
