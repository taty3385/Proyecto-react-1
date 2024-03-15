
import List from "./List";


export default function ContainerList({ tareas, setTareas }) {
  console.log(tareas);
  return (
    <>
      <List setTareas={setTareas} tareas={tareas} />
      
</>
  );
}
