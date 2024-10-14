import React, { useState } from 'react';

const AddEmpresa = () => {
  const [nombre, setNombre] = useState('');
  const [sector, setSector] = useState('');
  const [direccion, setDireccion] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaEmpresa = {
      nombre,
      sector,
      direccion,
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
    };

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaEmpresa),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Empresa añadida:', data);
      })
      .catch(error => console.error('Error al añadir empresa:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Empresa</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sector"
        value={sector}
        onChange={(e) => setSector(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Latitud"
        value={latitud}
        onChange={(e) => setLatitud(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitud"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
      />
      <button type="submit">Añadir Empresa</button>
    </form>
  );
};

export default AddEmpresa;
