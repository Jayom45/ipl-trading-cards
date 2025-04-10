import type { Metadata } from "next"
import ProductsPageContent from "@/components/products-page-content"

export const metadata: Metadata = {
  title: "Shop IPL Cricket Trading Cards | Browse Collection",
  description:
    "Browse our exclusive collection of IPL cricket trading cards. Filter by team, player, rarity, and more.",
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <ProductsPageContent searchParams={searchParams} />
}
