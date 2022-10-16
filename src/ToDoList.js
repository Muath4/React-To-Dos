import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToDo from './models/ToDo'
import OutlinedCard from "./OutlinedCard";
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function ToDoList() {
  const todoList = useSelector(state => state.todoList.value)
  
  return (
    <div>
      <Grid2 container spacing={2}>        
        {todoList.map((element, i) => {
            return (
                <Grid2 item xs={12} sm={6}><OutlinedCard key ={i} todo={element} index={i}/></Grid2>
            )
        })}
      </Grid2>
    </div>
  )
}