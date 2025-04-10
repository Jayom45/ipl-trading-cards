import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import ProductReviews from "@/components/product-reviews"
import WishlistButton from "@/components/wishlist-button"
import CompareButton from "@/components/compare-button"

async function getProduct(id: string) {
  // In a real app, you would fetch from your API
  // For demo purposes, we'll return mock data

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const products = [
    {
      id: "1",
      name: "Virat Kohli Signature Edition",
      description:
        "Limited edition card with authentic signature from RCB's star batsman. This card celebrates Virat Kohli's extraordinary career and achievements in the IPL. Each card is individually numbered and comes with a certificate of authenticity.",
      team: "RCB",
      player: "virat-kohli",
      price: 12999,
      images: [
        "/placeholder.svg?height=600&width=450",
        "/placeholder.svg?height=600&width=450",
        "/placeholder.svg?height=600&width=450",
      ],
      rarity: "Ultra Rare",
      inStock: true,
      details: {
        player: "Virat Kohli",
        season: "2023",
        edition: "Signature Series",
        cardNumber: "VK18/100",
        material: "Premium Holographic",
        certification: "IPL Authentic",
      },
      stats: {
        batting: {
          matches: 237,
          runs: 7263,
          average: 37.24,
          strikeRate: 130.02,
          hundreds: 7,
          fifties: 50,
        },
        career: {
          debut: "2008",
          teams: "Royal Challengers Bangalore",
          achievements: "Most runs in a single IPL season (973 in 2016)",
        },
      },
    },
    {
      id: "2",
      name: "MS Dhoni Captain Cool",
      description:
        "Commemorative card celebrating CSK's legendary captain. This special edition card honors MS Dhoni's leadership and success with Chennai Super Kings. Features a holographic finish and embossed details.",
      team: "CSK",
      player: "ms-dhoni",
      price: 9999,
      images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
      rarity: "Rare",
      inStock: true,
      details: {
        player: "MS Dhoni",
        season: "2023",
        edition: "Captain Series",
        cardNumber: "MSD07/250",
        material: "Holographic",
        certification: "IPL Authentic",
      },
      stats: {
        batting: {
          matches: 250,
          runs: 5082,
          average: 38.79,
          strikeRate: 135.92,
          hundreds: 0,
          fifties: 24,
        },
        career: {
          debut: "2008",
          teams: "Chennai Super Kings, Rising Pune Supergiant",
          achievements: "Most matches as captain in IPL history",
        },
      },
    },
    {
      id: "3",
      name: "Rohit Sharma Hitman",
      description:
        "Special edition card featuring MI's captain and opening batsman. This card celebrates Rohit Sharma's explosive batting and leadership for Mumbai Indians.",
      team: "MI",
      player: "rohit-sharma",
      price: 8499,
      images: ["/placeholder.svg?height=600&width=450", "/placeholder.svg?height=600&width=450"],
      rarity: "Rare",
      inStock: true,
      details: {
        player: "Rohit Sharma",
        season: "2023",
        edition: "Hitman Series",
        cardNumber: "RS45/300",
        material: "Holographic",
        certification: "IPL Authentic",
      },
      stats: {
        batting: {
          matches: 243,
          runs: 6211,
          average: 29.58,
          strikeRate: 129.79,
          hundreds: 1,
          fifties: 42,
        },
        career: {
          debut: "2008",
          teams: "Deccan Chargers, Mumbai Indians",
          achievements: "Most IPL titles as captain (5)",
        },
      },
    },
  ]

  const product = products.find((p) => p.id === id)

  if (!product) {
    return null
  }

  return product
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/products"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImageGallery images={product.images} />

        <div>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="mb-2">
              {product.team}
            </Badge>
            <div className="flex gap-2">
              <WishlistButton product={product} />
              <CompareButton product={product} />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(24 reviews)</span>
          </div>

          <p className="text-3xl font-bold text-primary mb-6">₹{product.price.toLocaleString()}</p>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-8">
            <Badge variant={product.rarity === "Ultra Rare" ? "destructive" : "secondary"} className="text-sm">
              {product.rarity}
            </Badge>

            {product.inStock ? (
              <Badge variant="outline" className="text-sm bg-green-50 text-green-700 border-green-200">
                In Stock
              </Badge>
            ) : (
              <Badge variant="outline" className="text-sm bg-red-50 text-red-700 border-red-200">
                Sold Out
              </Badge>
            )}
          </div>

          <div className="space-y-4 mb-8">
            <AddToCartButton product={product} />
          </div>

          <Separator className="my-8" />

          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex-1">
                Player Stats
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Shipping
              </TabsTrigger>
              <TabsTrigger value="authenticity" className="flex-1">
                Authenticity
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4">
              <dl className="space-y-4">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <dt className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</dt>
                    <dd className="text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </TabsContent>
            <TabsContent value="stats" className="pt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Batting Statistics</h3>
                  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.entries(product.stats.batting).map(([key, value]) => (
                      <div key={key} className="border rounded-md p-3 text-center">
                        <dt className="text-xs text-muted-foreground capitalize">{key}</dt>
                        <dd className="text-lg font-semibold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Career Information</h3>
                  <dl className="space-y-2">
                    {Object.entries(product.stats.career).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <dt className="font-medium capitalize">{key}</dt>
                        <dd className="text-muted-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-4">
                <p>Free shipping on all orders above ₹5,000.</p>
                <p>Standard shipping (3-5 business days): ₹199</p>
                <p>Express shipping (1-2 business days): ₹399</p>
                <p>All cards are shipped in protective cases to ensure they arrive in perfect condition.</p>
              </div>
            </TabsContent>
            <TabsContent value="authenticity" className="pt-4">
              <div className="space-y-4">
                <p>Every card comes with a unique holographic authenticity seal and certificate.</p>
                <p>Our authentication process includes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Verification of source and provenance</li>
                  <li>Expert inspection for quality and condition</li>
                  <li>Digital registration in our blockchain database</li>
                  <li>Tamper-proof holographic sealing</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator className="my-16" />

      <ProductReviews productId={product.id} />

      <Separator className="my-16" />

      <section>
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <RelatedProducts currentProductId={product.id} team={product.team} />
      </section>
    </div>
  )
}
