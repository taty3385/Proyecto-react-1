import { FaHeart } from "react-icons/fa";
import { Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box display="flex" justifyContent="center"  height="100px" alignItems="center"  backgroundColor="#D0F4DE">
      <Typography>
        Hecho by Tamara Zarate
        <FaHeart />
      </Typography>
    </Box>
  )
}
