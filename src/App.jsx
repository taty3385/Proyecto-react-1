import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"
import ContainerList from "./components/ContainerList"
import Box from '@mui/material/Box';




function App() {
  const tareas = [
  { id: crypto.randomUUID(), nombre: "Cocinar" },
  { id: crypto.randomUUID(), nombre: "Trabajar" }
  
];

localStorage.setItem("tarea", JSON.stringify(tareas) || [])


return (
  <>
    <Box minHeight="100vh" backgroundColor="blue" display="flex" flexDirection="column">
      <Header />
      <Form tareas={tareas} />
      <ContainerList sx={{ with: 30 }}  tarea={tareas}  />
      <Footer />
    </Box>
  </>

)
}

export default App
