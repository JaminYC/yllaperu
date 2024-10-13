import React from 'react';
import Map from './components/Map';  // Asegúrate de que el componente Map esté correctamente importado

function App() {
  return (
    <div className="App">
      <h1>Mapa Interactivo del Perú</h1>
      <Map />  {/* Componente Map para mostrar el mapa */}
    </div>
  );
}

export default App;
