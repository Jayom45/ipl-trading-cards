"use client"

import { useState, useEffect } from "react"
import { SplitSquareVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

export default function CompareButton({ product }: { product: Product }) {
  const { toast } = useToast()
  const [isInCompare, setIsInCompare] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Check if product is in compare list on component mount
  useEffect(() => {
    const compareList = getCompareList()
    setIsInCompare(compareList.some((id) => id === product.id))
  }, [product.id])

  // Get compare list from localStorage
  const getCompareList = () => {
    if (typeof window === "undefined") return []

    try {
      const compareList = localStorage.getItem("compareList")
      return compareList ? JSON.parse(compareList) : []
    } catch (error) {
      console.error("Error loading compare list from localStorage:", error)
      return []
    }
  }

  // Save compare list to localStorage
  const saveCompareList = (compareList: string[]) => {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem("compareList", JSON.stringify(compareList))
    } catch (error) {
      console.error("Error saving compare list to localStorage:", error)
    }
  }

  const toggleCompare = () => {
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const compareList = getCompareList()

      if (isInCompare) {
        // Remove from compare list
        const updatedList = compareList.filter((id) => id !== product.id)
        saveCompareList(updatedList)
        setIsInCompare(false)

        toast({
          title: "Removed from compare",
          description: `${product.name} has been removed from your compare list.`,
        })
      } else {
        // Check if compare list already has 4 items
        if (compareList.length >= 4) {
          toast({
            title: "Compare list full",
            description: "You can compare up to 4 products at a time. Please remove a product first.",
            variant: "destructive",
          })
        } else {
          // Add to compare list
          const updatedList = [...compareList, product.id]
          saveCompareList(updatedList)
          setIsInCompare(true)

          toast({
            title: "Added to compare",
            description: `${product.name} has been added to your compare list.`,
          })
        }
      }

      setIsLoading(false)
    }, 600)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`${isInCompare ? "text-blue-500 border-blue-200 hover:text-blue-600 hover:border-blue-300" : ""}`}
      onClick={toggleCompare}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <SplitSquareVertical className="h-5 w-5" />
      )}
    </Button>
  )
}
