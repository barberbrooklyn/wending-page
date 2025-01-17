'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './phone-input-styles.css'

const americanCountries = [
  'us', 'ca', 'mx', 'br', 'ar', 'co', 'pe', 've', 'cl', 'ec', 'gt', 'cu', 'ht', 
  'bo', 'do', 'hn', 'py', 'ni', 'sv', 'cr', 'pa', 'uy', 'jm', 'tt', 'gy', 'sr', 
  'bz', 'bb', 'bs', 'ag', 'dm', 'lc', 'vc', 'gd', 'kn'
] 

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: ''
  });

  const [selectedCountry, setSelectedCountry] = useState('mx');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (value: string, country: any) => {
    setSelectedCountry(country.countryCode);
    // Extraer solo el número sin el código de país
    const numberWithoutCode = value.replace(country.dialCode, '').trim();
    setPhoneNumber(numberWithoutCode);
    // Guardar el número completo en el formData (con código de país para el envío)
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfbvX4xUuJj85Wz4-b3nRF7mN4URM3uLk11uG7CBloP0TKiFA/formResponse";
    const formBody = new URLSearchParams({
      "entry.1148247342": formData.name,
      "entry.649641038": formData.phone,
      "entry.35718745": formData.attending
    });

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });
      if (response) {
        setSubmitted(true);
        alert('RSVP submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    }
  };

  return (
    <section id="rsvp-form" className="py-20 px-4 md:px-8 bg-spring-pink/10">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-serif">Confirma tu Asistencia</h2>
        
        {submitted ? (
          <div className="text-center">
            {formData.attending === 'Yes, I will attend' ? (
              <p className="text-lg font-semibold">¡Gracias por confirmar tu asistencia! Estamos emocionados de verte en nuestra boda.</p>
            ) : (
              <p className="text-lg font-semibold">Lamentamos que no puedas asistir, pero sabemos que estarás con nosotros en espíritu. ¡Esperamos verte pronto!</p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Nombre Completo</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">Teléfono</label>
              <div className="flex gap-4 items-center">
                <div className="w-[120px]">
                  <PhoneInput
                    country={selectedCountry}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onlyCountries={americanCountries}
                    containerClass="phone-select-container"
                    buttonClass="phone-select-button"
                    inputClass="phone-select-input"
                    dropdownClass="phone-select-dropdown"
                    enableSearch={false}
                    disableSearchIcon={true}
                  />
                </div>
                <input
                  type="tel"
                  className="flex-1 p-2 border rounded"
                  placeholder="Número de teléfono"
                  value={phoneNumber}
                  onChange={(e) => {
                    const newNumber = e.target.value;
                    setPhoneNumber(newNumber);
                    setFormData(prev => ({
                      ...prev,
                      phone: newNumber
                    }));
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2">¿Asistirás?</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.attending}
                onChange={(e) => setFormData({...formData, attending: e.target.value})}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Yes, I will attend">Sí, asistiré</option>
                <option value="No, I will not attend">No podré asistir</option>
              </select>
            </div>
            <Button
              type="submit"
              variant="outline"
              size="icon"
              className="w-full bg-spring-lavender hover:bg-spring-lavender/80 text-gray-800 font-bold py-3 px-6 rounded transition-colors"
            >
              Confirmar
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

export default RsvpForm;