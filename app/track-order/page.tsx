"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Package, Truck, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function TrackOrderPage() {
  const { toast } = useToast()
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!orderNumber.trim()) {
      setError("Please enter an order number")
      return
    }

    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }

    setIsLoading(true)

    // Simulate API call to track order
    setTimeout(() => {
      // For demo purposes, show tracking info for a specific order number
      if (orderNumber === "IPL12345" || orderNumber === "12345") {
        setOrderDetails({
          orderNumber: "IPL12345",
          orderDate: "2023-04-05",
          status: "In Transit",
          estimatedDelivery: "2023-04-12",
          items: [
            { name: "Virat Kohli Signature Edition", quantity: 1, price: 12999 },
            { name: "MS Dhoni Captain Cool", quantity: 1, price: 9999 },
          ],
          shippingAddress: "123 Cricket Lane, Bangalore, Karnataka, 560001",
          trackingNumber: "IND123456789",
          trackingUrl: "#",
          carrier: "Express Delivery",
          timeline: [
            { status: "Order Placed", date: "2023-04-05", time: "10:30 AM", completed: true },
            { status: "Payment Confirmed", date: "2023-04-05", time: "10:35 AM", completed: true },
            { status: "Processing", date: "2023-04-06", time: "09:15 AM", completed: true },
            { status: "Shipped", date: "2023-04-07", time: "02:45 PM", completed: true },
            { status: "In Transit", date: "2023-04-08", time: "11:20 AM", completed: true },
            { status: "Out for Delivery", date: "2023-04-12", time: "", completed: false },
            { status: "Delivered", date: "2023-04-12", time: "", completed: false },
          ],
        })
      } else {
        toast({
          title: "Order not found",
          description:
            "We couldn't find an order with that number and email combination. Please check your information and try again.",
          variant: "destructive",
        })
      }

      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

      {!orderDetails ? (
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="orderNumber" className="text-sm font-medium">
                    Order Number
                  </label>
                  <Input
                    id="orderNumber"
                    placeholder="e.g., IPL12345"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter the email used for your order"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Tracking...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Search className="mr-2 h-4 w-4" /> Track Order
                    </span>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  For demo purposes, use order number "IPL12345" with any email
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <h2 className="text-lg font-medium mb-2">Need Help?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              If you're having trouble tracking your order or have any questions, our customer service team is here to
              help.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Order #{orderDetails.orderNumber}</h2>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(orderDetails.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {orderDetails.status}
                  </span>
                </div>
              </div>

              <Separator className="mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Shipping Address</h3>
                  <p className="text-sm text-muted-foreground">{orderDetails.shippingAddress}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Delivery Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery: {new Date(orderDetails.estimatedDelivery).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Carrier: {orderDetails.carrier}</p>
                  <p className="text-sm text-muted-foreground">Tracking Number: {orderDetails.trackingNumber}</p>
                </div>
              </div>

              <Separator className="mb-6" />

              <h3 className="text-lg font-medium mb-4">Order Timeline</h3>
              <div className="relative">
                {orderDetails.timeline.map((step: any, index: number) => (
                  <div key={index} className="flex mb-6 last:mb-0">
                    <div className="flex flex-col items-center mr-4">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                            : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : index === 4 ? (
                          <Truck className="h-5 w-5" />
                        ) : (
                          <Package className="h-5 w-5" />
                        )}
                      </div>
                      {index < orderDetails.timeline.length - 1 && (
                        <div
                          className={`h-full w-0.5 ${
                            step.completed ? "bg-green-200 dark:bg-green-800" : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        ></div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{step.status}</h4>
                      <p className="text-xs text-muted-foreground">
                        {step.completed ? (
                          <>
                            {step.date} {step.time && `at ${step.time}`}
                          </>
                        ) : (
                          "Estimated: " + step.date
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-medium mb-4">Order Items</h3>
              <div className="space-y-4">
                {orderDetails.items.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{item.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-bold">
                  ₹
                  {orderDetails.items
                    .reduce((total: number, item: any) => total + item.price * item.quantity, 0)
                    .toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => setOrderDetails(null)}>
              Track Another Order
            </Button>
            <Button asChild>
              <Link href="/contact">Need Help?</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
