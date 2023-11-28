'use client'

import L from 'leaflet'
import { lat, long } from '@/app/ubicacion/route'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {
    return(
        <div>
            <MapContainer style={{
                height: '100vh',
                width: '100vw'
            }} center={[lat, long]} zoom={20} scrollWheelZoom={false}> 
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <Marker icon={
                    new L.Icon({
                        iconUrl: '/marker-icon.png',
                        iconRetinaUrl: '/marker-icon.png',
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: '/marker-shadow.png',
                        shadowSize: [41, 41],
                    })
                } position={[lat, long]}>
                    <Popup>
                        Acá está tu pastillero.
                    </Popup>
                    </Marker>
       </MapContainer>
        </div>
    )
}

export default Map