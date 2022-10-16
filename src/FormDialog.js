import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux'
import { addToDo } from './counterSlice'
import ToDo from './models/ToDo'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const dispatch = useDispatch()

  const addToDoDetails = (title, details) => new ToDo(Math.floor(Math.random() * 1000),title, details)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
    dispatch(addToDo(addToDoDetails(title,content)))
    setTitle("")
    setContent("")
  };

  const handleTitleFieldChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentFieldChange = (e) => {
    setContent(e.target.value)
}


  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
      Add To-Do
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add To-Do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleTitleFieldChange}
          />
        <TextField
            autoFocus
            multiline
            margin="dense"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleContentFieldChange}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}