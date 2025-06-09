import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { sigin, errors: loginErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    sigin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {loginErrors?.map((error, i) => (
          <div
            key={i}
            className="bg-red-500 text-white px-4 py-2 rounded-md my-2"
          >
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
        <form
          className="bg-zinc-800 max-w-md p-10 rounded-md"
          onSubmit={onSubmit}
        >
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Correo electrónico"
          />
          {errors.email && (
            <span className="text-red-500">El correo es requerido</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <span className="text-red-500">La Contraseña es requerida</span>
          )}
          <button type="submit">Login</button>
        </form>
        <p className="flex gap-x-2 justify-between">
          No tienes una cuenta aun{" "}
          <Link to="/register" className="text-sky-500">
            Registrate
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
