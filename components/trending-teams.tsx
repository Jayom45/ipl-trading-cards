"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

const teams = [
  {
    id: "csk",
    name: "Chennai Super Kings",
    logo: "/placeholder.svg?height=200&width=200",
    color: "from-yellow-500 to-yellow-600",
    cards: 42,
  },
  {
    id: "mi",
    name: "Mumbai Indians",
    logo: "/placeholder.svg?height=200&width=200",
    color: "from-blue-500 to-blue-600",
    cards: 38,
  },
  {
    id: "rcb",
    name: "Royal Challengers Bangalore",
    logo: "/placeholder.svg?height=200&width=200",
    color: "from-red-500 to-red-600",
    cards: 35,
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    logo: "/placeholder.svg?height=200&width=200",
    color: "from-purple-500 to-purple-600",
    cards: 31,
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    logo: "/placeholder.svg?height=200&width=200",
    color: "from-blue-400 to-blue-500",
    cards: 29,
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    logo: "/placeholder.svg?height=200&width=200",
    color: "from-orange-500 to-orange-600",
    cards: 27,
  },
]

export default function TrendingTeams() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {teams.map((team) => (
        <motion.div
          key={team.id}
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={`/products?team=${team.id}`}>
            <Card className="overflow-hidden h-full">
              <div className={`h-2 bg-gradient-to-r ${team.color}`} />
              <CardContent className="p-4 text-center">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <Image src={team.logo || "/placeholder.svg"} alt={team.name} fill className="object-contain" />
                </div>
                <h3 className="font-semibold text-sm">{team.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{team.cards} cards</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
