import * as yup from "yup";

export const PACIENTE_SCHEMA = yup.object({

  name: yup
    .string()
    .required("El nombre del propietario es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(41, "El maximo son 41 caracteres"),
  lastname: yup
    .string()
    .required("El nombre del propietario es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(28, "El maximo son 28 caracteres"),
  username: yup
    .string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de correo no valido"
    ),
  phone: yup
    .string()
    .required("El número de telefono es obligatorio")
    .min(10, "El minimo son 10 caracteres")
    .max(10, "El maximo son 10 caracteres"),
  pet: yup
    .string()
    .required("El nombre de la mascota es obligatorio")
    .min(2, "Minimo 2 caracteres")
    .max(10, "Maximo 10 caracteres"),
  kind: yup
    .string()
    .required("La Especie es obligatoria")
    .min(2, "Minimo 2 caracteres")
    .max(10, "Maximo 10 caracteres"),
  breed: yup
    .string()
    .required("La Raza de la mascota es obligatoria")
    .min(2, "Minimo 2 caracteres")
    .max(20, "Maximo 20 caracteres"),
});

export const TURNOS_SCHEMA = yup.object({

  vet: yup.string().required("Seleccione un veterinario"),
  pet: yup
    .string()
    .required("El nombre de la mascota es obligatorio")
    .min(2, "Minimo 2 caracteres")
    .max(10, "Maximo 10 caracteres"),
  date: yup.string().required("Seleccione una fecha"),
  hour: yup.string().required("Seleccione una hora"),
  details: yup.string().required("Los detalles son obligatorios"),
});

export const PLANES_SCHEMA = yup.object({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(41, "El maximo son 41 caracteres"),
  lastname: yup
    .string()
    .required("El apellido es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(28, "El maximo son 28 caracteres"),
  email: yup
    .string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de correo no valido"
    ),
  cellphone: yup
    .string()
    .required("El telefono es obligatorio")
    .min(8, "El minimo son 10 caracteres")
    .max(15, "El maximo son 10 caracteres"),
});

export const LOGIN_SCHEMA = yup.object({
  username: yup
    .string()
    .required("El email es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "El minimo son 2 caracteres")
    .max(20, "El maximo son 28 caracteres")
});

export const CONTACTO_SCHEMA = yup.object({

  name: yup
    .string()
    .required("El nombre del propietario es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(41, "El maximo son 41 caracteres"),
  lastname: yup
    .string()
    .required("El nombre del propietario es obligatorio")
    .min(2, "El minimo son 2 caracteres")
    .max(28, "El maximo son 28 caracteres"),
  username: yup
    .string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de correo no valido"
    ),
  message: yup.string().required('El mensaje es requerido')
});