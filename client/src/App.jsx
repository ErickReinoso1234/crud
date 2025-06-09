import NewTask from "./pages/NewTas";
import Profile from "./pages/Profile";
import Taskpage from "./pages/Taskpage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectorRouter from "./ProtectorRouter";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectorRouter />}>
            <Route path="/task" element={<Taskpage />} />
            <Route path="/add-task" element={<NewTask />} />
            <Route path="/tasks/:id" element={<RegisterPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
