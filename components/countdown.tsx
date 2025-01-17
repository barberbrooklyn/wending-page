'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

const WEDDING_DATE = new Date('2025-02-15T14:00:00-05:00').getTime()

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = WEDDING_DATE - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-spring-pink/10 to-spring-lavender/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8 font-serif">Cuenta Regresiva para Nuestro Gran Día</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-spring-pink">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">{value}</span>
              </div>
              <span className="mt-2 text-lg md:text-xl capitalize text-gray-600">{unit}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center items-center">
          <Heart className="text-spring-pink w-6 h-6 mr-2 animate-pulse" />
          <p className="text-xl md:text-2xl font-serif">
            15 de Febrero, 2025 - 2:00 PM
          </p>
          <Heart className="text-spring-pink w-6 h-6 ml-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

