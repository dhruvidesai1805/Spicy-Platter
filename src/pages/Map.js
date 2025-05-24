import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

const Map = withGoogleMap(() => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const ngoLocations = [
    { lat: 23.036730, lng: 72.522380, name: "Aanchal Foundation" },
    { lat: 23.024610, lng: 72.523690, name: "MANAV KARTAVYA NGO" },
    { lat: 23.026855, lng: 72.509871, name: "You-Need Ngo" },
    { lat: 23.029248, lng: 72.568445, name: "Sanvedana NGO" },
    { lat: 23.007669, lng: 72.536734, name: "Friends Care Foundation" },
    { lat: 23.007669, lng: 72.536734, name: "Agatha Foundation" },
    { lat: 23.038236, lng: 72.556811, name: "Invincible NGO" },
    { lat: 23.056018, lng: 72.630037, name: "Narottam Lalbhai Rural Development fund" },
    { lat: 23.048908, lng: 72.512867, name: "Share Your Warmth NGO" },
  ];

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 23.036730, lng: 72.522380 }}
    >
      {ngoLocations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => setSelectedMarker(location)}
        >
          {selectedMarker === location && (
            <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
              <div>{location.name}</div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
});

export default Map;
