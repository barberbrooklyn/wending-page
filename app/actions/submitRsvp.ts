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
      },
      body: body.toString(),
    })

    if (response.ok) {
      revalidatePath('/') // Revalidate the page to show updated content
      return { success: true }
    } else {
      console.error('Error en la respuesta de Google Forms:', await response.text())
      return { success: false, error: 'Error al enviar el formulario' }
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    return { success: false, error: 'Error al enviar el formulario' }
  }
}

