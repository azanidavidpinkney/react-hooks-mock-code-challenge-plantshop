import React, { useState , useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantsAPI = "http://localhost:6001/plants"

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(plantsAPI)
    .then(response => response.json())
    .then((data) => setPlants(data))
  }, [])

  function addNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleInventory(plant) {
      const updatedPlants = plants.map(p => p.id !== plant.id ? p : {...p, outOfStock: true})
      setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm plantsAPI={plantsAPI} addNewPlant={addNewPlant}/>
      <Search setFilter={setFilter} />
      <PlantList plants={plants.filter(plant => plant.name.startsWith(filter))} handleInventory={handleInventory} />
    </main>
  );
}

export default PlantPage;
