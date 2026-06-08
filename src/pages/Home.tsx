import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'

const AboutSection = lazy(() => import('../components/AboutSection'))
const Directory = lazy(() => import('../components/Directory'))
const ServicesSection = lazy(() => import('../components/Services'))
const NewsSection = lazy(() => import('../components/News'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const Footer = lazy(() => import('../components/Footer'))

function SectionFallback() {
  return <div className="bg-white py-20" />
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col bg-brand-black">
        <Hero />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Directory />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  )
}
