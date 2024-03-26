import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ContainerList from "./components/ContainerList";
import Box from "@mui/material/Box";
import { useState } from "react";
import './style.css';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const defaultTasks = localStorage.getItem("tarea") ? JSON.parse(localStorage.getItem("tarea")) : [
    { id: crypto.randomUUID(), nombre: "Cocinar", completado: false },
    { id: crypto.randomUUID(), nombre: "Trabajar", completado: false },
  ];

  const [tasks, setTasks] = useState(defaultTasks);



  return (
    <>
      <Box className={darkMode ? 'dark-mode' : ''} sx={{ minHeight: "100vh", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
        <Header  setDarkMode={ setDarkMode} darkMode={darkMode} />
        <Form tasks={tasks} setTasks={setTasks} />
        <ContainerList sx={{ with: 30, display: "flex " }} setTasks={setTasks} tasks={tasks} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer darkMode={darkMode} />
      </Box>
    </>
  );
}

export default App;
