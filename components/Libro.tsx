'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Libro.module.css'

const pages = [
  '/images/gallery/hoja1.webp',
  '/images/gallery/hoja2.webp',
]

const Libro: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    } else if (currentPage === pages.length - 1) {
      scrollToRsvp()
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const scrollToRsvp = () => {
    const rsvpForm = document.getElementById('rsvp-form')
    if (rsvpForm) {
      rsvpForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (currentPage === pages.length - 1) {
      const button = document.querySelector(`.${styles.button}:last-child`) as HTMLButtonElement
      if (button) {
        button.textContent = 'Confirmar'
      }
    }
  }, [currentPage])

  return (
    <div className={styles.libroContainer}>
      <div className={styles.book}>
        {pages.map((page, index) => (
          <div
            key={index}
            className={`${styles.page} ${
              index === currentPage ? styles.currentPage :
              index < currentPage ? styles.flippedPage :
              ''
            }`}
            style={{
              zIndex: pages.length - index,
            }}
          >
            <div className={styles.pageContent}>
              <Image
                src={page || "/placeholder.svg"}
                alt={`Página ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <button
          className={styles.button}
          onClick={handleNext}
          disabled={currentPage > pages.length - 1}
        >
          {currentPage === pages.length - 1 ? 'Confirmar' : 'Siguiente'}
        </button>
      </div>
    </div>
  )
}

export default Libro
