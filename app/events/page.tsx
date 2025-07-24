import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
const events = [
  {
    id: 1,
    title: "Entrepreneurship Workshop",
    category: "Workshop",
    description:
      "A comprehensive workshop on entrepreneurship basics, business model canvas, and pitching techniques for aspiring entrepreneurs.",
    date: "March 15, 2023",
    location: "Main Auditorium, SVCE",
    participants: "120 Participants",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    category: "Competition",
    description:
      "Students presented their innovative startup ideas to the panel of judges from the industry. Cash prizes and mentorship opportunities were awarded.",
    date: "February 28, 2023",
    location: "Seminar Hall, SVCE",
    participants: "50 Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  },
  {
    id: 3,
    title: "Industry Expert Talk Series",
    category: "Seminar",
    description:
      "A series of talks by industry experts sharing their entrepreneurial journey, challenges faced, and insights on building successful startups.",
    date: "January 10, 2023",
    location: "Virtual Event",
    participants: "200+ Attendees",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
  {
    id: 4,
    title: "Hackathon 2023",
    category: "Competition",
    description:
      "A 24-hour coding marathon where participants worked on innovative solutions to real-world problems. Prizes were awarded for the best solutions.",
    date: "December 5, 2022",
    location: "Computer Science Block, SVCE",
    participants: "30 Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
  },
  {
    id: 5,
    title: "Business Plan Workshop",
    category: "Workshop",
    description:
      "An interactive workshop on creating effective business plans, financial projections, and market analysis for startups.",
    date: "November 20, 2022",
    location: "MBA Department, SVCE",
    participants: "80 Participants",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  },
  {
    id: 6,
    title: "E-Summit 2022",
    category: "Conference",
    description:
      "Annual entrepreneurship summit featuring keynote speeches, panel discussions, workshops, and networking opportunities with industry leaders.",
    date: "October 15-16, 2022",
    location: "SVCE Campus",
    participants: "500+ Attendees",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
]

export default function EventsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our past and upcoming events designed to inspire and nurture entrepreneurial talent.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <div className="p-6">
                    <span
                      className={`inline-block px-3 py-1 bg-${event.color}/10 text-${event.color} rounded-full text-sm font-medium mb-4`}
                    >
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.participants}</span>
                      </div>
                    </div>
                    <Button variant={event.color as "default" | "secondary" | "accent"}>View Details</Button>
                  </div>
                </div>
                <div className={index % 2 === 0 ? "order-1 md:order-2" : "order-1"}>
                  <div className="event-card overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with Our Events</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events, workshops, and opportunities.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border border-border"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
