import React from "react";
import PlanCard from "./PlanCard";
import { planes } from "../../data/planes";

const PlanesGrid = () => {
  return (
    <div className="row ">
      {planes.map((data) => {
        return <PlanCard data={data} key={data.id} />;
      })}
    </div>
  );
};

export default PlanesGrid;
