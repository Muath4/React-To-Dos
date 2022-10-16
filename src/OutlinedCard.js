import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux'
import { removeToDo, markAsDone } from './counterSlice'
import './index.css';
import CardHeader from '@mui/material/CardHeader';
import { height } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OutlinedCard(props) {
    const todo = props.todo;
    const dispatch = useDispatch()
    const todoDone = useSelector(state => state.todoList.value[props.index].done)

    const handleRemoveTodo = () => {
        dispatch(removeToDo(props.index))
    }

    const handleDoneClick = () => {
      dispatch(markAsDone(props.index))
  }

    

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant={todoDone ?"outlined": "elevation"} >
      <div style={todoDone ?{backgroundColor:"#52F630",height:50} : {backgroundColor:"red",height:50}}></div>
      <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {todo.title}
      </Typography>
      <Typography variant="body2">
        {todo.content}

      </Typography>
    </CardContent>
  </React.Fragment>
  <Button variant="contained" style={{fontSize: 13}} onClick={handleDoneClick}>{todoDone?"mark as todo": "mark as done"} </Button>
  <br/>
  <Button variant="outlined" style={{fontSize: 13}} onClick={handleRemoveTodo}>remove</Button>
        </Card>
    </Box>
  );
}
