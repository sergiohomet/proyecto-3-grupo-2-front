import Turnos from "./Turnos";
import { axiosInstance } from "../../config/axiosInstance";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import TurnoModalUpdate from "./TurnoModalUpdate";

const ListadoTurnos = ({ turnos, setTurno }) => {
  const [show, setShow] = useState(false);
  const [turnoId, setTurnoId] = useState(null);

  const handleClose = () => {
    setShow(false);
    setTurnoId(null);
  };

  const handleShow = () => setShow(true);

  const handleUpdate = (_id) => {
    setTurnoId(_id);
    handleShow();
  };

  const handleDelete = async (_id) => {
    try {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Este es un cambio que no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosInstance.delete(`/turno/${_id}`);
          setTurno((newData) => newData.filter((turno) => turno._id !== _id));
          Swal.fire("Eliminado!", "El turno fue eliminado", "success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadTurnos = async () => {
    try {
      const response = await axiosInstance.get("/turnos");
      const { data } = response;
      const { turnos } = data;
      setTurno(turnos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTurnos();
  }, [setTurno]);

  return (
    <>
      <div className="md:w-3/4 lg:w-1/2 md:h-screen overflow-y-scroll mt-3 md:mt-0 mx-auto">
        {turnos && turnos.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado turnos</h2>

            <p className="text-lg">
              Administra los {""}
              <span className="text-green font-bold text-xl">turnos</span>
            </p>

            {turnos.map((turno, index) => (
              <Turnos
                key={turno._id || index}
                turno={turno}
                onDelete={() => handleDelete(turno._id)}
                handleUpdate={() => handleUpdate(turno._id)}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Turnos</h2>

            <p className="text-lg mt-5 mb-5">
              Comienza agregado turnos {""}
              <span className="text-green font-bold text-xl">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        )}
        <TurnoModalUpdate
          show={show}
          handleClose={handleClose}
          turnoId={turnoId}
          onUpdate={(updatedTurno) => {
            const updatedTurnos = turnos.map((turno) =>
              turno._id === turnoId ? updatedTurno : turno
            );
            setTurno(updatedTurnos);
          }}
        />
      </div>
    </>
  );
};

export default ListadoTurnos;
