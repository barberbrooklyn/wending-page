'use client'

import { useEffect, useRef } from 'react'

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null)
  const ceremonyMapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      const iframe = document.createElement('iframe')
      iframe.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d759.5969777212918!2d-76.74257873052736!3d-12.474393689791999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI4JzI3LjgiUyA3NsKwNDQnMzEuMCJX!5e1!3m2!1ses!2sco!4v1736809774127!5m2!1ses!2sco"
      iframe.width = '100%'
      iframe.height = '400'
      iframe.style.border = '0'
      iframe.allowFullscreen = true
      iframe.loading = 'lazy'
      iframe.referrerPolicy = 'no-referrer-when-downgrade'
      
      mapRef.current.innerHTML = ''
      mapRef.current.appendChild(iframe)
    }

    if (ceremonyMapRef.current) {
      const iframe = document.createElement('iframe')
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6075.042980367088!2d-76.73842230519246!3d-12.548033521512144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105741dd5fdeeef%3A0xf9663b73e20c59e!2sPlaya%20Punta%20Yaya%20-%20Las%20Salinas!5e1!3m2!1ses!2sco!4v1736810354983!5m2!1ses!2sco"
      iframe.width = '100%'
      iframe.height = '400'
      iframe.style.border = '0'
      iframe.allowFullscreen = true
      iframe.loading = 'lazy'
      iframe.referrerPolicy = 'no-referrer-when-downgrade'
      
      ceremonyMapRef.current.innerHTML = ''
      ceremonyMapRef.current.appendChild(iframe)
    }
  }, [])

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ubicación de Recepción</h2>
        <div ref={mapRef} className="mb-8"></div>
        <h2 className="text-2xl font-bold mb-4">Lugar de Ceremonia</h2>
        <div ref={ceremonyMapRef}></div>
      </div>
    </section>
  )
}

