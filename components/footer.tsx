import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image src="/logo.svg" alt="E-cell Logo" fill className="object-contain" />
              </div>
              <span className="font-poppins font-bold text-xl">E-cell SVCE</span>
            </Link>
            <p className="text-muted-foreground mb-4">Grow your Skills in Entrepreneurship</p>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-foreground/70 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground/70 hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-foreground/70 space-y-2">
              <p>Sri Venkateswara College of Engineering</p>
              <p>Post Bag No.1, Pennalur Village</p>
              <p>Chennai - Bengaluru High Road</p>
              <p>Sriperumbudur Tk, Tamil Nadu 602117</p>
              <p className="mt-2">Email: ecell@svce.ac.in</p>
            </address>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter to get updates on events and opportunities.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md border border-border bg-background"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} E-cell SVCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
