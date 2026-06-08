import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import BackToTop from './components/BackToTop'

const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const LocalesPage = lazy(() => import('./pages/LocalesPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="min-h-screen bg-brand-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <span className="text-brand-primary font-bold text-sm">ZAC</span>
        </div>
        <div className="w-6 h-6 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-brand-white font-sans antialiased" style={{ fontFamily: "'system-ui','-apple-system','Segoe UI',sans-serif" }}>
      <ScrollToTop />
      <Navbar menuOpen={menuOpen} onToggle={() => setMenuOpen(p => !p)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<div className="animate-fade-in"><Home /></div>} />
          <Route path="/el-polo" element={<div className="animate-fade-in"><AboutPage /></div>} />
          <Route path="/servicios" element={<div className="animate-fade-in"><ServicesPage /></div>} />
          <Route path="/noticias" element={<div className="animate-fade-in"><NewsPage /></div>} />
          <Route path="/contacto" element={<div className="animate-fade-in"><ContactPage /></div>} />
          <Route path="/locales" element={<div className="animate-fade-in"><LocalesPage /></div>} />
          <Route path="*" element={<div className="animate-fade-in"><NotFound /></div>} />
        </Routes>
      </Suspense>

      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
