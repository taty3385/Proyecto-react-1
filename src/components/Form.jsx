import FormFilter from "./FormFilter";
import { useState } from "react";
import {
    Box,
    TextField,
    Button,

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
            completado: false
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
                <FormFilter tareas={tareas} setTareas={setTareas}/>

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



