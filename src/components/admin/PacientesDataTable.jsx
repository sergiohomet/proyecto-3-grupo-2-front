import React from 'react'
import { pacientes } from '../../helpers/data';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize'

const PacientesDataTable = () => {
    const { width } = useScreenSize()

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const customStyles = {
        headCells: {
            style: {
                fontSize: width > 992 ? '20px' : '15px'
            },
        },
        cells: {
            style: {
                fontSize: '15px',
            },
        },
    };

    const columns = [
        {
            name: 'Nombre',
            selector: (row) => row.name,
            sortable: true,
            sortable: true,
            center: true
        },
        {
            name: 'Apellido',
            selector: (row) => row.lastname,
            sortable: true,
            center: true
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
            center: true
        },
        {
            name: 'Número',
            selector: (row) => row.phone,
            sortable: true,
            center: true
        },
        {
            name: 'Mascota',
            selector: (row) => row.pet,
            sortable: true,
            center: true
        },
        {
            name: 'Especie',
            selector: (row) => row.kind,
            sortable: true,
            center: true
        },
        {
            name: 'Raza',
            selector: (row) => row.breed,
            sortable: true,
            center: true
        }
    ]
    
      return (
        <>
          {pacientes && pacientes.length ? (
            <div className="container rounded-lg p-0 mb-4">
                <DataTable 
                    columns={columns}
                    data={pacientes}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    compact
                    fixedHeader
                    highlightOnHover
                    responsive
                    customStyles={customStyles}
                />
            </div>

          ) : (
            <div>
              <p className="mt-10 text-3xl font-semibold">
                No hay {""}
                <span className="text-indigo-600 font-bold">Pacientes </span>
                disponibles aún
              </p>
              <p className="font-bold text-2xl">Comienza agregandolos</p>
            </div>
          )}
          <Link 
            to={'/pacientes'}
            className="bg-indigo-600 p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded transition-all no-underline">
            {pacientes && pacientes.length ? "Ver Pacientes" : "Agregar Paciente"}
          </Link>
        </>
      );
}

export default PacientesDataTable