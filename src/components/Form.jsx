import FormFilter from "./FormFilter";
import { useState } from "react";
import {
    Box,
    TextField,
    Button,

} from "@mui/material";
import { IoMdSend } from "react-icons/io";



export default function Form({ tasks, setTasks }) {

    const [task, setTask] = useState("");
    const [validation, setValidation] = useState(false);
    const [message, setMessage] = useState("")



    const onChange = (e) => {
        setTask(e.target.value);
        if (e.target.value.length > 10) {
            setValidation(true);
        } else {
            setValidation(false);
        }

    };
    const addTarea = (task) => {
        if (task.length > 10 || task.length === 0) {
            setMessage(task.length > 10 ? "Excediste los 10 caracteres" : "El campo está vacío");
            setValidation(true)
        } else {
            const newTask = {
                id: crypto.randomUUID(),
                nombre: task,
                completado: false
            };
            setTasks([...tasks, newTask]);
            localStorage.setItem("tarea", JSON.stringify([...tasks, newTask]));
            setTask("")
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
                        sx={{
                            width: "100%", backgroundColor: "white", "&:hover": {
                                backgroundColor: "pink"
                            }
                        }}
                        value={task}
                        error={validation}
                        helperText={message}


                    />
                </Box>
                <FormFilter setTasks={setTasks} />

            </Box>
            <Box display="flex" justifyContent="center" width="10%" height="50px">
                <Button
                    variant="contained"
                    sx={{ padding: "5px", width: "100%" }}
                    onClick={() => addTarea(task)}
                    value={task}

                >
                    <IoMdSend />
                    enviar
                </Button>
            </Box>

        </Box>
    );
}



