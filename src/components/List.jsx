
import { IconButton, Box, Typography } from '@mui/material';
import { FaCheck } from "react-icons/fa";

export default function List({ tareas, setTareas,arrTareas }) {

    const handleDelete = (id) => {
        const filtrarTareas = arrTareas.filter(t => t.id !== id);
        setTareas(filtrarTareas);
        localStorage.setItem("tarea", JSON.stringify(filtrarTareas));
    };

    const handleComplete = (id) => {
        const updatedTareas = arrTareas.map(t => {
            if (t.id === id) {
                return { ...t, completado: !t.completado }; 
            }
            return t;
        });
        setTareas(updatedTareas);
        localStorage.setItem("tarea", JSON.stringify(updatedTareas));
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
                <IconButton aria-label="delete" sx={{ color: "white", background: "green" }} onClick={() => handleComplete(tareas.id)}>
                    <FaCheck />
                </IconButton>
            </Box>
        </Box>
    )
}
