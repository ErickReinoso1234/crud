import { useForm } from "react-hook-form";
import { UseTask } from "../context/TaskContext";
function TaskNew() {
  const { register, handleSubmit } = useForm();
  const { createTask } = UseTask();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
          autoFocus
        />
        <input
          type="text"
          placeholder="descripción"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}
export default TaskNew;
