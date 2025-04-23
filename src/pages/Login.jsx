import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-orange-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Iniciar sesión</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-orange-600 font-semibold hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
