import { FaBoxes, FaHeart } from "react-icons/fa";
import{Typography,Box}  from '@mui/material';

export default function Footer() {
  return (
    <Box display="flex" justifyContent="center">
      <Typography>
        Hecho by Tamara Zarate
        <FaHeart />
      </Typography>
    </Box>
  )
}
