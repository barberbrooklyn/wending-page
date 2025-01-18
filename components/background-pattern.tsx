// Crea un archivo constants/index.ts
export const WEDDING_DATE = '2025-02-15T15:00:00'
export const VENUE_DETAILS = {
  ceremony: {
    name: 'Iglesia San Pedro',
    address: 'Av. Principal 123, Chilca, Perú',
    time: '3:00 PM'
  },
  reception: {
    name: 'Hacienda Los Girasoles',
    address: 'Carretera Sur km 5, Chilca, Perú',
    time: '5:00 PM'
  }
}

export default function BackgroundPattern() {
  return (
    <div
      className="fixed inset-0 z-10"
      style={{
        backgroundImage: 'url("images/gallery/backverde.svg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover', // Makes image cover the entire container
        opacity: 9.0, // Changed from 6.5 to 0.3 for more transparency
        pointerEvents: 'none'
      }}
    />
  );
}

// En rsvp-form.tsx
import { z } from 'zod'

const formSchema = z.object({
  nombre: z.string().min(2),
  telefono: z.string().min(9),
  asistencia: z.enum(['si', 'no']),
  invitados: z.string().min(1).max(7),
})

// types/index.ts
export interface PhotoGalleryItem {
  id: number
  src: string
  alt: string
}

export interface FormData {
  nombre: string
  telefono: string
  asistencia: 'si' | 'no'
  invitados: string
}

// utils/error-handling.ts
export const handleApiError = (error: unknown) => {
  // Implementar manejo de errores consistente
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    // Configura otros dominios si es necesario
  }
}
