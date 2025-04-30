import React, { useState } from "react";

const Trainers = () => {
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({ name: "", date: "", time: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleAddClass = () => {
    setClasses([...classes, { ...newClass, students: [] }]);
    setNewClass({ name: "", date: "", time: "" });
  };

  const handleAddStudent = (classIndex, studentName) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].students.push(studentName);
    setClasses(updatedClasses);
  };

  const handleDeleteClass = (classIndex) => {
    const updatedClasses = classes.filter((_, index) => index !== classIndex);
    setClasses(updatedClasses);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Gestión de Clases</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Crear Nueva Clase</h3>
        <input
          type="text"
          name="name"
          placeholder="Nombre de la clase"
          value={newClass.name}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="date"
          name="date"
          value={newClass.date}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="time"
          name="time"
          value={newClass.time}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          onClick={handleAddClass}
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Agregar Clase
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Clases Creadas</h3>
        {classes.map((classItem, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <h4 className="text-lg font-bold">{classItem.name}</h4>
            <p>Fecha: {classItem.date}</p>
            <p>Hora: {classItem.time}</p>
            <h5 className="font-semibold mt-2">Alumnos Inscritos:</h5>
            <ul className="list-disc ml-6">
              {classItem.students.map((student, i) => (
                <li key={i}>{student}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Nombre del alumno"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddStudent(index, e.target.value);
                  e.target.value = "";
                }
              }}
              className="border p-2 rounded mt-2 w-full"
            />
            <button
              onClick={() => handleDeleteClass(index)}
              className="bg-red-600 text-white px-4 py-2 rounded mt-2"
            >
              Eliminar Clase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;