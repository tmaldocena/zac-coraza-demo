import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// @ts-expect-error - needed for bundler compatibility
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export interface StoreMapMarker {
  name: string
  cat: string
  local: string
  color: string
  lat: number
  lng: number
}

export default function StoreMap({
  markers,
  center = [-33.31988, -66.32718] as [number, number],
  zoom = 16,
}: {
  markers: StoreMapMarker[]
  center?: [number, number]
  zoom?: number
}) {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (instanceRef.current || !mapRef.current) return

    const map = L.map(mapRef.current, {
      center,
      zoom,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    markers.forEach(m => {
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:20px;height:20px;border-radius:50%;background:${m.color};border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:8px;font-weight:700;">${m.local}</span></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      })

      L.marker([m.lat, m.lng], { icon })
        .addTo(map)
        .bindPopup(`<b>${m.name}</b><br/><span style="color:#666;font-size:12px">${m.cat} · ${m.local}</span>`)
    })

    instanceRef.current = map

    return () => {
      map.remove()
      instanceRef.current = null
    }
  }, [markers, center, zoom])

  return (
    <div
      ref={mapRef}
      className="w-full rounded-xl overflow-hidden"
      style={{ height: '400px' }}
      title="Mapa de locales ZAC"
    />
  )
}
