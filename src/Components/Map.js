import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMapEvents } from 'react-leaflet';
import { useContext } from 'react';
import LocationContext from './LocationContext';

// DEVMODE
function LocationMarker() {
    useMapEvents({
        click(e) {
            console.log(e.latlng.lat, e.latlng.lng);
        },
    })
}
// DEVMODE

const Map = () => {
    const { locations, currentLocation, setCurrentLocation, setRandom, random } = useContext(LocationContext);
    return (
        <MapContainer center={[39.39099978419624, 30.036985874176025]} zoom={18} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                attribution='<div style="display: flex; align-items: center;"><img src="https://tip.ksbu.edu.tr/app/views/panel/images/logo.png" height="20" width="20" alt="" /> Powered by KSBÜ CEng students.</div>'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.map((item, index) => (
                    (item.lat === currentLocation.lat && item.lng === currentLocation.lng) ?
                        <Marker key={index} position={[item.lat, item.lng]} >
                            <Popup>Şuan buradasınız!</Popup>
                        </Marker>
                        :
                        <CircleMarker eventHandlers={{
                            click: (e) => {
                                setRandom(random + 1);
                                setCurrentLocation({ lat: e.latlng.lat, lng: e.latlng.lng, name: "", desc: "", image: item.image });
                            }
                        }} key={index} center={[item.lat, item.lng]} pathOptions={{ fillColor: 'blue' }} radius={2.5} />
                ))
            }
            <LocationMarker />
        </MapContainer>
    )
}

export default Map