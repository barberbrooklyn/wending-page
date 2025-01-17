import React from 'react';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl mb-8 font-serif">Nuestra Historia</h2>
      <div className="space-y-6 slide-up">
        <p className="text-lg leading-relaxed text-justify">
          Desde su niñez, Leidy y John fueron formados para servir a Dios y al prójimo en el lugar donde estuvieran. Sin embargo, jamás imaginaron que sus caminos se cruzarían.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          John, de origen peruano, llevaba muchos años viviendo en Nueva York, Estados Unidos, mientras que Leidy residía en su ciudad natal, Bogotá, Colombia.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Hace unos años, durante un viaje de John a la hermosa ciudad de Bogotá, tuvieron la oportunidad de conocerse. Bastaron solo unas horas para que ambos se dieran cuenta de que había algo especial en sus vidas: un propósito depositado por Dios que les permitió establecer con facilidad confianza, amistad y admiración mutua. Descubrieron, además, que sus sueños estaban trazados con el mismo lápiz en sus corazones.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Con el tiempo, su relación se fortaleció, y juntos tuvieron la oportunidad de visitar varios países de Centroamérica y Sudamérica.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Hoy podemos dar testimonio de que Dios, en su perfecto plan, ha guiado cada paso de nuestro camino. Su fidelidad ha sido inquebrantable, y estamos seguros de que seguirá obrando con amor y propósito de generación en generación.
        </p>
      </div>
      <div className="mt-12">
        <Image
          src="images/gallery/notelopierdas.png"
          alt="Leidy y John juntos"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </section>
  );
}

