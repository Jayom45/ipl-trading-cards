import Link from "next/link"
import { ArrowLeft, Package, RefreshCw, AlertCircle, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Returns & Exchanges</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5 text-primary" /> Return Policy
            </CardTitle>
            <CardDescription>Our standard return policy</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              We want you to be completely satisfied with your purchase. If you're not, we're here to help.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Returns accepted within 7 days of delivery</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Item must be in original condition and packaging</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Special or limited edition cards are non-returnable unless damaged</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <RefreshCw className="mr-2 h-5 w-5 text-primary" /> Exchange Process
            </CardTitle>
            <CardDescription>How to exchange your items</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Need a different card? We offer exchanges for most products.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Exchanges must be requested within 7 days of delivery</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Exchange for equal or higher value (pay the difference)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Contact customer service to initiate an exchange</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-primary" /> Damaged Items
            </CardTitle>
            <CardDescription>What to do if your item arrives damaged</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">If your item arrives damaged, we'll make it right.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Report damage within 48 hours of delivery</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>Include clear photos of the damage</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>We'll replace the item or provide a full refund</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Return Process</h2>
        <div className="border rounded-lg p-6">
          <ol className="space-y-6">
            <li className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-lg font-semibold mb-2">Contact Customer Service</h3>
                <p className="text-muted-foreground mb-2">
                  Email us at returns@iplcards.com or call +91 98765 43210 to initiate a return. Please include your
                  order number and reason for return.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our customer service team will respond within 24 hours with return authorization and instructions.
                </p>
              </div>
            </li>
            <Separator />
            <li className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-lg font-semibold mb-2">Package Your Return</h3>
                <p className="text-muted-foreground mb-2">
                  Carefully package the item in its original packaging. Include the return authorization form provided
                  by our customer service team.
                </p>
                <p className="text-sm text-muted-foreground">
                  For valuable cards, we recommend using a rigid card protector and bubble wrap to prevent damage during
                  return shipping.
                </p>
              </div>
            </li>
            <Separator />
            <li className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-lg font-semibold mb-2">Ship Your Return</h3>
                <p className="text-muted-foreground mb-2">
                  Ship the package to the address provided in the return instructions. We recommend using a tracked
                  shipping method.
                </p>
                <p className="text-sm text-muted-foreground">
                  Return shipping costs are the responsibility of the customer unless the item is damaged or defective.
                </p>
              </div>
            </li>
            <Separator />
            <li className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-1 flex justify-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-lg font-semibold mb-2">Refund Processing</h3>
                <p className="text-muted-foreground mb-2">
                  Once we receive and inspect your return, we'll process your refund.
                </p>
                <p className="text-sm text-muted-foreground">
                  Refunds typically take 7-14 business days to appear on your original payment method. You'll receive an
                  email confirmation when your refund is processed.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-medium py-4">
              Can I return a card if I change my mind?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Yes, you can return standard cards within 7 days of delivery if you change your mind. The card must be in
              its original condition and packaging. Please note that special or limited edition cards are non-returnable
              unless they arrive damaged or defective.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-medium py-4">Who pays for return shipping?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              For standard returns (change of mind), the customer is responsible for return shipping costs. For damaged,
              defective, or incorrectly shipped items, we'll provide a prepaid return label or reimburse your shipping
              costs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-medium py-4">
              How long does it take to process a refund?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Once we receive your return, it typically takes 1-3 business days to inspect and process. After
              processing, refunds take 7-14 business days to appear on your original payment method, depending on your
              bank or credit card company's policies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-medium py-4">
              Can I exchange for a different card?
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              Yes, we offer exchanges for most products. You can exchange for a card of equal value, or pay the
              difference for a higher-value card. Exchanges must be requested within 7 days of delivery, and the
              original item must be in its original condition.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-lg font-medium py-4">What if my card arrives damaged?</AccordionTrigger>
            <AccordionContent className="pb-4 text-muted-foreground">
              If your card arrives damaged, please contact us within 48 hours of delivery with clear photos of the
              damage. We'll either replace the card or provide a full refund, including shipping costs. We take great
              care in packaging, but occasionally damage can occur during transit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-muted rounded-lg p-8">
        <div className="flex items-center mb-4">
          <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-2xl font-bold">Our Guarantee</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          We stand behind the quality and authenticity of every card we sell. If you're not completely satisfied with
          your purchase, we're here to make it right. Our customer satisfaction is our top priority.
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
