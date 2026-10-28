import { MapContainer, TileLayer, CircleMarker, Popup, GeoJSON } from "react-leaflet";
import Button from '@mui/material/Button';
import data from "./assets/4.5_week.geojson.json";
import plates from "./assets/plate_boundaries.geojson.json";




export const Map = ({setEarthquake}) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[50, 10]}
      zoom={2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
        attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

    <GeoJSON data={plates}/>


      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag **2}
          pathOptions={{ color: "#d7301f" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
            </div>
            <Button id="button" variant="outlined" color='error' size='small' onClick={() => {setEarthquake(d)}}> Button
            </Button>
           
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
