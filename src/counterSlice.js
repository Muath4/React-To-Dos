import { createSlice } from '@reduxjs/toolkit'
import ToDo from './models/ToDo'

export const counterSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: [],
  },
  reducers: {
    addToDo: (state, action) => {
      const todo = action.payload;
        state.value.push(todo)
      },
      markAsDone: (state, action) => {
        const index = action.payload;
        var currentTodo = state.value[index];
        currentTodo.done = !currentTodo.done

        state.value.splice(index , 1); // to update the state
        state.value.splice(index , 0, currentTodo);
      },
      removeToDo: (state, action) => {
        const index = action.payload;
        state.value.splice(index , 1);
      },
      removeAllToDos: (state, action) =>{
        state.value = []
      }
  
  }
})

// Action creators are generated for each case reducer function
export const { addToDo , removeToDo, removeAllToDos, markAsDone} = counterSlice.actions

export default counterSlice.reducer


