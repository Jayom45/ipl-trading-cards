"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/context/cart-context"
import type { Product, WishlistItem } from "@/lib/types"

// Mock product data (in a real app, you would fetch this from an API)
const productData: Record<string, Product> = {
  "1": {
    id: "1",
    name: "Virat Kohli Signature Edition",
    description: "Limited edition card with authentic signature from RCB's star batsman.",
    team: "RCB",
    player: "virat-kohli",
    price: 12999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Ultra Rare",
    inStock: true,
  },
  "2": {
    id: "2",
    name: "MS Dhoni Captain Cool",
    description: "Commemorative card celebrating CSK's legendary captain.",
    team: "CSK",
    player: "ms-dhoni",
    price: 9999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Rare",
    inStock: true,
  },
  "3": {
    id: "3",
    name: "Rohit Sharma Hitman",
    description: "Special edition card featuring MI's captain and opening batsman.",
    team: "MI",
    player: "rohit-sharma",
    price: 8499,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Rare",
    inStock: true,
  },
  "4": {
    id: "4",
    name: "Jasprit Bumrah Gold Edition",
    description: "Gold-trimmed card showcasing MI's premier fast bowler.",
    team: "MI",
    player: "jasprit-bumrah",
    price: 7999,
    image: "/placeholder.svg?height=400&width=300",
    rarity: "Limited",
    inStock: false,
  },
}

export default function WishlistPage() {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get wishlist from localStorage
    const loadWishlist = () => {
      setIsLoading(true)

      try {
        const storedWishlist = localStorage.getItem("wishlist")
        const items = storedWishlist ? JSON.parse(storedWishlist) : []
        setWishlist(items)

        // Get product details for each item
        const productDetails = items
          .map((item: WishlistItem) => {
            return productData[item.productId] || null
          })
          .filter(Boolean)

        setProducts(productDetails)
      } catch (error) {
        console.error("Error loading wishlist:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadWishlist()
  }, [])

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item.productId !== productId)
    setWishlist(updatedWishlist)
    setProducts(products.filter((product) => product.id !== productId))

    // Update localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))

    toast({
      title: "Removed from wishlist",
      description: "Product has been removed from your wishlist.",
    })
  }

  const clearWishlist = () => {
    setWishlist([])
    setProducts([])
    localStorage.removeItem("wishlist")

    toast({
      title: "Wishlist cleared",
      description: "All products have been removed from your wishlist.",
    })
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product)

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        <p>Loading...</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
        <div className="max-w-md mx-auto">
          <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <Heart className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground mb-8">You haven't added any products to your wishlist yet.</p>
          <Button asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Browse Products
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Link>
          </Button>
          {products.length > 0 && (
            <Button variant="destructive" onClick={clearWishlist}>
              Clear All
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-[3/4] w-full">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
              </Link>
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeFromWishlist(product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-4">
              <Badge variant="outline" className="mb-2">
                {product.team}
              </Badge>
              <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">{product.name}</h3>
              </Link>
              <p className="text-xl font-bold text-primary mb-4">₹{product.price.toLocaleString()}</p>

              <Button className="w-full" onClick={() => handleAddToCart(product)} disabled={!product.inStock}>
                {product.inStock ? (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </>
                ) : (
                  "Sold Out"
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
