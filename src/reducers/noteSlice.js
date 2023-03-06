import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteData: [
      { id: uuid(), task: "task 1", completed: false },
      { id: uuid(), task: "task 2", completed: true },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.noteData.push(action.payload);
    },
    removeNote: (state, action) => {
      state.noteData = state.noteData.filter(
        (todo) => todo.id !== action.payload
      );
    },
    updateNote: (state, action) => {
      state.noteData = state.noteData.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updtedTask };
        }
        return todo;
      });
    },
    toggleNote: (state, action) => {
      state.noteData = state.noteData.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
  },
});

export const { addNote, removeNote, updateNote, toggleNote } =
  noteSlice.actions;
export default noteSlice.reducer;
