import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/gallery/Hero.webp"
        alt="Leidy y Jhon "
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-6xl md:text-7xl mb-4 font-serif">Leidy & John</h1>
        <p className="text-xl md:text-2xl mb-8">15 de Febrero, 2025</p>
        <div className="inline-block border-2 border-white px-8 py-4">
          <p className="text-2xl md:text-3xl">¡NOS CASAMOS!</p>
        </div>
      </div>
    </section>
  )
}

