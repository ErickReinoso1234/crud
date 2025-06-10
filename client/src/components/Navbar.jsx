import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={isAuthenticated ? "/task" : "/"}>
        <h1 className="text-2xl font-bold">TASK MANAGER</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              <Link>Bievenido usuario {user.username}</Link>
            </li>
            <li>
              <Link to="/new-task" className="bg-indigo-500 px-4 py-1">
                Crea una tarea
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                salir
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-indigo-500 px-4 py-1">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="bg-indigo-500 px-4 py-1">
                Register
              </Link>
            </li>
          </>
        )}
        <li></li>
      </ul>
    </nav>
  );
}
export default Navbar;
