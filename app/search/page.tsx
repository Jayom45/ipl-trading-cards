import { Suspense } from "react"
import type { Metadata } from "next"
import { Search } from "lucide-react"

import SearchResults from "@/components/search-results"
import ProductsLoading from "@/components/products-loading"

export const metadata: Metadata = {
  title: "Search Results | IPL Cricket Trading Cards",
  description: "Search results for IPL cricket trading cards.",
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = searchParams.q?.toString() || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 flex items-center">
        <Search className="mr-2 h-6 w-6" /> Search Results
      </h1>

      {query ? (
        <>
          <p className="text-muted-foreground mb-8">
            Showing results for: <span className="font-medium text-foreground">"{query}"</span>
          </p>

          <Suspense fallback={<ProductsLoading />}>
            <SearchResults query={query} />
          </Suspense>
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No search query provided</h2>
          <p className="text-muted-foreground">Please enter a search term to find products.</p>
        </div>
      )}
    </div>
  )
}
