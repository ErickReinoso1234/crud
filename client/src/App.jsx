import NewTask from "./pages/NewTas";
import Profile from "./pages/Profile";
import Taskpage from "./pages/Taskpage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/loginPage";
import ProtectorRouter from "./ProtectorRouter";
import RegisterPage from "./pages/registerPage";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectorRouter />}>
                <Route path="/task" element={<Taskpage />} />
                <Route path="/new-task" element={<NewTask />} />
                <Route path="/tasks/:id" element={<NewTask />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
