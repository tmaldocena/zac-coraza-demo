import { useState, useEffect } from 'react'

export function useSanLuisTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('es-AR', {
        timeZone: 'America/Argentina/San_Luis',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      setTime(t)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}
