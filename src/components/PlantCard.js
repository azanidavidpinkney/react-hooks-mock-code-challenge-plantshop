import React from "react";

function PlantCard({plant, handleClick}) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {!plant.outOfStock ? (
        <button className="primary" onClick={() => handleClick(plant)} >In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
