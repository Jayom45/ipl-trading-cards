"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

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

export default function ComparePage() {
  const { toast } = useToast()
  const [compareList, setCompareList] = useState<string[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get compare list from localStorage
    const loadCompareList = () => {
      setIsLoading(true)

      try {
        const storedList = localStorage.getItem("compareList")
        const list = storedList ? JSON.parse(storedList) : []
        setCompareList(list)

        // Get product details for each item
        const productDetails = list
          .map((id: string) => {
            return productData[id] || null
          })
          .filter(Boolean)

        setProducts(productDetails)
      } catch (error) {
        console.error("Error loading compare list:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCompareList()
  }, [])

  const removeFromCompare = (productId: string) => {
    const updatedList = compareList.filter((id) => id !== productId)
    setCompareList(updatedList)
    setProducts(products.filter((product) => product.id !== productId))

    // Update localStorage
    localStorage.setItem("compareList", JSON.stringify(updatedList))

    toast({
      title: "Removed from compare",
      description: "Product has been removed from your compare list.",
    })
  }

  const clearCompare = () => {
    setCompareList([])
    setProducts([])
    localStorage.removeItem("compareList")

    toast({
      title: "Compare list cleared",
      description: "All products have been removed from your compare list.",
    })
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Compare Products</h1>
        <p>Loading...</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Compare Products</h1>
        <p className="text-muted-foreground mb-8">You haven't added any products to compare yet.</p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" /> Browse Products
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Products</h1>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Link>
          </Button>
          {products.length > 0 && (
            <Button variant="destructive" onClick={clearCompare}>
              Clear All
            </Button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 border-b w-1/5">Product</th>
              {products.map((product) => (
                <th key={product.id} className="p-4 border-b">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2"
                      onClick={() => removeFromCompare(product.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Card className="overflow-hidden">
                      <div className="relative aspect-[3/4] w-full max-w-[150px] mx-auto">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-3 text-center">
                        <Badge variant="outline" className="mb-1">
                          {product.team}
                        </Badge>
                        <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                        <p className="font-bold text-primary">₹{product.price.toLocaleString()}</p>
                      </CardContent>
                    </Card>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b font-medium">Team</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 border-b text-center">
                  {product.team}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b font-medium">Player</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 border-b text-center">
                  {product.player
                    ?.split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b font-medium">Rarity</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 border-b text-center">
                  <Badge variant={product.rarity === "Ultra Rare" ? "destructive" : "secondary"}>
                    {product.rarity}
                  </Badge>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b font-medium">Price</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 border-b text-center font-bold">
                  ₹{product.price.toLocaleString()}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b font-medium">Availability</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 border-b text-center">
                  {product.inStock ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Sold Out
                    </Badge>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b font-medium">Description</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 border-b text-sm">
                  {product.description}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium">Action</td>
              {products.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <div className="flex flex-col gap-2">
                    <Button asChild size="sm">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" disabled={!product.inStock}>
                      {product.inStock ? "Add to Cart" : "Sold Out"}
                    </Button>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
