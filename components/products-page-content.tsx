"use client"

import { Suspense } from "react"
import ProductsGrid from "@/components/products-grid"
import ProductsFilter from "@/components/products-filter"
import ProductsLoading from "@/components/products-loading"
import RecentlyViewed from "@/components/recently-viewed"

export default function ProductsPageContent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">IPL Cricket Cards</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 flex-shrink-0">
          <ProductsFilter />
        </div>

        <div className="flex-grow">
          <Suspense fallback={<ProductsLoading />}>
            <ProductsGrid searchParams={searchParams} />
          </Suspense>

          <div className="mt-16">
            <RecentlyViewed />
          </div>
        </div>
      </div>
    </div>
  )
}
