'use client'

import L from 'leaflet'
import MarkerIcon from 'node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {
    return(
        <div>
            <MapContainer style={{
                height: '100vh',
                width: '100vw'
            }} center={[-34.574438, -58.473451]} zoom={20} scrollWheelZoom={false}> 
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[-34.574438, -58.473451]}>
                    <Popup>
                        Acá está tu pastillero.
                    </Popup>
                    </Marker>
       </MapContainer>
        </div>
    )
}

export default Map