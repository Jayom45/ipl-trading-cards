import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: April 10, 2023</p>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            This Cookie Policy explains how IPL Cards ("we", "us", or "our") uses cookies and similar technologies to
            recognize you when you visit our website at iplcards.com ("Website"). It explains what these technologies
            are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, IPL Cards) are called "first-party cookies". Cookies set by
            parties other than the website owner are called "third-party cookies". Third-party cookies enable
            third-party features or functionality to be provided on or through the website (e.g., advertising,
            interactive content, and analytics). The parties that set these third-party cookies can recognize your
            computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary"
            cookies. Other cookies also enable us to track and target the interests of our users to enhance the
            experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and
            other purposes. This is described in more detail below.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Types of cookies we use</h2>
          <p>
            The specific types of first and third-party cookies served through our Website and the purposes they perform
            are described below:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Website and to use
            some of its features, such as access to secure areas. Because these cookies are strictly necessary to
            deliver the Website, you cannot refuse them without impacting how our Website functions.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our Website but are non-essential to
            their use. However, without these cookies, certain functionality may become unavailable.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our
            Website is being used or how effective our marketing campaigns are, or to help us customize our Website for
            you in order to enhance your experience.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Advertising Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some
            cases selecting advertisements that are based on your interests.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Social Media Cookies</h3>
          <p>
            These cookies are used to enable you to share pages and content that you find interesting on our Website
            through third-party social networking and other websites. These cookies may also be used for advertising
            purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies we use</h2>
          <Table>
            <TableCaption>List of cookies used on our website</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>_session</TableCell>
                <TableCell>Essential</TableCell>
                <TableCell>Used to maintain your session</TableCell>
                <TableCell>Session</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>cart_items</TableCell>
                <TableCell>Essential</TableCell>
                <TableCell>Stores your shopping cart items</TableCell>
                <TableCell>30 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>_ga</TableCell>
                <TableCell>Analytics</TableCell>
                <TableCell>Used by Google Analytics to distinguish users</TableCell>
                <TableCell>2 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>_gid</TableCell>
                <TableCell>Analytics</TableCell>
                <TableCell>Used by Google Analytics to distinguish users</TableCell>
                <TableCell>24 hours</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>_fbp</TableCell>
                <TableCell>Advertising</TableCell>
                <TableCell>Used by Facebook to deliver advertisements</TableCell>
                <TableCell>3 months</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>recently_viewed</TableCell>
                <TableCell>Functionality</TableCell>
                <TableCell>Stores recently viewed products</TableCell>
                <TableCell>30 days</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>theme_preference</TableCell>
                <TableCell>Functionality</TableCell>
                <TableCell>Stores your theme preference (light/dark)</TableCell>
                <TableCell>1 year</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2 className="text-2xl font-bold mt-8 mb-4">How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
            by clicking on the appropriate opt-out links provided in the cookie table above.
          </p>
          <p>
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
            you may still use our website though your access to some functionality and areas of our website may be
            restricted. As the means by which you can refuse cookies through your web browser controls vary from
            browser-to-browser, you should visit your browser's help menu for more information.
          </p>
          <p>
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like
            to find out more information, please visit{" "}
            <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline">
              http://www.aboutads.info/choices/
            </a>{" "}
            or{" "}
            <a href="http://www.youronlinechoices.com" className="text-primary hover:underline">
              http://www.youronlinechoices.com
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How often will we update this Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Where can you get further information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at
            privacy@iplcards.com or contact us at:
          </p>
          <p>
            IPL Cards
            <br />
            123 Cricket Lane
            <br />
            Bangalore, Karnataka 560001
            <br />
            India
            <br />
            Phone: +91 98765 43210
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} IPL Cards. All rights reserved.</p>
          <div className="flex gap-4">
            <Button variant="outline" asChild size="sm">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="outline" asChild size="sm">
              <Link href="/terms">Terms & Conditions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
