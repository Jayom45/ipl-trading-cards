"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"

export default function CartSheet() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">{cartCount}</Badge>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Your Cart
            <Badge variant="outline">{cartCount} items</Badge>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-10rem)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow py-10">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
              <p className="text-muted-foreground text-center mb-6">
                Looks like you haven't added any cards to your cart yet.
              </p>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-auto py-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-2">
                    <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                      {item.team && <span className="text-xs text-muted-foreground">{item.team}</span>}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity || 1}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <span className="font-medium">
                          ₹{((item.price || 0) * (item.quantity || 1)).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{cartTotal > 5000 ? "Free" : "₹199"}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{(cartTotal + (cartTotal > 5000 ? 0 : 199)).toLocaleString()}</span>
                </div>
                <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
