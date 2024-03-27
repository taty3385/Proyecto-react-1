
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
            {tasks.map((task) => (
                <Box className="boxs" key={task.id} mx={2} border="3px solid #CCD5AE" borderRadius="10px" width={{ sx: "50%", md: "25%" }} margin="40px" sx={{ backgroundColor: "white", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Box display="flex" className={darkMode ? 'dark-mode' : ''}  >
                        <Typography
                            variant="h4"
                            gutterBottom
                            fontSize="20px"
                            fontWeight="bold"
                            margin="10px"
                            fontFamily="Times New Roman"
                            className={darkMode ? 'dark-mode' : ''}

                        >
                            {task.completado ? "Tarea completada" : "Tarea incompleta"}
                        </Typography>
                        <IconButton aria-label="delete" size="small" sx={{ color: "pink" }} onClick={() => handleDelete(task.id)}>
                            <DeleteIcon fontSize="20px" sx={{ color: darkMode ? 'red' : '' }} />
                        </IconButton>
                    </Box>

                    <Box display="flex" className={darkMode ? 'dark-mode' : ''} >
                        <Checkbox sx={{ color: darkMode ? 'white' : 'black' }} onClick={() => handleComplete(task.id)} />
                        <Box display="flex" alignItems="center" px="3px">
                            <Typography variant="h7"  fontFamily="Arial, Helvetica, sans-serif"
                                className={darkMode ? 'dark-mode' : ''}>{task.nombre}</Typography>
                        </Box>
                    </Box>
                </Box>

            ))
            }
        </Box >

    )
}
