import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                How do I know the cards are authentic?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  All our cards go through a rigorous authentication process and come with a certificate of
                  authenticity. We partner directly with IPL and teams to ensure legitimacy.
                </p>
                <p>
                  Each card includes a unique holographic seal and QR code that can be scanned to verify its
                  authenticity. Additionally, premium cards like player-signed editions come with photo documentation of
                  the signing event.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">Do you ship internationally?</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  Yes, we ship worldwide. International shipping rates vary by location and can be calculated at
                  checkout.
                </p>
                <p>
                  Standard international shipping typically takes 7-14 business days, while express international
                  shipping takes 3-5 business days. All international orders are fully tracked and insured.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">Can I return or exchange cards?</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  We accept returns within 7 days of delivery if the card is in its original condition and packaging.
                  Special or limited edition cards are non-returnable.
                </p>
                <p>
                  To initiate a return, please contact our customer service team with your order number and reason for
                  return. Once approved, you'll receive return shipping instructions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">How do I track my order?</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  Once your order ships, you'll receive a tracking number via email. You can also track your order in
                  your account dashboard.
                </p>
                <p>
                  If you haven't received a tracking number within 48 hours of your order confirmation (excluding
                  weekends and holidays), please contact our customer service team.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                Do you offer card grading services?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  Yes, we offer professional grading services through our partners. Contact us for more information and
                  pricing.
                </p>
                <p>
                  Our grading service evaluates cards based on corners, edges, surface, centering, and overall
                  appearance. Graded cards are encapsulated in tamper-evident cases with the grade displayed.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                Are the player signatures authentic?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  Absolutely. All signed cards come with a Certificate of Authenticity. We work directly with players
                  and their representatives to ensure all signatures are genuine.
                </p>
                <p>
                  Our authentication process includes photo and video documentation of signing sessions, as well as
                  signature verification by experts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                How should I store my cards to maintain their value?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  We recommend storing your cards in protective sleeves and keeping them in a cool, dry place away from
                  direct sunlight. For valuable cards, consider using hard plastic cases or getting them professionally
                  graded and encapsulated.
                </p>
                <p>
                  Avoid touching the surface of cards with your fingers, as oils from your skin can damage the card over
                  time. Always handle cards by the edges.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">Do you buy or trade cards?</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  Yes, we do buy select cards and offer trade-in options. The value depends on the card's rarity,
                  condition, and current market demand.
                </p>
                <p>
                  To inquire about selling or trading your cards, please contact our team with clear photos and details
                  about your cards. We'll provide a valuation within 48 hours.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">Do you offer gift wrapping?</AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p>
                  Yes, we offer premium gift wrapping services for an additional ₹199. You can select this option during
                  checkout and include a personalized message for the recipient.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium py-4">
                How often do you release new cards?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                <p className="mb-2">
                  We release new card collections at the start of each IPL season. Throughout the season, we also
                  release special edition cards to commemorate significant achievements and milestones.
                </p>
                <p>
                  Subscribe to our newsletter to be the first to know about new releases and to get exclusive early
                  access to limited edition cards.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <div className="bg-muted p-6 rounded-lg sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you couldn't find the answer to your question, please don't hesitate to contact our customer support
              team.
            </p>
            <Button asChild className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>

            <Separator className="my-6" />

            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p className="text-sm text-muted-foreground mb-1">Email: support@iplcards.com</p>
            <p className="text-sm text-muted-foreground mb-1">Phone: +91 98765 43210</p>
            <p className="text-sm text-muted-foreground">Hours: Mon-Fri, 10am-6pm IST</p>
          </div>
        </div>
      </div>
    </div>
  )
}
