import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Si ya tienes lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-orange-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">BodyForge</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-orange-200">Inicio</Link>
          <Link to="/login" className="text-white hover:text-orange-200">Login</Link>
          <Link to="/register" className="text-white hover:text-orange-200">Registro</Link>
          <Link to="/reservas" className="text-white hover:text-orange-200">Reservas</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu móvil */}
      {isOpen && (
        <div className="md:hidden bg-orange-500 space-y-4 p-4">
          <Link to="/" className="text-white block">Inicio</Link>
          <Link to="/login" className="text-white block">Login</Link>
          <Link to="/register" className="text-white block">Registro</Link>
          <Link to="/reservas" className="text-white block">Reservas</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
