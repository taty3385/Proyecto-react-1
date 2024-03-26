
import { Box, Typography, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function List({ tasks, setTasks, darkMode }) {

    const handleDelete = (id) => {
        const filtrarTareas = tasks.filter(t => t.id !== id);
        setTasks(filtrarTareas);
        localStorage.setItem("tarea", JSON.stringify(filtrarTareas));
    };

    const handleComplete = (id) => {
        const updatedTareas = tasks.map(t => {
            if (t.id === id) {
                return { ...t, completado: !t.completado };
            }
            return t;
        });
        setTasks(updatedTareas);
        localStorage.setItem("tarea", JSON.stringify(updatedTareas));
    };

    return (

        <Box display="flex" flexWrap="wrap" width="100vw" sx={{ justifyContent: "center" }}>
            {tasks.map(task => (
                <Box className="boxs" key={task.id} mx={2} border="2px solid #CCD5AE" borderRadius="10px" width={{ sx: "50%", md: "30%" }} margin="40px" padding="10px">
                    <Box display="flex" className={darkMode ? 'dark-mode' : ''}  >
                        <Typography
                            variant="h4"
                            gutterBottom
                            fontSize="20px"
                            fontWeight="bold"
                            marginRight="10px"
                            fontFamily="Eagle Lake"
                            className={darkMode ? 'dark-mode' : ''} 
                        >
                            {task.completado ? "Tarea completada" : "Tarea incompleta"}
                        </Typography>
                        <IconButton aria-label="delete" size="small" sx={{ color: "#D4A373" }} onClick={() => handleDelete(task.id)}>
                            <DeleteIcon fontSize="20px" className={darkMode ? 'dark-mode' : ''}  />
                        </IconButton>




                    </Box>

                    <Box display="flex" className={darkMode ? 'dark-mode' : ''} >
                        <Checkbox sx={{ color: darkMode ? 'white' : 'black' }} onClick={() => handleComplete(task.id)} />
                        <Box display="flex" alignItems="center" px="3px">
                            <Typography variant="h7" gutterBottom fontFamily="Verdana, Geneva, Tahoma, sans-serif"
                                className={darkMode ? 'dark-mode' : ''}>{task.nombre}</Typography>
                        </Box>
                    </Box>
                </Box>

            ))
            }
        </Box >

    )
}
