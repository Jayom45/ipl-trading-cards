"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

// Player images
const playerImages = {
  "1": "/placeholder.svg?height=400&width=300", // Virat Kohli
  "2": "/placeholder.svg?height=400&width=300", // MS Dhoni
  "3": "/placeholder.svg?height=400&width=300", // Rohit Sharma
  "4": "/placeholder.svg?height=400&width=300", // Jasprit Bumrah
}

const featuredCards = [
  {
    id: "1",
    name: "Virat Kohli Signature Edition",
    team: "RCB",
    price: 12999,
    image: playerImages["1"],
    rarity: "Ultra Rare",
    inStock: true,
    isNew: true,
  },
  {
    id: "2",
    name: "MS Dhoni Captain Cool",
    team: "CSK",
    price: 9999,
    image: playerImages["2"],
    rarity: "Rare",
    inStock: true,
    isNew: false,
  },
  {
    id: "3",
    name: "Rohit Sharma Hitman",
    team: "MI",
    price: 8499,
    image: playerImages["3"],
    rarity: "Rare",
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Jasprit Bumrah Gold Edition",
    team: "MI",
    price: 7999,
    image: playerImages["4"],
    rarity: "Limited",
    inStock: false,
    isNew: false,
  },
]

export default function FeaturedCards() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [addingToCart, setAddingToCart] = useState<string | null>(null)

  const handleAddToCart = (card: (typeof featuredCards)[0]) => {
    setAddingToCart(card.id)

    // Simulate a delay for better UX
    setTimeout(() => {
      addToCart(card)
      setAddingToCart(null)

      toast({
        title: "Added to cart!",
        description: `${card.name} has been added to your cart.`,
      })
    }, 600)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredCards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -10 }}
          onHoverStart={() => setHoveredCard(card.id)}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <Card className="overflow-hidden h-full flex flex-col card-shine">
            <div className="relative pt-4 px-4">
              <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                <Badge variant={card.rarity === "Ultra Rare" ? "destructive" : "secondary"}>{card.rarity}</Badge>

                {card.isNew && (
                  <Badge variant="outline" className="bg-green-500 text-white border-green-500 badge-pulse">
                    New
                  </Badge>
                )}
              </div>

              <Link href={`/products/${card.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 cricket-ball-pattern opacity-10"></div>
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    style={{
                      transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
                    style={{
                      opacity: hoveredCard === card.id ? 1 : 0,
                    }}
                  ></div>
                </div>
              </Link>
            </div>
            <CardContent className="flex flex-col flex-grow p-4">
              <div className="flex-grow">
                <Badge variant="outline" className="mb-2">
                  {card.team}
                </Badge>
                <Link href={`/products/${card.id}`}>
                  <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">{card.name}</h3>
                </Link>
                <p className="text-xl font-bold text-primary">₹{card.price.toLocaleString()}</p>
              </div>
              <div className="mt-4">
                {card.inStock ? (
                  <Button className="w-full" onClick={() => handleAddToCart(card)} disabled={addingToCart === card.id}>
                    {addingToCart === card.id ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Adding...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </span>
                    )}
                  </Button>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    Sold Out
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
