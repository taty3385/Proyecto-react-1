import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function Header() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Typography variant="h1" gutterBottom color="#FF99C8">
        Todo list
      </Typography>
    </Box>
  )

}
