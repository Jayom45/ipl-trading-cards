import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 10, 2023</p>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            IPL Cards ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you register for an account, make a purchase,
            sign up for our newsletter, participate in a survey, or otherwise communicate with us.
          </p>
          <p>The types of information we may collect include:</p>
          <ul>
            <li>
              Personal Information: Name, email address, postal address, phone number, and other similar contact
              information.
            </li>
            <li>Account Information: Username, password, and preferences.</li>
            <li>Payment Information: Credit card numbers, banking information, and billing address.</li>
            <li>Transaction Information: Information about purchases or other transactions with us.</li>
            <li>
              Customer Service Information: Information provided in connection with customer service inquiries or
              complaints.
            </li>
            <li>User Content: Information that you provide through product reviews, comments, and feedback.</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">Automatically Collected Information</h3>
          <p>
            When you access our website, we may automatically collect certain information about your device and usage of
            our website, including:
          </p>
          <ul>
            <li>
              Device Information: Computer, mobile device, or other device type, IP address, browser type, operating
              system, and device identifiers.
            </li>
            <li>
              Usage Data: Pages viewed, time spent on pages, links clicked, and other actions taken on our website.
            </li>
            <li>Location Information: General location information based on IP address.</li>
            <li>
              Cookies and Similar Technologies: Information collected through cookies, web beacons, and other tracking
              technologies.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Process and fulfill your orders, including to send order confirmations and invoices.</li>
            <li>Create and manage your account, including to authenticate your identity.</li>
            <li>Provide customer service and respond to your inquiries.</li>
            <li>Send you marketing communications about products, services, offers, and promotions.</li>
            <li>Personalize your experience and deliver content and product offerings relevant to your interests.</li>
            <li>Improve our website, products, and services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            <li>Comply with our legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Sharing Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              With service providers who perform services on our behalf, such as payment processing, shipping, data
              analysis, email delivery, and customer service.
            </li>
            <li>With business partners with whom we jointly offer products or services.</li>
            <li>In connection with a business transaction such as a merger, sale of assets, or acquisition.</li>
            <li>
              To comply with legal obligations, enforce our terms and policies, or protect our rights, property, or
              safety.
            </li>
            <li>With your consent or at your direction.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Your Choices</h2>
          <p>You have certain choices about how we use your information:</p>
          <ul>
            <li>Account Information: You can update your account information by logging into your account settings.</li>
            <li>
              Marketing Communications: You can opt out of receiving marketing emails by following the unsubscribe
              instructions in those emails.
            </li>
            <li>
              Cookies: Most web browsers are set to accept cookies by default. You can usually choose to set your
              browser to remove or reject cookies.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational measures to protect the security of your
            information. However, please be aware that no method of transmission over the Internet or method of
            electronic storage is 100% secure.
          </p>
          <p>
            While we strive to use commercially acceptable means to protect your personal information, we cannot
            guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
          <p>
            We will retain your information for as long as your account is active, as necessary to provide you with the
            services, or as otherwise required for legal purposes.
          </p>
          <p>
            We will take reasonable steps to delete or de-identify personal information when it is no longer needed for
            the purposes for which it was collected.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and you believe your child has provided
            us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to, and maintained on, computers located outside of your state,
            province, country, or other governmental jurisdiction where the data protection laws may differ from those
            in your jurisdiction.
          </p>
          <p>
            If you are located outside India and choose to provide information to us, please note that we transfer the
            information to India and process it there. Your submission of such information represents your agreement to
            that transfer.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: privacy@iplcards.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123 Cricket Lane, Bangalore, Karnataka, India 560001</li>
          </ul>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} IPL Cards. All rights reserved.</p>
          <Button variant="outline" asChild>
            <Link href="/terms">Terms & Conditions</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
