import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Ingrese un email válido.";
    }
    if (!form.password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Iniciando sesión con:", form);
    // Aquí luego se conectará con el backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          Iniciar Sesión
        </h2>

        <label className="block mb-1 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-xl mb-1"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        <label className="block mb-1 text-gray-700">Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-xl mb-1"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-xl hover:bg-orange-600 transition mt-4"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
