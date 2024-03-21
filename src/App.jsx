import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContainerList from "./components/ContainerList";
import Box from "@mui/material/Box";
import { useState } from "react";
import './style.css';



function App() {

  const defaultTasks = localStorage.getItem("tarea") ? JSON.parse(localStorage.getItem("tarea")) : [
    { id: crypto.randomUUID(), nombre: "Cocinar", completado: false },
    { id: crypto.randomUUID(), nombre: "Trabajar", completado: false },
  ];

  const [tasks, setTasks] = useState(defaultTasks);


  return (
    <>
      <Box
        minHeight="100vh"
        backgroundColor="white"
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Form tasks={tasks} setTasks={setTasks} />
        <ContainerList sx={{ with: 30, display: "flex " }} setTasks={setTasks} tasks={tasks} />
        <Footer />
      </Box>
    </>
  );
}

export default App;
