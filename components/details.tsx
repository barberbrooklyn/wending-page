export default function Details() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-serif text-white">Detalles</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center slide-up text-white">
            <h3 className="text-2xl mb-4 font-serif">Ceremonia</h3>
            <p className="mb-2">15 de Febrero, 2025</p>
            <p className="mb-2">3:00 PM</p>
            <p className="mb-2">Frente al Mar, playa en Chilca </p>
            <p>Encontrarás la ubicación exacta más adelante 🗺️</p>
          </div>
          <div className="text-center slide-up text-white">
            <h3 className="text-2xl mb-4 font-serif">Recepción</h3>
            <p className="mb-2">15 de Febrero, 2025</p>
            <p className="mb-2">6:00 PM</p>
            <p className="mb-2">Casa Hogar Jireh Chlica</p>
            <p className="mb-4">Encontrarás la ubicación exacta más adelante 🗺️</p>
          </div>
          <p className="text-white text-center col-span-2">
            ¡No olvides confirmar tu asistencia!
          </p>
        </div>
      </div>
    </section>
  );
}
