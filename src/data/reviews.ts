export interface Review {
  name: string
  initials: string
  rating: number
  date: string
  text: string
  color: string
}

const reviews: Review[] = [
  {
    name: 'Juan Allende',
    initials: 'JA',
    rating: 5,
    date: 'Enero 2026',
    text: 'Divino lugar, todoooo excelente!!!!! Lo super recomiendoo',
    color: '#003C72',
  },
  {
    name: 'Alejandro Javier Oviedo',
    initials: 'AO',
    rating: 5,
    date: 'Febrero 2026',
    text: 'Q lindo lugar, me encanta!!!!! Todo excelente!!!',
    color: '#2E7D32',
  },
  {
    name: 'Natalia Maras',
    initials: 'NM',
    rating: 5,
    date: 'Mayo 2025',
    text: 'Hermoso espacio. Muy iluminado y moderno. Buenas opciones para arreglar el hogar. La cafeteria Cacao es un éxito',
    color: '#6D4C41',
  },
  {
    name: 'Pablo Pulgar',
    initials: 'PP',
    rating: 5,
    date: 'Febrero 2026',
    text: 'Un lugar donde hay todo lo necesario para la construcción!!!',
    color: '#C62828',
  },
  {
    name: 'Exequiel Halladjian',
    initials: 'EH',
    rating: 5,
    date: 'Enero 2026',
    text: 'Un hermoso complejo en crecimiento',
    color: '#1565C0',
  },
  {
    name: 'Santi Ayala',
    initials: 'SA',
    rating: 5,
    date: 'Mayo 2026',
    text: 'Me encanta este lugar! Se come riquisimo, una atencion rapida y buena, lo recomiendo 100%',
    color: '#E53935',
  },
]

export default reviews
