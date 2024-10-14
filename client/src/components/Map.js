import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Inicializar el mapa centrado en Perú
    const map = L.map('map', {
      center: [-9.19, -75.0152], // Coordenadas de Perú
      zoom: 6,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    // Función para determinar el color basado en los sectores principales
    const getColorBasedOnSector = (sector) => {
      switch (sector) {
        case 'Tecnología':
          return 'blue';
        case 'Minería':
          return 'red';
        case 'Agricultura':
          return 'green';
        default:
          return 'gray';
      }
    };

    // Cargar el archivo GeoJSON
    fetch('/data/lima.geojson')
      .then(response => response.json())
      .then(data => {
        const geoJsonLayer = L.geoJson(data, {
          style: function (feature) {
            return { color: getColorBasedOnSector(feature.properties.SectoresPrincipales) };
          },
          onEachFeature: function (feature, layer) {
            layer.bindPopup(`<b>${feature.properties.name}</b><br/>Sectores Principales: ${feature.properties.SectoresPrincipales}`);
          }
        }).addTo(map);
      })
      .catch(error => console.error('Error loading the GeoJSON data: ', error));

    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default Map;
