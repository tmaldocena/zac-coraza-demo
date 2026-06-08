import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet default icon paths for bundlers (Vite, webpack, etc.)
// @ts-expect-error - needed for bundler compatibility
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// San Luis, Argentina — ZAC San Luis
const POSITION: [number, number] = [-33.31988, -66.32718]

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (instanceRef.current || !mapRef.current) return

    const map = L.map(mapRef.current, {
      center: POSITION,
      zoom: 15,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    L.marker(POSITION).addTo(map)
      .bindPopup('<b>ZAC — Zona de Actividad Comercial</b><br/>Ruta 3, Km 1 · San Luis')

    instanceRef.current = map

    return () => {
      map.remove()
      instanceRef.current = null
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full rounded-xl overflow-hidden"
      style={{ height: '220px' }}
      title="Mapa de ubicación ZAC"
    />
  )
}
