import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedCards from "@/components/featured-cards"
import TrendingTeams from "@/components/trending-teams"
import HeroAnimation from "@/components/hero-animation"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <HeroAnimation />
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Collect the Stars of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                IPL Cricket
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Exclusive trading cards featuring your favorite IPL players and teams. Limited editions, rare finds, and
              authenticated collectibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white"
              >
                <Link href="/products">
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-white hover:bg-white/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-16 container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Cards</h2>
          <Link href="/products" className="text-primary hover:underline flex items-center">
            View all cards <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <FeaturedCards />
      </section>

      {/* Trending Teams Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Trending Teams</h2>
          <TrendingTeams />
        </div>
      </section>

      {/* Collector Benefits */}
      <section className="py-16 container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Why Collect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Cards</h3>
            <p className="text-muted-foreground">Every card is verified and authenticated by our expert team.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Limited Editions</h3>
            <p className="text-muted-foreground">Access to exclusive, limited-run cards you won't find elsewhere.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Collector Community</h3>
            <p className="text-muted-foreground">Join thousands of IPL fans and build your dream collection.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-violet-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Get notified about new card drops, exclusive offers, and collector events.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  )
}
