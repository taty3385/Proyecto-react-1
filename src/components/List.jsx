
import { Box, Typography, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
        <Box display="flex" flexWrap="wrap" width="100vw" sx={{ justifyContent: "center", marginTop: "50px" }}>
            {tareas.map(tarea => (
                <Box key={tarea.id} mx={2} border="1px solid gray" borderRadius="5px" padding="10px" width="30%" marginBottom="10px">
                    <Box backgroundColor="white" display="flex">
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="black"
                            fontSize="20px"
                            fontWeight="bold"
                            marginRight="10px"
                        >
                            {tarea.completado ? "Tarea completada" : "Tarea incompleta"}
                        </Typography>
                        <IconButton aria-label="delete" size="small" onClick={() => handleDelete(tarea.id)}>
                            <DeleteIcon fontSize="20px" />
                        </IconButton>




                    </Box>

                    <Box display="flex" >
                        <Checkbox {...label} onClick={() => handleComplete(tarea.id)} />
                        <Box display="flex" alignItems="center">
                            <Typography variant="h7" gutterBottom color="black">{tarea.nombre}</Typography>
                        </Box>
                    </Box>
                </Box>

            ))
            }
        </Box >

    )
}
