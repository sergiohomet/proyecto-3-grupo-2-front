import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PACIENTE_SCHEMA } from "../../helpers/validationSchema";
import { axiosInstance } from "../../config/axiosInstance";
import { useEffect, useState } from "react";
import Error from "../../hooks/Error";

const FormularioPacientes = ({ setUpdateCounter }) => {
  const [error, setError] = useState({ status: false, message: "" });
  const [load, setLoad] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PACIENTE_SCHEMA),
  });

  const onSubmit = async (data) => {
    try {
      setLoad(true);
      await axiosInstance.post("/paciente", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      reset();
      setUpdateCounter(setUpdateCounter + 1);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setError({ status: true, message: error.response.data.mensaje });
      setTimeout(() => {
        setError({ status: true, message: "" });
      }, 5000);
    }
  };

  return (
    <>
      <div className="w-full md:w-3/4 lg:w-2/5 mx-auto lg:mx-5">
        <h2 className="font-black text-1xl md:text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg text-center">
          Añade pacientes y {""}
          <span className="text-green font-bold">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded-lg py-3 px-3"
        >
          <h5 className="mb-3 font-bold">Datos del propietario</h5>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ejemplo: Nicolas, Matias, etc"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("name")}
            />
            {errors.name?.message && (
              <Error>
                <p>{errors.name.message}</p>
              </Error>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="lastname"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Apellido
            </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Ejemplo: Rodriguez, Navarro, Burgos, etc"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("lastname")}
            />
            {errors.lastname?.message && (
              <Error>
                <p>{errors.lastname.message}</p>
              </Error>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="username"
              placeholder="Ejemplo: correo@correo.com"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("username")}
            />
            {errors.username?.message && (
              <Error>
                <p>{errors.username.message}</p>
              </Error>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Telefono
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Ejemplo: 3813414*** (Sin 0 ni 15)"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("phone")}
            />
            {errors.phone?.message && (
              <Error>
                <p>{errors.phone.message}</p>
              </Error>
            )}
          </div>

          <h5 className="mt-4 font-bold">Datos de la mascota</h5>
          <div className="mb-2">
            <label
              htmlFor="pet"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Mascota
            </label>
            <input
              id="pet"
              type="text"
              name="pet"
              placeholder="Ejemplo: Hook"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("pet")}
            />
            {errors.pet?.message && (
              <Error>
                <p>{errors.pet.message}</p>
              </Error>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="kind"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Especie
            </label>
            <input
              id="kind"
              type="text"
              name="kind"
              placeholder="Ejemplo: Perro, gato, etc"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("kind")}
            />
            {errors.kind?.message && (
              <Error>
                <p>{errors.kind.message}</p>
              </Error>
            )}
          </div>
          <div className="mb-2">
            <label
              htmlFor="breed"
              className="block text-gray-700 uppercase font-bold text-start"
            >
              Raza
            </label>
            <input
              id="breed"
              type="text"
              name="breed"
              placeholder="Ejemplo: Bulldog, sharpei, firulais, etc"
              className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md"
              {...register("breed")}
            />
            {errors.breed?.message && (
              <Error>
                <p>{errors.breed.message}</p>
              </Error>
            )}
            {error.status && (
              <Error>
                <p>{error.message}</p>
              </Error>
            )}
          </div>

          <input
            type="submit"
            className={
              !load
                ? "btn btn-primary w-100 fs-5"
                : "btn btn-primary w-100 fs-5 disabled"
            }
            value={!load ? "Agregar Paciente" : "Cargando..."}
          />
        </form>
      </div>
    </>
  );
};

export default FormularioPacientes;
