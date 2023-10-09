import React from "react";
import { useState } from "react";
import ModalPlan from "./ModalPlan";

const PlanCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  let { destacado } = data;
  let { caracteristicas } = data;
  console.log(data.titulo);
  return (
    <div className="col-12 col-sm-4">
      <div
        className={
          destacado
            ? "card p-3 ms-1 me-1 planCardDestacado"
            : "card p-3 ms-1 me-1 planCard"
        }
      >
        {destacado ? (
          <>
            <h6 className="card-title text-center mt-3 planCardDestacado__titulo">
              {data.titulo}
              <b className="m-0 ms-1">(Recomendado)</b>
            </h6>
          </>
        ) : (
          <h6 className="card-title text-center mt-3 planCard__titulo">
            {data.titulo}
          </h6>
        )}
        <div
          className={
            destacado
              ? "card-body planCardDestacado__caract"
              : "card-body planCard__caract"
          }
        >
          {caracteristicas.map((caracteristica, index) => (
            <div key={index} className="">
              <ul className="d-flex text-start p-0">
                <li className="m-0 ">{caracteristica}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-2">
          <a className="btn btn-primary m-2" onClick={handleShow}>
            Mas informacion
          </a>
        </div>
      </div>
      <div>
        <ModalPlan show={show} setShow={setShow} plan={data} />
      </div>
    </div>
  );
};

export default PlanCard;
