
import { IconButton, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa";



export default function List({ tareas }) {

    const [tarea, setTareas] = useState(tareas)




    return (
        <Box display="flex" width="30%" height="20%" backgroundColor="white" sx={{ justifyContent: "space-between" }}>
            <Box>
                <Typography variant="h4" gutterBottom color="black">{tarea.nombre}</Typography>
            </Box>
            <Box>
                <IconButton aria-label="delete" sx={{ color: "white", background: "red" }} >
                    delet
                </IconButton>
                <IconButton aria-label="delete" sx={{ color: "white", background: "green" }}>
                    <FaCheck />
                </IconButton>
            </Box>

        </Box>
    )
}
