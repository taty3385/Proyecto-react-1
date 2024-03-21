import React from 'react'
import { Typography, Box, IconButton } from "@mui/material";

import { IoSunny } from "react-icons/io5";


export default function Header() {


  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <Box></Box>
      <Typography variant="h1" gutterBottom color="#FF99C8" textAlign="center">
        Todo list
      </Typography>
      <IconButton aria-label="delete">
        <IoSunny />
      </IconButton>

    </Box>
  )

}
