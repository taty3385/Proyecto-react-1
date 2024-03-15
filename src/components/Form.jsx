
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
                        // onChange={handleChange}
                        >
                            <MenuItem>Todas</MenuItem>
                            <MenuItem>Completo</MenuItem>
                            <MenuItem>Incompleto</MenuItem>
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
