import { useEffect } from "react";
import CardTask from "../components/CardTask";
import { UseTask } from "../context/TaskContext";

function TaskPage() {
  const { getTasks, tasks } = UseTask();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <h1 className="text-center text-white text-2xl mt-10">
        No hay tareas disponibles
      </h1>
    );

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <CardTask task={task} key={task._id} />
      ))}
    </div>
  );
}
export default TaskPage;
