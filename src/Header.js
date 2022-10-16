import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormDialogButton from "./FormDialog";
import { useSelector, useDispatch } from 'react-redux'
import { removeAllToDos } from './counterSlice'

export default function Header() {

    const dispatch = useDispatch()

    const handleRemoveAllNotesButton = () => {
        dispatch(removeAllToDos())
    }

return (
	<AppBar position="static">
		<Toolbar>
        <FormDialogButton />
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			To-Dos
		</Typography>
		<Button color="inherit" onClick={handleRemoveAllNotesButton}>Remove all To-Dos</Button>
		</Toolbar>
	</AppBar>
);
}
