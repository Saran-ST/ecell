import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Briefcase, Lightbulb, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="E-cell Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">E-cell</h1>
            <p className="text-xl md:text-2xl mb-8">Grow your Skills in Entrepreneurship</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border/50">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Entrepreneurship</h3>
              <p className="text-muted-foreground mb-4">
                Start a roadmap that will determine where he or she wants to go with their entrepreneurial efforts.
              </p>
              <Link href="#" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border/50">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Incubation Center</h3>
              <p className="text-muted-foreground mb-4">
                Entrepreneurial and Managerial Development of SMEs through Incubator MSME.
              </p>
              <Link href="#" className="text-secondary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border/50">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <p className="text-muted-foreground mb-4">
                Promoting Entrepreneurship and Facilities to help you grow your business ideas.
              </p>
              <Link href="#" className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Events</h2>
          </div>

          <div className="space-y-16">
            {/* Event 1 - Left Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Workshop
                  </span>
                  <h3 className="text-2xl font-bold mb-4">Entrepreneurship Workshop</h3>
                  <p className="text-muted-foreground mb-6">
                    A comprehensive workshop on entrepreneurship basics, business model canvas, and pitching techniques
                    for aspiring entrepreneurs.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">120 Participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">March 15, 2023</span>
                    </div>
                  </div>
                  <Button variant="default">View Details</Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="event-card overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Entrepreneurship Workshop"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>

            {/* Event 2 - Right Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="event-card overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Startup Pitch Competition"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
              <div className="order-2">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                    Competition
                  </span>
                  <h3 className="text-2xl font-bold mb-4">Startup Pitch Competition</h3>
                  <p className="text-muted-foreground mb-6">
                    Students presented their innovative startup ideas to a panel of judges from the industry. Cash
                    prizes and mentorship opportunities were awarded.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">50 Teams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">February 28, 2023</span>
                    </div>
                  </div>
                  <Button variant="secondary">View Details</Button>
                </div>
              </div>
            </div>

            {/* Event 3 - Left Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    Seminar
                  </span>
                  <h3 className="text-2xl font-bold mb-4">Industry Expert Talk Series</h3>
                  <p className="text-muted-foreground mb-6">
                    A series of talks by industry experts sharing their entrepreneurial journey, challenges faced, and
                    insights on building successful startups.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">200+ Attendees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">January 10, 2023</span>
                    </div>
                  </div>
                  <Button variant="accent">View Details</Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="event-card overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Industry Expert Talk"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/events">
              <Button variant="outline" size="lg" className="gap-2">
                View All Events <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join E-cell SVCE and transform your innovative ideas into successful ventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
