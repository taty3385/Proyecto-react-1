
import { IconButton, Box, Typography } from '@mui/material';
import { FaCheck } from "react-icons/fa";

export default function List({ tareas, setTareas, }) {

    const handleDelete = (id) => {
        const filtrarTareas = tareas.filter(t => t.id !== id);
        setTareas(filtrarTareas);
        localStorage.setItem("tarea", JSON.stringify(filtrarTareas));
    };

    const handleComplete = (id) => {
        const updatedTareas = tareas.map(t => {
            if (t.id === id) {
                return { ...t, completado: !t.completado };
            }
            return t;
        });
        setTareas(updatedTareas);
        localStorage.setItem("tarea", JSON.stringify(updatedTareas));
    };

    return (
        //   
        <Box display="flex" width="100vw" height="20%" backgroundColor="red" sx={{ justifyContent: "center" }}>
            {tareas.map(tarea => (
                <Box key={tarea.id} mx={1}>
                    <Box backgroundColor="white" display="flex" flexDirection="column">

                        <Box>
                            <IconButton aria-label="delete" sx={{ color: "white", background: "red" }} onClick={() => handleDelete(tarea.id)}>
                                delet
                            </IconButton>
                            <IconButton aria-label="delete" sx={{ color: "white", background: "green" }} onClick={() => handleComplete(tarea.id)}>
                                <FaCheck />
                            </IconButton>
                        </Box>
                        <Box >
                            <Typography variant="h4" gutterBottom color="black" sx={{ textDecoration: tarea.completado ? "line-through" : "none" }}>{tarea.nombre}</Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>

    )
}
