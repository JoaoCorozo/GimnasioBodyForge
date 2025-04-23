import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importamos la barra de navegación
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ClientDashboard from "./pages/ClientDashboard";
import Profile from "./pages/Profile";
import Reservas from "./pages/Reservas";

const App = () => {
  return (
    <div>
      <Navbar /> {/* Barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cliente" element={<ClientDashboard />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </div>
  );
};

export default App;