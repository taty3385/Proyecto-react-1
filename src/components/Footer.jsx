import { FaHeart, FaLinkedin } from "react-icons/fa";
import { Typography, Box, IconButton } from '@mui/material';
import { MdEmail } from "react-icons/md";

export default function Footer({ darkMode }) {
  return (
    <Box display="flex" justifyContent="space-around" height="100px" alignItems="center">
      <Box></Box>
      <Typography>
        Hecho by Tamara Zarate
        <FaHeart  color="red"/>
      </Typography>
      <Box>
        <IconButton href="mailto:tatyy661@gmail.com">
          {darkMode ? <MdEmail className='dark-mode' /> : <MdEmail />}

        </IconButton>
        <IconButton href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank">
          {darkMode ? <FaLinkedin className='dark-mode' /> : <FaLinkedin color="blue" />}

        </IconButton>
      </Box>
    </Box>
  )
}
