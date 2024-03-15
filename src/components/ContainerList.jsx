
import List from "./List";
import Box from "@mui/material/Box";

export default function ContainerList({ tareas }) {
  return (
    <>
      {tareas.map((tarea) => (
        <Box
          key={tarea.id}
          display="flex"
          justifyContent="center"
          minHeight="300px"
          background="red"
        >
          <List tareas={tarea} />
        </Box>
      ))}
    </>
  );
}
