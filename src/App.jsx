
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContainerList from "./components/ContainerList";
import Box from "@mui/material/Box";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([
    { id: crypto.randomUUID(), nombre: "Cocinar", completado: false },
    { id: crypto.randomUUID(), nombre: "Trabajar", completado: false },
  ]);



  const storedTareas = localStorage.getItem("tarea");
  if (storedTareas && JSON.stringify(tareas) !== storedTareas) {
    setTareas(JSON.parse(storedTareas));
  }
  

return (
    <>
      <Box
        minHeight="100vh"
        backgroundColor="blue"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Form tareas={tareas} setTareas={setTareas} />
        <ContainerList sx={{ with: 30, display:"flex "}} setTareas={setTareas} tareas={tareas}/>
        <Footer />
      </Box>
    </>
  );
}

export default App;
