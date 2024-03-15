
import { IconButton, Box, Typography } from '@mui/material';
import { FaCheck } from "react-icons/fa";

export default function List({ tareas, handleDelete  ,handleComplete}) {

    
    const complete = () => {
        handleComplete(tareas.id); 
    };

    return (
        <Box display="flex" width="30%" height="20%" backgroundColor="white" sx={{ justifyContent: "space-between" }}>
            <Box>
                <Typography variant="h4" gutterBottom color="black" sx={{ textDecoration: tareas.completado ? "line-through" : "none" }}>{tareas.nombre}</Typography>
            </Box>
            <Box>
                <IconButton aria-label="delete" sx={{ color: "white", background: "red" }} onClick={() => handleDelete(tareas.id)}>
                    delet
                </IconButton>
                <IconButton aria-label="delete" sx={{ color: "white", background: "green" }} onClick={complete}>
                    <FaCheck />
                </IconButton>
            </Box>
        </Box>
    )
}
