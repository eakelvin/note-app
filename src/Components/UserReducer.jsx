import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const noteList = []

const notesSlice = createSlice({
    name:"notes",
    initialState: noteList,
    reducers: {
        addNote: (state,action) => {
            const newNote = {...action.payload, id: uuidv4()}
            state.push(newNote)
        },
        editNote: (state, action) => {
            // const {id, updatedNote} = action.payload
            // const updatedState = state.map((note) => {
            //     if(note.id === id) {
            //         return {...note, ...updatedNote}
            //     }
            //     return note
            // })
            //     return updatedState
            const {id, title, description} = action.payload
            const updatedNote = state.find(note => note.id == id)
            if(updatedNote) {
                updatedNote.title = title
                updatedNote.description = description
            }
        },
        deleteNote: (state, action) => {
            const {id} = action.payload
            const updatedNote = state.find(note => note.id == id)
            if (updatedNote) {
                return state.filter(item => item.id !== id)
            }
        },
        searchNote: (state, action) => {
            // return state.filter((note) => note.type === action.payload)
            const { id } = action.payload;
            const searchResults =  state.filter((note) => {
                const titleMatch = note.title.toLowerCase().includes(id.toLowerCase());
                // const descriptionMatch = note.description.toLowerCase().includes(id.toLowerCase());
                return titleMatch
            });
            return searchResults
        }

    }
})

export const { addNote, editNote, deleteNote, searchNote } = notesSlice.actions
export default notesSlice.reducer