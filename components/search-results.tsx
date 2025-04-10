import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"

async function searchProducts(query: string): Promise<Product[]> {
  // In a real app, you would fetch from your API with the search query
  // For demo purposes, we'll filter mock data

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const products: Product[] = [
    {
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
    {
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
    {
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
    {
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
    {
      id: "5",
      name: "KL Rahul Captain's Collection",
      description: "Special card featuring PBKS's stylish batsman and captain.",
      team: "PBKS",
      player: "kl-rahul",
      price: 6999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Limited",
      inStock: true,
    },
    {
      id: "6",
      name: "Rishabh Pant Rising Star",
      description: "Card featuring DC's explosive wicketkeeper-batsman.",
      team: "DC",
      player: "rishabh-pant",
      price: 5999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Common",
      inStock: true,
    },
    {
      id: "7",
      name: "Andre Russell Power Hitter",
      description: "Special edition card featuring KKR's explosive all-rounder.",
      team: "KKR",
      player: "andre-russell",
      price: 7499,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Rare",
      inStock: true,
    },
    {
      id: "8",
      name: "Rashid Khan Spin Wizard",
      description: "Card showcasing SRH's premier leg-spinner.",
      team: "SRH",
      player: "rashid-khan",
      price: 6499,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Limited",
      inStock: true,
    },
  ]

  // Convert query to lowercase for case-insensitive search
  const lowercaseQuery = query.toLowerCase()

  // Search in name, description, team, and player
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      (product.description && product.description.toLowerCase().includes(lowercaseQuery)) ||
      (product.team && product.team.toLowerCase().includes(lowercaseQuery)) ||
      (product.player && product.player.toLowerCase().includes(lowercaseQuery)),
  )
}

export default async function SearchResults({ query }: { query: string }) {
  const products = await searchProducts(query)

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">Try searching with different keywords.</p>
      </div>
    )
  }

  return (
    <div>
      <p className="mb-6">Found {products.length} products</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
