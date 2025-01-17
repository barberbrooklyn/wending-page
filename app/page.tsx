import Hero from '@/components/hero'
import Story from '@/components/story'
import Countdown from '@/components/countdown'
import PhotoGallery from '@/components/photo-gallery'
import Details from '@/components/details'
import ImportantInfo from '@/components/important-info'
import RsvpForm from '@/components/rsvp-form'
import Location from '@/components/location'
import Footer from '@/components/footer'
import { Library } from 'lucide-react'
import Libro from '@/components/Libro'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <Story />
      <Details />
      <Libro />
      <ImportantInfo />
      <PhotoGallery />
      <Location />
      <RsvpForm />
      <Footer />
    </main>
  )
}

