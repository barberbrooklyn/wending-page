'use server'

import { revalidatePath } from 'next/cache'

export async function submitRsvp(formData: FormData) {
  const name = formData.get('name')
  const phone = formData.get('phone')
  const attending = formData.get('attending')

  const googleFormsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfbvX4xUuJj85Wz4-b3nRF7mN4URM3uLk11uG7CBloP0TKiFA/formResponse"
  
  const body = new URLSearchParams({
    "entry.1148247342": name as string,
    "entry.649641038": phone as string,
    "entry.35718745": attending as string
  })

  try {
    const response = await fetch(googleFormsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://wendingleidyjohn.vercel.app'
      },
      body: body.toString(),
      mode: 'no-cors' // This is important to bypass CORS issues
    })

    // Since we're using no-cors, we can't actually check the response status
    // We'll assume it's successful if we get here without an error
    revalidatePath('/')
    return { success: true, message: 'Gracias por tu respuesta!' }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    return { success: false, error: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.' }
  }
}

