import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"

async function getRelatedProducts(currentProductId: string, team?: string): Promise<Product[]> {
  // In a real app, you would fetch from your API
  // For demo purposes, we'll return mock data

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const products: Product[] = [
    {
      id: "3",
      name: "Rohit Sharma Hitman",
      description: "Special edition card featuring MI's captain and opening batsman.",
      team: "MI",
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
      price: 5999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Common",
      inStock: true,
    },
  ]

  // Filter out the current product
  let filteredProducts = products.filter((product) => product.id !== currentProductId)

  // If team is provided, prioritize products from the same team
  if (team) {
    const teamProducts = filteredProducts.filter((product) => product.team === team)
    const otherProducts = filteredProducts.filter((product) => product.team !== team)

    filteredProducts = [...teamProducts, ...otherProducts]
  }

  // Return at most 4 products
  return filteredProducts.slice(0, 4)
}

export default async function RelatedProducts({
  currentProductId,
  team,
}: {
  currentProductId: string
  team?: string
}) {
  const products = await getRelatedProducts(currentProductId, team)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
