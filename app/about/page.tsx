import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About IPL Cards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2020 by a group of passionate cricket enthusiasts and collectors, IPL Cards has grown to become
            India's premier destination for authentic IPL cricket trading cards.
          </p>
          <p className="text-muted-foreground mb-4">
            What started as a small online community has evolved into a comprehensive platform for collectors, fans, and
            investors who share our passion for the game and its memorabilia.
          </p>
          <p className="text-muted-foreground">
            Our mission is to preserve the legacy of cricket's greatest moments and players through high-quality,
            authenticated collectibles that connect fans to the sport they love.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="IPL Cards team" fill className="object-cover" />
        </div>
      </div>

      <Separator className="my-16" />

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Authenticity Guaranteed</h3>
            <p className="text-muted-foreground">
              Every card in our collection undergoes rigorous authentication by cricket memorabilia experts.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Releases</h3>
            <p className="text-muted-foreground">
              We partner directly with the IPL and teams to create limited edition cards you won't find anywhere else.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collector Community</h3>
            <p className="text-muted-foreground">
              Join thousands of collectors in our community to trade, discuss, and share your passion for cricket cards.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 md:p-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-6">
              Connect with fellow collectors, participate in exclusive events, and get early access to new card
              releases.
            </p>
            <Button asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Community event" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Card trading" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Card collection" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=300" alt="Collector meetup" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Rahul Sharma", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
            { name: "Priya Patel", role: "Head of Authentication", image: "/placeholder.svg?height=300&width=300" },
            { name: "Vikram Singh", role: "Product Manager", image: "/placeholder.svg?height=300&width=300" },
            { name: "Ananya Desai", role: "Community Manager", image: "/placeholder.svg?height=300&width=300" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
