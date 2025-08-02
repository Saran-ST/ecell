"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Entrepreneurship Workshop",
    category: "Workshop",
    description: "A comprehensive workshop on entrepreneurship basics, business model canvas, and pitching techniques for aspiring entrepreneurs.",
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
    description: "Students presented their innovative startup ideas to the panel of judges from the industry. Cash prizes and mentorship opportunities were awarded.",
    date: "February 28, 2023",
    location: "Seminar Hall, SVCE",
    participants: "50 Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  }
]

const participants = [
  { id: 1, name: "pqr", class: "CSE IV", idea: "Smart Farming", description: "AI-driven crop monitoring system" },
  { id: 2, name: "Abcd", class: "IT III", idea: "E-Commerce App", description: "Next-gen shopping experience" },
  { id: 3, name: "xyz", class: "ECE II", idea: "Drone Delivery", description: "Drone-based parcel delivery system" },
  { id: 4, name: "pqr", class: "CSE IV", idea: "Smart Farming", description: "AI-driven crop monitoring system" },
  { id: 5, name: "Abcd", class: "IT III", idea: "E-Commerce App", description: "Next-gen shopping experience" },
  { id: 6, name: "xyz", class: "ECE II", idea: "Drone Delivery", description: "Drone-based parcel delivery system" },
  { id: 7, name: "pqr", class: "CSE IV", idea: "Smart Farming", description: "AI-driven crop monitoring system" },
  { id: 8, name: "Abcd", class: "IT III", idea: "E-Commerce App", description: "Next-gen shopping experience" },
  { id: 9, name: "xyz", class: "ECE II", idea: "Drone Delivery", description: "Drone-based parcel delivery system" },
  { id: 10, name: "pqr", class: "CSE IV", idea: "Smart Farming", description: "AI-driven crop monitoring system" }
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

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
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}
              >
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 bg-${event.color}/10 text-${event.color} rounded-full text-sm font-medium mb-4`}>
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
                    <Button variant={event.color as "default" | "secondary" | "accent"} onClick={() => setSelectedEvent(event.id)}>
                      View Details
                    </Button>
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

      {/* Participants Modal */}
      {selectedEvent !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-2xl h-[70%] relative flex flex-col">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              Close
            </button>
            <h2 className="text-xl font-bold mb-4">Participants</h2>

            {/* Scrollable Table Container */}
            <div className="overflow-y-auto flex-1 border border-gray-300 rounded">
              <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-gray-100">
                  <tr>
                    <th className="p-2 border">S.No</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Idea Pitched</th>
                    <th className="p-2 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((p) => (
                    <tr key={p.id}>
                      <td className="p-2 border">{p.id}</td>
                      <td className="p-2 border">{p.name}</td>
                      <td className="p-2 border">{p.class}</td>
                      <td className="p-2 border">{p.idea}</td>
                      <td className="p-2 border">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
