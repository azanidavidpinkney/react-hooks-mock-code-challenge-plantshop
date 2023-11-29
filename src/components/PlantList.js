import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleInventory}) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} handleClick={handleInventory} />)}
    </ul>
  );
}

export default PlantList;
