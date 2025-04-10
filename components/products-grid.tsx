import type { Product } from "@/lib/types"
import ProductCard from "@/components/product-card"

async function getProducts(searchParams: { [key: string]: string | string[] | undefined }): Promise<Product[]> {
  // In a real app, you would fetch from your API with the search params
  // For demo purposes, we'll return mock data

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
    {
      id: "9",
      name: "Virat Kohli Century Moment",
      description: "Card commemorating Virat Kohli's 100th IPL match.",
      team: "RCB",
      player: "virat-kohli",
      price: 11999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Rare",
      inStock: true,
    },
    {
      id: "10",
      name: "MS Dhoni Finisher Card",
      description: "Special card celebrating MS Dhoni's finishing abilities.",
      team: "CSK",
      player: "ms-dhoni",
      price: 8999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Limited",
      inStock: true,
    },
    {
      id: "11",
      name: "Rohit Sharma Captain Card",
      description: "Card featuring Rohit Sharma as MI captain.",
      team: "MI",
      player: "rohit-sharma",
      price: 7999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Common",
      inStock: true,
    },
    {
      id: "12",
      name: "Jasprit Bumrah Yorker King",
      description: "Card showcasing Jasprit Bumrah's yorker skills.",
      team: "MI",
      player: "jasprit-bumrah",
      price: 4999,
      image: "/placeholder.svg?height=400&width=300",
      rarity: "Common",
      inStock: true,
    },
  ]

  let filteredProducts = [...products]

  // Filter by team
  if (searchParams.team) {
    const team = searchParams.team.toString().toUpperCase()
    filteredProducts = filteredProducts.filter((product) => product.team === team)
  }

  // Filter by rarity
  if (searchParams.rarity) {
    const rarity = searchParams.rarity.toString().toLowerCase()
    filteredProducts = filteredProducts.filter((product) => product.rarity?.toLowerCase() === rarity)
  }

  // Filter by player
  if (searchParams.player) {
    const player = searchParams.player.toString()
    filteredProducts = filteredProducts.filter((product) => product.player === player)
  }

  // Filter by price range
  if (searchParams.minPrice && searchParams.maxPrice) {
    const minPrice = Number.parseInt(searchParams.minPrice.toString())
    const maxPrice = Number.parseInt(searchParams.maxPrice.toString())
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice)
  }

  // Sort products
  if (searchParams.sort) {
    const sort = searchParams.sort.toString()

    switch (sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
    }
  }

  return filteredProducts
}

export default async function ProductsGrid({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products = await getProducts(searchParams)

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">Try changing your filters or check back later.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
