import Map from './Components/Map';
import StreetView from './Components/StreetView';
import LocationContext from './Components/LocationContext';

import './leaflet.css';
import LocationJSON from './LocationData/locations.json';
import { useState } from 'react';

function App() {
  const [random, setRandom] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({
    lat: LocationJSON[0].lat,
    lng: LocationJSON[0].lng,
    name: LocationJSON[0].name,
    desc: LocationJSON[0].desc,
    image: LocationJSON[0].image,
  });

  const locationData = {
    locations: LocationJSON,
    currentLocation: currentLocation,
    setCurrentLocation: setCurrentLocation,
    random: random,
    setRandom: setRandom,
  };

  return (
    <LocationContext.Provider value={locationData}>
      <div className="w-screen flex">
        <div className="h-screen grid place-items-center" style={{ width: '60%' }}>
          <StreetView />
        </div>
        <div className="h-screen" style={{ width: '40%' }}>
          <Map />
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
