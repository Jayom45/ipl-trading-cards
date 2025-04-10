import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 10, 2023</p>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the IPL
            Cards website (the "Service") operated by IPL Cards ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of
            the terms, then you may not access the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Purchases</h2>
          <p>
            If you wish to purchase any product made available through the Service ("Purchase"), you may be asked to
            supply certain information relevant to your Purchase including, without limitation, your name, shipping
            address, phone number, and payment information.
          </p>
          <p>
            You represent and warrant that: (i) you have the legal right to use any payment method(s) in connection with
            any Purchase; and (ii) the information you supply to us is true, correct, and complete.
          </p>
          <p>
            By submitting such information, you grant us the right to provide the information to third parties for
            purposes of facilitating the completion of Purchases.
          </p>
          <p>
            We reserve the right to refuse or cancel your order at any time for certain reasons including but not
            limited to: product availability, errors in the description or price of the product, error in your order, or
            other reasons.
          </p>
          <p>
            We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is
            suspected.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Product Availability and Pricing</h2>
          <p>
            All products are subject to availability. We reserve the right to discontinue any products at any time.
            Prices for our products are subject to change without notice.
          </p>
          <p>
            We shall not be liable to you or to any third-party for any modification, price change, suspension, or
            discontinuance of the product.
          </p>
          <p>
            We cannot confirm the price of a product until you place an order. Despite our best efforts, a small number
            of the products in our catalog may be mispriced. If a product's correct price is higher than our stated
            price, we will, at our discretion, either contact you for instructions before shipping or cancel your order
            and notify you of such cancellation.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Shipping and Delivery</h2>
          <p>
            We will make every effort to ship products within the timeframe specified on our website. However, shipping
            times are estimates and not guarantees. We are not responsible for delays that are beyond our control, such
            as delays due to shipping carrier issues, weather, or other unforeseen circumstances.
          </p>
          <p>
            Risk of loss and title for items purchased from our website pass to you upon delivery of the items to the
            carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Returns and Refunds</h2>
          <p>
            We accept returns within 7 days of delivery if the product is in its original condition and packaging.
            Special or limited edition cards are non-returnable unless damaged or defective.
          </p>
          <p>
            To initiate a return, please contact our customer service team with your order number and reason for return.
            Once approved, you'll receive return shipping instructions.
          </p>
          <p>
            Refunds will be processed within 7-14 business days after we receive and inspect the returned item. Refunds
            will be credited to the original payment method used for the purchase.
          </p>
          <p>
            Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted
            from your refund.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Product Authenticity</h2>
          <p>
            All products sold on our website are guaranteed to be authentic. Each card comes with a Certificate of
            Authenticity and unique identifiers to verify its legitimacy.
          </p>
          <p>
            If you believe you have received a counterfeit product, please contact us immediately with detailed
            information and photographs. We will investigate the matter and take appropriate action, which may include
            providing a replacement or refund.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
            your account on our Service.
          </p>
          <p>
            You are responsible for safeguarding the password that you use to access the Service and for any activities
            or actions under your password, whether your password is with our Service or a third-party service.
          </p>
          <p>
            You agree not to disclose your password to any third party. You must notify us immediately upon becoming
            aware of any breach of security or unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property
            of IPL Cards and its licensors. The Service is protected by copyright, trademark, and other laws of both
            India and foreign countries.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without the prior
            written consent of IPL Cards.
          </p>
          <p>
            All product images, descriptions, and content on our website are the property of IPL Cards or its licensors
            and may not be reproduced, distributed, or used without permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
          <p>
            In no event shall IPL Cards, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
            to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on
            the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of
            your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other
            legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its
            conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <ul>
            <li>Email: legal@iplcards.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123 Cricket Lane, Bangalore, Karnataka, India 560001</li>
          </ul>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} IPL Cards. All rights reserved.</p>
          <Button variant="outline" asChild>
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
