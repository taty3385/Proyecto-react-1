import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default function Form() {
    return (
        <Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Tarea" variant="outlined" />
            </Box>
            <Box display="flex" justifyContent="center">
            <Button variant="contained">Contained</Button>
            </Box>
        
            
        </Box>
    )
}
