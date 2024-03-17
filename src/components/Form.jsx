import FormFilter from "./FormFilter";
import { useState } from "react";
import {
    Box,
    TextField,
    Button,

} from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { WidthFull } from "@mui/icons-material";


export default function Form({ tareas, setTareas }) {

    const [tarea, setTarea] = useState("");


    const onChange = (e) => {
        setTarea(e.target.value);
      
    };
    const addTarea = (tarea) => {
        const newTarea = {
            id: crypto.randomUUID(),
            nombre: tarea,
            completado: false
        };
        setTareas([...tareas, newTarea]);
        localStorage.setItem("tarea", JSON.stringify([...tareas, newTarea]));
    


    };




    return (
        <Box display="flex" width="100%"  justifyContent="center">
            <Box display="flex" width="80%"    borderRadius="5px">
                <Box component="form" width="80%" >
                    <TextField
                        label="Tarea"
                        onChange={onChange}
                        sx={{ width: "100%" }}
                    />
                </Box>
                <FormFilter tareas={tareas} setTareas={setTareas} />

            </Box>
            <Box display="flex" justifyContent="center"  width="10%" height="50px">
                <Button
                    variant="contained"
                    sx={{ padding: "5px", width: "100%" }} 
                    onClick={() => addTarea(tarea)}
                >
                    <IoMdSend />
                    enviar
                </Button>
            </Box>

        </Box>
    );
}



