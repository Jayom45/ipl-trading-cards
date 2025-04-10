"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import type { Product, RecentlyViewedItem } from "@/lib/types"

// Mock product data (in a real app, you would fetch this from an API)
const productData: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Virat Kohli Signature Edition",
    team: "RCB",
    price: 12999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Ultra Rare",
    inStock: true,
  },
  "2": {
    id: "2",
    name: "MS Dhoni Captain Cool",
    team: "CSK",
    price: 9999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Rare",
    inStock: true,
  },
  "3": {
    id: "3",
    name: "Rohit Sharma Hitman",
    team: "MI",
    price: 8499,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Rare",
    inStock: true,
  },
  "4": {
    id: "4",
    name: "Jasprit Bumrah Gold Edition",
    team: "MI",
    price: 7999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Limited",
    inStock: false,
  },
  "5": {
    id: "5",
    name: "KL Rahul Captain's Collection",
    team: "PBKS",
    price: 6999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Limited",
    inStock: true,
  },
  "6": {
    id: "6",
    name: "Rishabh Pant Rising Star",
    team: "DC",
    price: 5999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Common",
    inStock: true,
  },
  "7": {
    id: "7",
    name: "Andre Russell Power Hitter",
    team: "KKR",
    price: 7499,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Rare",
    inStock: true,
  },
  "8": {
    id: "8",
    name: "Rashid Khan Spin Wizard",
    team: "SRH",
    price: 6499,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Limited",
    inStock: true,
  },
}

export default function RecentlyViewed() {
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedItem[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // Get recently viewed items from localStorage
    const loadRecentlyViewed = () => {
      setIsLoading(true)

      try {
        const storedItems = localStorage.getItem("recentlyViewed")
        const items = storedItems ? JSON.parse(storedItems) : []
        setRecentlyViewed(items)

        // Get product details for each item
        const productDetails = items
          .map((item: RecentlyViewedItem) => {
            return productData[item.productId] || null
          })
          .filter(Boolean)

        setProducts(productDetails)
      } catch (error) {
        console.error("Error loading recently viewed items:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadRecentlyViewed()
  }, [])

  const scrollLeft = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1)
    }
  }

  const scrollRight = () => {
    if (scrollPosition < products.length - 4) {
      setScrollPosition(scrollPosition + 1)
    }
  }

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5" /> Recently Viewed
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-28" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Clock className="mr-2 h-5 w-5" /> Recently Viewed
      </h2>

      <div className="relative">
        {products.length > 4 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10"
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
              onClick={scrollRight}
              disabled={scrollPosition >= products.length - 4}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${scrollPosition * 25}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 p-2">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <Link href={`/products/${product.id}`}>
                    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-3">
                        <Badge variant="outline" className="mb-1 text-xs">
                          {product.team}
                        </Badge>
                        <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
                        <p className="text-sm font-bold text-primary mt-1">₹{product.price.toLocaleString()}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
