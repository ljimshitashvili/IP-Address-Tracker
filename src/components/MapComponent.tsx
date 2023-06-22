import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const MapComponent = () => {
  const center: LatLngExpression = [51.505, -0.09];
  const zoom: number = 13;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
