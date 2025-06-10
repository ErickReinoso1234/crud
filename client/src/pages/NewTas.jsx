import { useEffect } from "react";
import utc from "dayjs/plugin/utc";
import { useForm } from "react-hook-form";
import { UseTask } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskNew() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, upDateTask } = UseTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  });

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      upDateTask(params.id, {
        ...data,
        date: dayjs.utc(data.date).format(),
      });
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format(),
      });
    }
    navigate("/task");
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-8 rounded-md mx-auto mt-10 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {params.id ? "Editar tarea" : "Nueva tarea"}
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-white mb-1">
            Título
          </label>
          <input
            type="text"
            id="title"
            placeholder="Escribe el título"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-white mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            placeholder="Escribe la descripción"
            rows="4"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="date" className="block text-white mb-1">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md font-semibold"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
export default TaskNew;
