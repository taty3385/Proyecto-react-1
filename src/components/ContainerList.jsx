import React from 'react'
import List from './List' 
import Box from '@mui/material/Box';
import { FaBox } from 'react-icons/fa';
export default function ContainerList() {
  return (
    <Box display="flex" justifyContent="center" minHeight="300px" >
        <List/>
    </Box>
  )
}
