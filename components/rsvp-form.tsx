'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './phone-input-styles.css'
import { submitRsvp } from '@/app/actions/submitRsvp'

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
  const [error, setError] = useState('');

  const handlePhoneChange = (value: string, country: any) => {
    setSelectedCountry(country.countryCode);
    const numberWithoutCode = value.replace(country.dialCode, '').trim();
    setPhoneNumber(numberWithoutCode);
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('attending', formData.attending);

    try {
      const result = await submitRsvp(formDataToSubmit);
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section id="rsvp-form" className="py-20 px-4 md:px-8 bg-spring-pink/10">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center font-serif">Confirma tu Asistencia</h2>
        
        {submitted ? (
          <div className="text-center">
            {formData.attending === 'Yes, I will attend' ? (
              <p className="text-lg font-semibold">¡Gracias por confirmar tu asistencia! Estamos emocionados de verte en nuestra boda, será un día muy especial para todos 🥳🎉 </p>
            ) : (
              <p className="text-lg font-semibold">Lamentamos que no puedas asistir, pero sabemos que estarás con nosotros en espíritu. ¡ Esperamos verte pronto 😖 !</p>
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
            {error && <p className="text-red-500">{error}</p>}
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

export default RsvpForm

