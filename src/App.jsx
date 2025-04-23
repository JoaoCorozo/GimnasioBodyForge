import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importamos la barra de navegación
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div>
      <Navbar /> {/* Barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;