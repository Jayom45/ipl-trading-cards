import Link from "next/link"
import { ArrowLeft, Truck, Clock, Globe, CreditCard, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-primary" /> Shipping Methods
            </CardTitle>
            <CardDescription>Our available shipping options</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              We offer multiple shipping methods to ensure your cards arrive safely and on time.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Standard Shipping (3-5 business days)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Express Shipping (1-2 business days)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>International Shipping (7-14 business days)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" /> Processing Time
            </CardTitle>
            <CardDescription>How long before your order ships</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              We strive to process and ship your order as quickly as possible.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Orders placed before 2 PM IST are processed the same day</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Orders placed after 2 PM IST are processed the next business day</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Custom or pre-order items may require additional processing time</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5 text-primary" /> International Shipping
            </CardTitle>
            <CardDescription>Shipping to customers worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              We ship to most countries worldwide with reliable tracking and delivery.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>International orders may be subject to customs duties and taxes</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Delivery times vary by destination country</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>All international shipments include tracking</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shipping Rates</h2>
        <Table>
          <TableCaption>Shipping rates effective as of April 2023</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Shipping Method</TableHead>
              <TableHead>Delivery Time</TableHead>
              <TableHead>India</TableHead>
              <TableHead>International</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Standard Shipping</TableCell>
              <TableCell>3-5 business days</TableCell>
              <TableCell>₹199</TableCell>
              <TableCell>₹1,499</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Express Shipping</TableCell>
              <TableCell>1-2 business days</TableCell>
              <TableCell>₹399</TableCell>
              <TableCell>₹2,999</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Free Shipping</TableCell>
              <TableCell>3-5 business days</TableCell>
              <TableCell>Orders above ₹5,000</TableCell>
              <TableCell>Orders above ₹15,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Packaging & Protection</h2>
        <p className="text-muted-foreground mb-6">
          We take great care to ensure your valuable cards arrive in perfect condition. All cards are shipped with the
          following protective measures:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Standard Cards</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-medium mr-2">1.</span>
                <span>Individual penny sleeve for each card</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">2.</span>
                <span>Toploader or Card Saver for rigid protection</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">3.</span>
                <span>Bubble wrap to prevent movement</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">4.</span>
                <span>Cardboard backing for additional rigidity</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">5.</span>
                <span>Secure outer packaging</span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Premium & Signed Cards</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="font-medium mr-2">1.</span>
                <span>Individual penny sleeve for each card</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">2.</span>
                <span>Premium magnetic case or acrylic holder</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">3.</span>
                <span>Custom foam insert to prevent movement</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">4.</span>
                <span>Certificate of Authenticity in protective sleeve</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">5.</span>
                <span>Premium gift box and outer packaging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tracking Your Order</h2>
        <p className="text-muted-foreground mb-6">
          All orders include tracking information so you can monitor your package's journey from our warehouse to your
          door.
        </p>

        <div className="border rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">How to Track Your Order</h3>
          <ol className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="font-medium mr-2">1.</span>
              <div>
                <p className="font-medium text-foreground mb-1">Shipping Confirmation Email</p>
                <p>
                  Once your order ships, you'll receive an email with your tracking number and a link to track your
                  package.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">2.</span>
              <div>
                <p className="font-medium text-foreground mb-1">Account Dashboard</p>
                <p>
                  Log in to your account and visit the "Order History" section to view tracking information for all your
                  orders.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">3.</span>
              <div>
                <p className="font-medium text-foreground mb-1">Contact Customer Service</p>
                <p>
                  If you haven't received tracking information or have questions about your shipment, our customer
                  service team is here to help.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-primary" /> Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              We accept a variety of payment methods to make your shopping experience convenient:
            </p>
            <ul className="space-y-2 text-sm">
              <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
              <li>UPI Payments</li>
              <li>Net Banking</li>
              <li>Wallets (Paytm, PhonePe, Google Pay)</li>
              <li>Cash on Delivery (for orders under ₹10,000)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Shipping Insurance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              For your peace of mind, we offer shipping insurance options:
            </p>
            <ul className="space-y-2 text-sm">
              <li>All orders above ₹5,000 include complimentary shipping insurance</li>
              <li>Optional insurance available for orders under ₹5,000 at ₹99</li>
              <li>Insurance covers loss, theft, or damage during transit</li>
              <li>Claims must be filed within 7 days of delivery (or expected delivery date)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <p className="text-muted-foreground mb-6">
          If you have any questions about shipping, tracking, or delivery, our customer service team is ready to assist
          you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/faq">View FAQs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
