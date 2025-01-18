import 'react-medium-image-zoom/dist/styles.css';
import Zoom from 'react-medium-image-zoom';

export default function ImportantInfo() {
  const faqs = [
    {
      question: "¿Hay alguna lista de bodas?",
      answer: "Hemos optado por una lluvia de sobres para hacer más especial este momento."
    },
    {
      question: "¿Cuál es el código de vestimenta?",
      answer: "Para facilitar la comprensión de la temática de la boda, hemos decidido mostrarte visualmente cómo podrías vestirte."
    },
    {
      question: "¿Cómo llegar a la fiesta?",
      answer: "La ceremonia se realizará en un lugar perfecto y maravilloso. Para tu comodidad, en esta página web podrás ver en la parte inferior un mapa con la ubicación precisa."
    },
    {
      question: "¿Las mascotas están permitidas?",
      answer: "Por razones logísticas, no se permitirá el ingreso de mascotas."
    },
    {
      question: "Contacto de los organizadores",
      answer: "Para cualquier consulta, pueden contactar al número de WhatsApp +51 929 912 429 (Nancy Villanueva) o +51 944 618 427 (Leidy)."
    }
  ];

  const dressCodeImages = [
    {
      src: "images/gallery/vestimentah1.webp",
      alt: "Ejemplo 1 vestimenta hombres"
    },
    {
      src: "images/gallery/vestimentam3.webp",
      alt: "Ejemplo 1 vestimenta mujeres"
    },
    {
      src: "images/gallery/vestimentah2.webp",
      alt: "Ejemplo 2 vestimenta hombres"
    },
    {
      src: "images/gallery/vestimentam1.webp",
      alt: "Ejemplo 2 vestimenta mujeres"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-spring-yellow/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-serif">Información Útil</h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-serif mb-3 text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-3xl text-center font-serif mb-8">Código de Vestimenta</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dressCodeImages.map((image, index) => (
              <div key={index} className="dress-code-image-container">
                <Zoom>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
