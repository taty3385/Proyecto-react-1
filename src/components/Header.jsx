import React from 'react'
import { Typography, Box, IconButton } from "@mui/material";

import { IoSunny, IoMoon } from "react-icons/io5";


export default function Header({ setDarkMode, darkMode }) {
  console.log(darkMode);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <Box></Box>
      <Typography variant="h1" gutterBottom color="#FF99C8" textAlign="center" style={{ color: darkMode ? "white" : "#FF99C8" }}  >

        Todo list
      </Typography>
      <IconButton aria-label="toggle dark mode" onClick={toggleDarkMode}>
      {darkMode ? <IoMoon style={{ color: "white" }} /> : <IoSunny />}
      </IconButton>

    </Box>
  )

}
