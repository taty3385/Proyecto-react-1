
import { useState } from 'react';
import { Box, TextField, Button,MenuItem,FormControl,Select,InputLabel } from '@mui/material';

export default function Form() {

    const [tarea, setTarea] = useState("")

    const handleChange = (e) => {
        console.log(e.target.value);
        setTarea(e.target.value);
    }

    const handleClick = () => {
        console.log(tarea);

    }


    return (
        <Box>
            <Box display="flex">
                <Box component="form" width="50%"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Tarea" variant="outlined" onChange={handleChange} fullWidth="50%" />
                </Box>
                <Box width="50%">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                           
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem >Ten</MenuItem>
                            <MenuItem >Twenty</MenuItem>
                            <MenuItem >Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Button variant="contained" onClick={handleClick}>enviar</Button>
            </Box>


        </Box>
    )
}
