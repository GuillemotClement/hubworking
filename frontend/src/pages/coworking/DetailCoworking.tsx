import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";
export default function DetailCoworking() {
  return (
    <div className='container mx-auto'>
      <p>DetailCoworking</p>
      <div className='w-[400px] h-[400px] mx-auto overflow-hidden'>
        <MapContainer
          center={[48.12, -3.5]}
          zoom={10}
          scrollWheelZoom={false}
          className='w-full h-full'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[48.12, -3.5]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
