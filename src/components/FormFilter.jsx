import React from 'react'
import { useState } from "react";
import { Box, MenuItem, FormControl, Select, InputLabel } from "@mui/material";

export default function FormFilter({ setTasks }) {

    const [filter, setFilter] = useState("Todas");

    const handleChange = (e) => {
        setFilter(e.target.value);


        const tareasFiltradas = JSON.parse(localStorage.getItem("tarea")).filter(
            (tarea) => {
                if (e.target.value === "Incompleto") {
                    return tarea.completado == false;
                } else if (e.target.value === "Completo") {
                    return tarea.completado == true;
                } else {
                    return true;
                }
            }
        );

        setTasks(tareasFiltradas);
    };

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} >
            <Box width="80%">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
                    <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ background: "white" }}
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value="Todas">Todas</MenuItem>
                        <MenuItem value="Completo">Completo</MenuItem>
                        <MenuItem value="Incompleto">Incompleto</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>


    )
}
