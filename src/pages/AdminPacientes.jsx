import React, { useState } from "react";
import FormularioPacientes from "../Components/admin/FormularioPacientes";
import ListadoPaciente from "../Components/admin/ListadoPaciente";

const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [updateCounter, setUpdateCounter] = useState(0);

  return (
    <>
      <div className="bg-gray-100 mx-auto text-center">
        <h1 className="font-black text-3xl text-center mb-4 mt-3">
          Administrador de Pacientes {""}
          <span className="text-green">Veterinaria</span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-center align-middle">
          <FormularioPacientes setUpdateCounter={setUpdateCounter} />
          <ListadoPaciente pacientes={pacientes} setPacientes={setPacientes} updateCounter={updateCounter} setUpdateCounter={setUpdateCounter} />
        </div>
      </div>
    </>
  );
};

export default AdminPacientes;
