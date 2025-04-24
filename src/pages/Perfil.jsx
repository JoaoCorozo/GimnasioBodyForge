import React, { useState } from 'react';

const Perfil = () => {
  const [editando, setEditando] = useState(false);
  const [datos, setDatos] = useState({
    nombre: 'Juan Pérez',
    correo: 'juanperez@email.com',
    telefono: '123456789'
  });

  const [passwords, setPasswords] = useState({
    actual: '',
    nueva: '',
    confirmar: ''
  });

  const clasesReservadas = [
    { id: 1, clase: 'Funcional', fecha: '25/04/2025', hora: '10:00', entrenador: 'Laura Gómez' },
    { id: 2, clase: 'Spinning', fecha: '27/04/2025', hora: '16:00', entrenador: 'Carlos Ruiz' }
  ];

  const handleInputChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <h2 className="text-3xl font-bold text-orange-600">Mi perfil</h2>

      {/* Sección de datos personales */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Datos personales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="nombre" value={datos.nombre} onChange={handleInputChange} disabled={!editando} className="border p-2 rounded" />
          <input type="email" name="correo" value={datos.correo} onChange={handleInputChange} disabled={!editando} className="border p-2 rounded" />
          <input type="tel" name="telefono" value={datos.telefono} onChange={handleInputChange} disabled={!editando} className="border p-2 rounded" />
        </div>
        <button onClick={() => setEditando(!editando)} className="mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
          {editando ? 'Guardar cambios' : 'Editar'}
        </button>
      </div>

      {/* Sección de cambio de contraseña */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Cambiar contraseña</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="password" name="actual" placeholder="Contraseña actual" onChange={handlePasswordChange} className="border p-2 rounded" />
          <input type="password" name="nueva" placeholder="Nueva contraseña" onChange={handlePasswordChange} className="border p-2 rounded" />
          <input type="password" name="confirmar" placeholder="Confirmar nueva contraseña" onChange={handlePasswordChange} className="border p-2 rounded" />
        </div>
        <button className="mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
          Actualizar contraseña
        </button>
      </div>

      {/* Sección de clases reservadas */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">Clases reservadas</h3>
        <table className="w-full table-auto border-collapse text-left">
          <thead>
            <tr className="bg-orange-100">
              <th className="p-2">Clase</th>
              <th className="p-2">Fecha</th>
              <th className="p-2">Hora</th>
              <th className="p-2">Entrenador</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clasesReservadas.map((clase) => (
              <tr key={clase.id} className="border-t">
                <td className="p-2">{clase.clase}</td>
                <td className="p-2">{clase.fecha}</td>
                <td className="p-2">{clase.hora}</td>
                <td className="p-2">{clase.entrenador}</td>
                <td className="p-2">
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Perfil;
