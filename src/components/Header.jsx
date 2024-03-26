import React from 'react'
import { Typography, Box, IconButton } from "@mui/material";
import { IoSunny, IoMoon } from "react-icons/io5";


export default function Header({ setDarkMode, darkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <Box></Box>
      <Typography variant="h1" gutterBottom color="#FF99C8" textAlign="center"  className={darkMode ? 'dark-mode' : ''}  >

        Todo list
      </Typography>
      <IconButton aria-label="toggle dark mode" onClick={toggleDarkMode}>
        {darkMode ? <IoMoon className='dark-mode' /> : <IoSunny />}
      </IconButton>

    </Box>
  )

}
