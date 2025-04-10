"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

const teams = [
  { id: "csk", name: "Chennai Super Kings" },
  { id: "mi", name: "Mumbai Indians" },
  { id: "rcb", name: "Royal Challengers Bangalore" },
  { id: "kkr", name: "Kolkata Knight Riders" },
  { id: "dc", name: "Delhi Capitals" },
  { id: "srh", name: "Sunrisers Hyderabad" },
  { id: "pbks", name: "Punjab Kings" },
  { id: "rr", name: "Rajasthan Royals" },
]

const rarities = [
  { id: "common", name: "Common" },
  { id: "limited", name: "Limited" },
  { id: "rare", name: "Rare" },
  { id: "ultra-rare", name: "Ultra Rare" },
]

const players = [
  { id: "virat-kohli", name: "Virat Kohli", team: "rcb" },
  { id: "ms-dhoni", name: "MS Dhoni", team: "csk" },
  { id: "rohit-sharma", name: "Rohit Sharma", team: "mi" },
  { id: "jasprit-bumrah", name: "Jasprit Bumrah", team: "mi" },
  { id: "kl-rahul", name: "KL Rahul", team: "pbks" },
  { id: "rishabh-pant", name: "Rishabh Pant", team: "dc" },
  { id: "andre-russell", name: "Andre Russell", team: "kkr" },
  { id: "rashid-khan", name: "Rashid Khan", team: "srh" },
]

const priceRanges = [
  { id: "under-5000", name: "Under ₹5,000", min: 0, max: 5000 },
  { id: "5000-10000", name: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { id: "over-10000", name: "Over ₹10,000", min: 10000, max: 100000 },
]

export default function ProductsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000])
  const [expandedSections, setExpandedSections] = useState<string[]>(["teams", "rarity", "players", "price"])

  // Get current filter values from URL
  const currentTeam = searchParams.get("team")
  const currentRarity = searchParams.get("rarity")
  const currentPlayer = searchParams.get("player")
  const currentMinPrice = searchParams.get("minPrice")
  const currentMaxPrice = searchParams.get("maxPrice")
  const currentSort = searchParams.get("sort")

  // Update active filters based on URL params
  useEffect(() => {
    const filters = []
    if (currentTeam) filters.push(`team:${currentTeam}`)
    if (currentRarity) filters.push(`rarity:${currentRarity}`)
    if (currentPlayer) filters.push(`player:${currentPlayer}`)
    if (currentMinPrice && currentMaxPrice) {
      filters.push(`price:₹${currentMinPrice}-₹${currentMaxPrice}`)
      setPriceRange([Number.parseInt(currentMinPrice), Number.parseInt(currentMaxPrice)])
    }
    setActiveFilters(filters)
  }, [currentTeam, currentRarity, currentPlayer, currentMinPrice, currentMaxPrice])

  const createQueryString = (params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams.toString())

    Object.entries(params).forEach(([name, value]) => {
      if (value === null) {
        newParams.delete(name)
      } else {
        newParams.set(name, value)
      }
    })

    return newParams.toString()
  }

  const handleTeamFilter = (teamId: string) => {
    router.push(
      `${pathname}?${createQueryString({
        team: teamId === currentTeam ? null : teamId,
      })}`,
    )
  }

  const handleRarityFilter = (rarityId: string) => {
    router.push(
      `${pathname}?${createQueryString({
        rarity: rarityId === currentRarity ? null : rarityId,
      })}`,
    )
  }

  const handlePlayerFilter = (playerId: string) => {
    router.push(
      `${pathname}?${createQueryString({
        player: playerId === currentPlayer ? null : playerId,
      })}`,
    )
  }

  const handlePriceFilter = (min: number, max: number) => {
    router.push(
      `${pathname}?${createQueryString({
        minPrice: min.toString(),
        maxPrice: max.toString(),
      })}`,
    )
  }

  const handlePriceRangeFilter = (rangeId: string) => {
    const range = priceRanges.find((r) => r.id === rangeId)
    if (range) {
      const isActive = currentMinPrice === range.min.toString() && currentMaxPrice === range.max.toString()

      if (isActive) {
        router.push(
          `${pathname}?${createQueryString({
            minPrice: null,
            maxPrice: null,
          })}`,
        )
      } else {
        handlePriceFilter(range.min, range.max)
      }
    }
  }

  const handleSortChange = (sortValue: string) => {
    router.push(
      `${pathname}?${createQueryString({
        sort: sortValue,
      })}`,
    )
  }

  const clearFilters = () => {
    router.push(pathname)
  }

  const removeFilter = (filter: string) => {
    const [type, value] = filter.split(":")

    if (type === "team") {
      router.push(`${pathname}?${createQueryString({ team: null })}`)
    } else if (type === "rarity") {
      router.push(`${pathname}?${createQueryString({ rarity: null })}`)
    } else if (type === "player") {
      router.push(`${pathname}?${createQueryString({ player: null })}`)
    } else if (type === "price") {
      router.push(`${pathname}?${createQueryString({ minPrice: null, maxPrice: null })}`)
    }
  }

  const hasActiveFilters = activeFilters.length > 0

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Active Filters</h3>
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
              <X className="mr-1 h-3 w-3" /> Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1 px-2 py-1">
                {filter.split(":")[1]}
                <button onClick={() => removeFilter(filter)} className="ml-1 hover:text-destructive">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div>
        <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections}>
          <AccordionItem value="teams">
            <AccordionTrigger className="text-sm font-medium">Teams</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {teams.map((team) => (
                  <div key={team.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`team-${team.id}`}
                      checked={currentTeam === team.id}
                      onCheckedChange={() => handleTeamFilter(team.id)}
                    />
                    <Label htmlFor={`team-${team.id}`} className="text-sm cursor-pointer">
                      {team.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rarity">
            <AccordionTrigger className="text-sm font-medium">Rarity</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {rarities.map((rarity) => (
                  <div key={rarity.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`rarity-${rarity.id}`}
                      checked={currentRarity === rarity.id}
                      onCheckedChange={() => handleRarityFilter(rarity.id)}
                    />
                    <Label htmlFor={`rarity-${rarity.id}`} className="text-sm cursor-pointer">
                      {rarity.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="players">
            <AccordionTrigger className="text-sm font-medium">Players</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {players.map((player) => (
                  <div key={player.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`player-${player.id}`}
                      checked={currentPlayer === player.id}
                      onCheckedChange={() => handlePlayerFilter(player.id)}
                    />
                    <Label htmlFor={`player-${player.id}`} className="text-sm cursor-pointer">
                      {player.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-1">
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`price-${range.id}`}
                        checked={currentMinPrice === range.min.toString() && currentMaxPrice === range.max.toString()}
                        onCheckedChange={() => handlePriceRangeFilter(range.id)}
                      />
                      <Label htmlFor={`price-${range.id}`} className="text-sm cursor-pointer">
                        {range.name}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="pt-4">
                    <Slider
                      defaultValue={[0, 15000]}
                      value={priceRange}
                      min={0}
                      max={15000}
                      step={500}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="border rounded-md px-2 py-1 text-sm">₹{priceRange[0]}</div>
                    <div className="border rounded-md px-2 py-1 text-sm">₹{priceRange[1]}</div>
                  </div>
                  <Button size="sm" className="w-full" onClick={() => handlePriceFilter(priceRange[0], priceRange[1])}>
                    Apply Price Range
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile filter dialog */}
      <div className="flex items-center justify-between lg:hidden mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-medium">Filters</h2>
          {hasActiveFilters && <Badge variant="secondary">{activeFilters.length}</Badge>}
        </div>

        <div className="flex items-center gap-2">
          <select
            className="border rounded-md px-2 py-1 text-sm bg-background"
            value={currentSort || ""}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>

          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" /> Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFilters.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto">
              <h2 className="text-lg font-medium mb-6">Filters</h2>
              <FilterContent />
              <div className="mt-6 flex gap-2">
                <Button className="flex-1" onClick={() => setMobileFiltersOpen(false)}>
                  Apply Filters
                </Button>
                {hasActiveFilters && (
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Filters</h2>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
              <X className="mr-1 h-3 w-3" /> Clear all
            </Button>
          )}
        </div>
        <Separator className="mb-6" />
        <FilterContent />

        <div className="mt-8">
          <h3 className="text-sm font-medium mb-2">Sort By</h3>
          <select
            className="w-full border rounded-md px-3 py-2 bg-background"
            value={currentSort || ""}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
    </>
  )
}
