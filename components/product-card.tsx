"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"
import WishlistButton from "@/components/wishlist-button"
import type { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate a delay for better UX
    setTimeout(() => {
      addToCart(product)
      setIsAdding(false)

      toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your cart.`,
      })
    }, 600)
  }

  // Add to recently viewed
  const addToRecentlyViewed = () => {
    if (typeof window === "undefined") return

    try {
      const recentlyViewed = localStorage.getItem("recentlyViewed")
      const items = recentlyViewed ? JSON.parse(recentlyViewed) : []

      // Remove if already exists
      const filteredItems = items.filter((item: any) => item.productId !== product.id)

      // Add to beginning of array
      const updatedItems = [{ productId: product.id, viewedAt: new Date().toISOString() }, ...filteredItems].slice(
        0,
        10,
      ) // Keep only 10 most recent

      localStorage.setItem("recentlyViewed", JSON.stringify(updatedItems))
    } catch (error) {
      console.error("Error updating recently viewed:", error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col card-shine">
        <div className="relative pt-4 px-4">
          <Badge
            className="absolute top-6 right-6 z-10"
            variant={product.rarity === "Ultra Rare" ? "destructive" : "secondary"}
          >
            {product.rarity}
          </Badge>
          <Link href={`/products/${product.id}`} onClick={addToRecentlyViewed}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <div className="absolute inset-0 cricket-ball-pattern opacity-10"></div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                }}
              ></div>
            </div>
          </Link>

          <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
            <WishlistButton product={product} />
            <Link href={`/products/${product.id}`} onClick={addToRecentlyViewed}>
              <Button variant="outline" size="icon">
                <Eye className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <CardContent className="flex flex-col flex-grow p-4">
          <div className="flex-grow">
            <Badge variant="outline" className="mb-2">
              {product.team}
            </Badge>
            <Link href={`/products/${product.id}`} onClick={addToRecentlyViewed}>
              <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">{product.name}</h3>
            </Link>
            {product.description && (
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
            )}
            <p className="text-xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
          </div>
          <div className="mt-4">
            {product.inStock ? (
              <Button className="w-full" onClick={handleAddToCart} disabled={isAdding}>
                {isAdding ? (
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
  )
}
