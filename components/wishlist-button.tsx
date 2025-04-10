"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

export default function WishlistButton({ product }: { product: Product }) {
  const { toast } = useToast()
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Check if product is in wishlist on component mount
  useEffect(() => {
    const wishlist = getWishlist()
    setIsInWishlist(wishlist.some((item) => item.productId === product.id))
  }, [product.id])

  // Get wishlist from localStorage
  const getWishlist = () => {
    if (typeof window === "undefined") return []

    try {
      const wishlist = localStorage.getItem("wishlist")
      return wishlist ? JSON.parse(wishlist) : []
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error)
      return []
    }
  }

  // Save wishlist to localStorage
  const saveWishlist = (wishlist: any[]) => {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
    } catch (error) {
      console.error("Error saving wishlist to localStorage:", error)
    }
  }

  const toggleWishlist = () => {
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const wishlist = getWishlist()

      if (isInWishlist) {
        // Remove from wishlist
        const updatedWishlist = wishlist.filter((item) => item.productId !== product.id)
        saveWishlist(updatedWishlist)
        setIsInWishlist(false)

        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`,
        })
      } else {
        // Add to wishlist
        const updatedWishlist = [...wishlist, { productId: product.id, dateAdded: new Date().toISOString() }]
        saveWishlist(updatedWishlist)
        setIsInWishlist(true)

        toast({
          title: "Added to wishlist",
          description: `${product.name} has been added to your wishlist.`,
        })
      }

      setIsLoading(false)
    }, 600)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`${isInWishlist ? "text-red-500 border-red-200 hover:text-red-600 hover:border-red-300" : ""}`}
      onClick={toggleWishlist}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <Heart className={`h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} />
      )}
    </Button>
  )
}
