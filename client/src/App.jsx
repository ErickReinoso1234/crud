import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-red-500 text-4xl">Home Page</h1>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/task" element={<h1>task Page</h1>} />
        <Route path="/add-task" element={<h1>new Task</h1>} />
        <Route path="/tasks/:id" element={<h1>update Task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
