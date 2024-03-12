import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import ContainerList from "./components/ContainerList"
import Box from '@mui/material/Box';

function App() {


  return (
    <>
    <Box minHeight="100vh" backgroundColor="blue" display="flex" flexDirection="column">
    <Header/>
    <Form/>
    <ContainerList sx={{with:30}}/>
    <Footer/>
    </Box>
    </>

  )
}

export default App
