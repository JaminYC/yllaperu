import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [-9.19, -75.0152], // Coordenadas de Perú
      zoom: 6,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    // Logica para agregar marcadores y centrar el mapa al clic en Lima
    const limaMarker = L.marker([-12.0464, -77.0428]).addTo(map);
    limaMarker.on('click', function() {
      map.setView([-12.0464, -77.0428], 10); // Ajusta el zoom a Lima
      // Aquí puedes añadir lógica adicional para mostrar datos de empresas
    });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default Map;
