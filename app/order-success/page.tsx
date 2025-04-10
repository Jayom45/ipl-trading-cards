import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>

        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon. You will receive an email
          confirmation with your order details.
        </p>

        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="font-semibold mb-2">Order Information</h2>
          <p className="text-sm text-muted-foreground mb-1">Order #: IPL-{Math.floor(Math.random() * 10000)}</p>
          <p className="text-sm text-muted-foreground">
            Estimated Delivery: {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
