
import List from "./List";


export default function ContainerList({ tasks, setTasks ,setDarkMode, darkMode}) {

  
  return (
    <>
      <List setTasks={setTasks} tasks={tasks} setDarkMode={setDarkMode} darkMode={darkMode} />
      
</>
  );
}
