
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

  if (
    JSON.stringify(tareas) !== localStorage.getItem("tarea") &&
    !!localStorage.getItem("tarea")
  ) {
    setTareas(JSON.parse(localStorage.getItem("tarea")));
  }


  const handleComplete = (id) => {
    const updatedTareas = tareas.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completado: !tarea.completado };
      }
      return tarea;
    });
    setTareas(updatedTareas);
    localStorage.setItem("tarea", JSON.stringify(updatedTareas));
  }


  const handleDelete = (id) => {
    const filtrarTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(filtrarTareas);
    localStorage.setItem("tarea", JSON.stringify(filtrarTareas));
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
        <ContainerList sx={{ with: 30 }} tareas={tareas} handleDelete={handleDelete} handleComplete={handleComplete} />
        <Footer />
      </Box>
    </>
  );
}

export default App;
