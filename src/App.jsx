import { useState, useEffect } from 'react';
import { BingMap } from './BingMap';
import './App.css';

function App() {
  const [trucks, setTrucks] = useState([]);
  const [loaded, setisLoaded] = useState(false);

  useEffect(() => {
    fetch(
      'https://data.sfgov.org/resource/rqzj-sfat.json?$select=facilitytype,applicant,location&status=APPROVED&facilitytype=Truck&$where=within_circle(location,37.778008,-122.431272, 5000)'
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((e) => {
          const info = {
            center: {
              longitude: e.location.longitude,
              latitude: e.location.latitude,
            },
            options: {
              title: e.application,
              subTitle: `type:${e.facilitytype}`,
            },
          };
          setTrucks((prev) => {
            return !prev.includes(info) ? [...prev, info] : prev;
          });
          return setisLoaded(true);
        });
      })
      .catch((e) => e);
  }, []);

  return (
    <>
      <div className="App">
        <BingMap pushPins={loaded ? trucks : []} />
      </div>
    </>
  );
}

export default App;
