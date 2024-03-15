
import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
} from "@mui/material";
import { IoMdSend } from "react-icons/io";

export default function Form({ tareas, setTareas }) {

    const [tarea, setTarea] = useState("");
    const [filtro, setFiltro] = useState("Todas");





    const onChange = (e) => {
        setTarea(e.target.value);
    };
    const addTarea = (tarea) => {
        const newTarea = {
            id: crypto.randomUUID(),
            nombre: tarea,
        };
        setTareas([...tareas, newTarea]);
        localStorage.setItem("tarea", JSON.stringify([...tareas, newTarea]));


    };

    const handleChange = (e) => {
        setFiltro(e.target.value);

    }
    tareas.filter((tarea) => {
        console.log(tarea);
        if (filtro === "Todas") {

            return true;
        } else if (filtro === "Completo") {

            return tarea.completado;
        } else if (filtro === "Incompleto") {
            ;
            return !tarea.completado;
        }
    });


    return (
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box component="form" sx={{ width: "40%" }}>
                    <TextField
                        label="Tarea"
                        onChange={onChange}
                        sx={{ width: "90%", background: "white" }}
                    />
                </Box>
                <Box width="40%">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{ background: "white" }}
                            label="Age"
                            value={filtro}
                            onChange={handleChange}
                        >
                            <MenuItem value="Todas">Todas</MenuItem>
                            <MenuItem value="Completo">Completo</MenuItem>
                            <MenuItem value="Incompleto">Incompleto</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" margin="10px">
                <Button
                    variant="contained"
                    sx={{ padding: "5px", width: "20%", height: "40px" }}
                    onClick={() => addTarea(tarea)}
                >
                    <IoMdSend />
                    enviar
                </Button>
            </Box>
        </Box>
    );
}



