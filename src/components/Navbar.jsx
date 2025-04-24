import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="BodyForge Logo" className="h-20" />
      </Link>

      <div className="flex items-center gap-4">
        {user.loggedIn && (
          <Link to="/reservas" className="hover:underline">
            Reservas
          </Link>
        )}

        {!user.loggedIn ? (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Registro</Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:underline"
            >
              {user.name}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-40 z-50">
                <Link
                  to="/perfil"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Perfil
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
