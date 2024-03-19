
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

        <Box display="flex" flexWrap="wrap" width="100vw" sx={{ justifyContent: "center", marginTop: "50px" }}>
            {tareas.map(tarea => (
                <Box className="boxs" key={tarea.id} mx={2} border="2px solid #CCD5AE" borderRadius="10px" width={{sx: "50%", md: "30%"}} margin="40px" padding="10px">
                    <Box  backgroundColor="white" display="flex" >
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="black"
                            fontSize="20px"
                            fontWeight="bold"
                            marginRight="10px"
                            fontFamily="Eagle Lake"
                        >
                            {tarea.completado ? "Tarea completada" : "Tarea incompleta"}
                        </Typography>
                        <IconButton aria-label="delete" size="small" sx={{color:"#D4A373"}} onClick={() => handleDelete(tarea.id)}>
                            <DeleteIcon fontSize="20px" color="#D4A373" />
                        </IconButton>




                    </Box>

                    <Box display="flex" backgroundColor="white">
                        <Checkbox {...label} onClick={() => handleComplete(tarea.id)} />
                        <Box display="flex" alignItems="center" px="3px">
                            <Typography variant="h7" gutterBottom color="black">{tarea.nombre}</Typography>
                        </Box>
                    </Box>
                </Box>

            ))
            }
        </Box >

    )
}
