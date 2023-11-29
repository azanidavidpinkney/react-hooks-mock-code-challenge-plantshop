import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// App
// |- Header
// |- Plant Page (retrieves plants data from API)
//    |- NewPlantForm
//    |- Search
//    |- PlantList (receives plants data from Page)
//       |- PlantCard (receives plant data from List)

function App() {

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
