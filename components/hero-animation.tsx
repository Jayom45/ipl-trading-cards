"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create cricket ball elements
    const createCricketBall = () => {
      const ball = document.createElement("div")
      ball.classList.add("absolute", "rounded-full", "bg-red-500")

      // Random size
      const size = Math.random() * 20 + 10
      ball.style.width = `${size}px`
      ball.style.height = `${size}px`

      // Add stitches to make it look like a cricket ball
      ball.innerHTML = `
        <div class="absolute w-full h-[2px] bg-white top-1/2 left-0 transform -translate-y-1/2"></div>
        <div class="absolute h-full w-[2px] bg-white top-0 left-1/2 transform -translate-x-1/2"></div>
      `

      // Random position
      ball.style.left = `${Math.random() * 100}%`
      ball.style.top = `${Math.random() * 100}%`

      // Random opacity
      ball.style.opacity = `${Math.random() * 0.5 + 0.1}`

      // Add animation
      ball.animate(
        [
          { transform: "translate(0, 0) rotate(0deg)", opacity: 0 },
          { opacity: ball.style.opacity, offset: 0.1 },
          {
            transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg)`,
            opacity: ball.style.opacity,
            offset: 0.8,
          },
          { opacity: 0 },
        ],
        {
          duration: 5000 + Math.random() * 5000,
          easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        },
      )

      container.appendChild(ball)

      // Remove after animation
      setTimeout(() => {
        ball.remove()
      }, 10000)
    }

    // Create cricket bat elements
    const createCricketBat = () => {
      const bat = document.createElement("div")
      bat.classList.add("absolute")

      // Create bat shape
      bat.innerHTML = `
        <div class="relative">
          <div class="w-6 h-24 bg-amber-800 rounded-b-sm"></div>
          <div class="w-12 h-32 bg-amber-700 absolute -top-32 left-1/2 transform -translate-x-1/2 rounded-t-xl"></div>
        </div>
      `

      // Random position
      bat.style.left = `${Math.random() * 100}%`
      bat.style.top = `${Math.random() * 100}%`

      // Random opacity
      bat.style.opacity = `${Math.random() * 0.3 + 0.1}`

      // Add animation
      bat.animate(
        [
          { transform: "translate(0, 0) rotate(0deg)", opacity: 0 },
          { opacity: bat.style.opacity, offset: 0.1 },
          {
            transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`,
            opacity: bat.style.opacity,
            offset: 0.8,
          },
          { opacity: 0 },
        ],
        {
          duration: 8000 + Math.random() * 7000,
          easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        },
      )

      container.appendChild(bat)

      // Remove after animation
      setTimeout(() => {
        bat.remove()
      }, 15000)
    }

    // Create initial elements
    for (let i = 0; i < 10; i++) {
      createCricketBall()
    }

    for (let i = 0; i < 5; i++) {
      createCricketBat()
    }

    // Create new elements periodically
    const ballInterval = setInterval(() => {
      createCricketBall()
    }, 1000)

    const batInterval = setInterval(() => {
      createCricketBat()
    }, 3000)

    return () => {
      clearInterval(ballInterval)
      clearInterval(batInterval)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 stadium-bg opacity-30"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
    </div>
  )
}
