
import List from "./List";


export default function ContainerList({ tasks, setTasks }) {

  
  return (
    <>
      <List setTasks={setTasks} tasks={tasks} />
      
</>
  );
}
