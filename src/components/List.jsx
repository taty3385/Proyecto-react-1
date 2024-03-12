
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { FaCheck } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function List() {
    // const [tarea ,setTarea]=useState[
    //     {
    //     name:"Comida"
    // }]

   
    return (
        <Box display="flex" width="30%" height="20%" backgroundColor="gray">

            <Typography variant="h4" gutterBottom color="white">  holaa</Typography>
            <IconButton aria-label="delete" sx={{ color: "red" }} >
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" sx={{ color: "green" }}>
                <FaCheck />
            </IconButton>

        </Box>
    )
}
