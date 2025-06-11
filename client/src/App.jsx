import User from "./pages/User";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import Navbar from "./components/Navbar";
import ProtectorRouter from "./ProtectorRouter";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="container mx-auto px-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectorRouter />}>
              <Route path="/user" element={<User />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
