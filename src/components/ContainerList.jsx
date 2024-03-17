
import List from "./List";


export default function ContainerList({ tareas, setTareas }) {

  return (
    <>
      <List setTareas={setTareas} tareas={tareas} />
      
</>
  );
}
