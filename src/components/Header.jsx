import React from 'react'
import { Typography, Box, IconButton } from "@mui/material";
import { IoSunny, IoMoon } from "react-icons/io5";



export default function Header({ setDarkMode, darkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom:"20px" }}>
      <Box></Box>
      <Typography variant="h1" textAlign="center" sx={{ color: darkMode ? 'red' : '#FF99C8' }} fontFamily="Times New Roman"  >
        Todo list
      </Typography>
      <IconButton aria-label="toggle dark mode" onClick={toggleDarkMode}>
        {darkMode ? <IoMoon className='dark-mode' /> : <IoSunny color='yellow' />}
      </IconButton>

    </Box>
  )

}
