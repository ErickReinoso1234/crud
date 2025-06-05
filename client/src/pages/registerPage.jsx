import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerError } = useAuth();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/task");
    }
  }, [isAuthenticated]);
  
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerError.map((error, i) => (
        <div key={i} className="bg-red-500 text-white px-4 py-2 rounded-md">
          {error}
        </div>
      ))}

      <form
        onSubmit={handleSubmit(async (values) => {
          signup(values);
        })}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Nombre de usuario"
        />
        {errors.username && (
          <span className="text-red-500">El usuario es requerido</span>
        )}
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
          type="text"
          {...register("phone", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Teléfono"
        />
        {errors.phone && (
          <span className="text-red-500">El telefono es requerido</span>
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
        <button type="submit">Registrate</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-sky-500">
          Login
        </Link>{" "}
      </p>
    </div>
  );
}
export default RegisterPage;
