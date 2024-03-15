
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContainerList from "./components/ContainerList";
import Box from "@mui/material/Box";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([
    { id: crypto.randomUUID(), nombre: "Cocinar" },
    { id: crypto.randomUUID(), nombre: "Trabajar" },
  ]);

  if (
    JSON.stringify(tareas) !== localStorage.getItem("tarea") &&
    !!localStorage.getItem("tarea")
  ) {
    setTareas(JSON.parse(localStorage.getItem("tarea")));
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
        <ContainerList sx={{ with: 30 }} tareas={tareas}  />
        <Footer />
      </Box>
    </>
  );
}

export default App;
