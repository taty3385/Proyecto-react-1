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
    const [validation, setValidation] = useState(false);
    const [mensaje, setMensaje] = useState("")



    const onChange = (e) => {
        setTarea(e.target.value);
        if (e.target.value.length > 10 ) {
            setValidation(true);
        } else {
            setValidation(false);
        }

    };
    const addTarea = (tarea) => {
        if (tarea.length > 10 || tarea.length === 0 ) {
            setMensaje(tarea.length > 10 ? "Excediste los 10 caracteres" : "El campo está vacío");
            setValidation(true)
        } else {
            const newTarea = {
                id: crypto.randomUUID(),
                nombre: tarea,
                completado: false
            };
            setTareas([...tareas, newTarea]);
            localStorage.setItem("tarea", JSON.stringify([...tareas, newTarea]));
            setTarea("")
            setValidation(false)
        }
    };




    return (
        <Box display="flex" width="100%" justifyContent="center" >
            <Box display="flex" width="80%" borderRadius="5px">
                <Box component="form" width="80%" >
                    <TextField
                        label="Tarea"
                        onChange={onChange}
                        sx={{ width: "100%", backgroundColor: "white" }}
                        value={tarea}
                        error={validation}
                        helperText={mensaje}  
                        
                    />
                </Box>
                <FormFilter tareas={tareas} setTareas={setTareas} />

            </Box>
            <Box display="flex" justifyContent="center" width="10%" height="50px">
                <Button
                    variant="contained"
                    sx={{ padding: "5px", width: "100%" }}
                    onClick={() => addTarea(tarea)}
                    value={tarea}

                >
                    <IoMdSend />
                    enviar
                </Button>
            </Box>

        </Box>
    );
}



