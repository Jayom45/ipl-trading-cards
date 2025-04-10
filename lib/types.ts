export interface Product {
  id: string
  name: string
  description?: string
  team?: string
  player?: string
  price: number
  image: string
  rarity?: string
  inStock?: boolean
}

export interface WishlistItem {
  productId: string
  dateAdded: string
}

export interface RecentlyViewedItem {
  productId: string
  viewedAt: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  date: string
}
