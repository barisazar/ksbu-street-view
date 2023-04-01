import { useContext } from 'react';
import LocationContext from './LocationContext';

const StreetView = () => {
    const { currentLocation, random } = useContext(LocationContext);

    return (
        <>
            <iframe title="KSBU Street View" key={random} src={`http://localhost:8000/pannellum.htm#panorama=http://localhost:8000/data/${currentLocation.image}&autoLoad=true`} style={{ height: '100%', width: '100%' }} />
        </>
    )
}

export default StreetView