export interface Brand {
  name: string
  cat: string
  color: string
  local?: string
  tags?: string[]
}

const allBrands: Record<string, Brand[]> = {
  construccion: [
    { name: 'Acindar', cat: 'Acero y Hierro', color: '#C62828', local: 'L-01', tags: ['Destacado'] },
    { name: 'Weber', cat: 'Morteros', color: '#1565C0', local: 'L-02' },
    { name: 'Bosch', cat: 'Herramientas', color: '#E53935', local: 'L-03', tags: ['Destacado'] },
    { name: 'DeWalt', cat: 'Herramientas', color: '#F9A825', local: 'L-04' },
    { name: 'Makita', cat: 'Herramientas', color: '#00897B', local: 'L-05', tags: ['Popular'] },
    { name: 'Stanley', cat: 'Herramientas', color: '#546E7A', local: 'L-06' },
    { name: 'Isover', cat: 'Aislación', color: '#2E7D32', local: 'L-07' },
    { name: 'Isolant', cat: 'Aislación', color: '#6A1B9A', local: 'L-08' },
    { name: 'Estisol', cat: 'Aislación', color: '#37474F', local: 'L-09' },
    { name: 'Lusqtoff', cat: 'Máquinas', color: '#BF360C', local: 'L-10' },
  ],
  terminaciones: [
    { name: 'Hiper Cerámico', cat: 'Cerámicos', color: '#C8862A', local: 'L-11' },
    { name: 'Neostone', cat: 'Piedras', color: '#455A64', local: 'L-12' },
    { name: 'Colorshop', cat: 'Pinturas', color: '#AD1457', local: 'L-13' },
    { name: 'FV', cat: 'Grifería', color: '#37474F', local: 'L-14' },
    { name: 'Barbieri', cat: 'Sanitarios', color: '#4527A0', local: 'L-15' },
    { name: 'Ambienta', cat: 'Decoración', color: '#2E7D32', local: 'L-16' },
    { name: 'Casa Ceh', cat: 'Decoración', color: '#BF360C', local: 'L-17', tags: ['Nuevo'] },
    { name: 'Bey-ker', cat: 'Revestimientos', color: '#00695C', local: 'L-18' },
    { name: 'Smartbuild', cat: 'Construcción', color: '#1976D2', local: 'L-19' },
  ],
  instalaciones: [
    { name: 'CIL Eléctricos', cat: 'Instalaciones', color: '#F57F17', local: 'L-20' },
    { name: 'QuiroGas', cat: 'Gas', color: '#C8862A', local: 'L-21' },
    { name: 'Tecno Merlo', cat: 'Tecnología', color: '#00897B', local: 'L-22' },
  ],
  gastronomia: [
    { name: 'Café Puntano', cat: 'Cafetería', color: '#6D4C41', local: 'G-01', tags: ['Nuevo', 'Popular'] },
    { name: 'Lo de Filippo', cat: 'Restaurante', color: '#C62828', local: 'G-02', tags: ['Destacado'] },
    { name: 'Club de la Pizza', cat: 'Pizzería', color: '#E65100', local: 'G-03', tags: ['Popular'] },
    { name: "Charlie's Candy", cat: 'Confitería', color: '#AD1457', local: 'G-04', tags: ['Nuevo'] },
    { name: 'Carrefour Maxi', cat: 'Hipermercado', color: '#1565C0', local: 'H-01', tags: ['Destacado'] },
  ],
  servicios: [
    { name: 'Toyota Alianz', cat: 'Automotor', color: '#E53935', local: 'S-01', tags: ['Nuevo'] },
  ],
}

export const filterTabs = [
  { key: 'all', label: 'Todos' },
  { key: 'construccion', label: 'Construcción' },
  { key: 'terminaciones', label: 'Terminaciones' },
  { key: 'instalaciones', label: 'Instalaciones' },
  { key: 'gastronomia', label: 'Gastronomía' },
  { key: 'servicios', label: 'Servicios' },
]

export default allBrands
