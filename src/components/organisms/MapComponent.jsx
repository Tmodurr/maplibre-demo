import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import classes from './MapComponent.module.css';


const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new maplibregl.Map({
      container: mapContainer.current, // Reference to the map container
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // Example style URL
      center: [-74.006, 40.7128], // Initial map center (Longitude, Latitude) - New York City
      zoom: 10, // Initial zoom level
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className={classes.mapContainer}
    />
  );
};

export default MapComponent;