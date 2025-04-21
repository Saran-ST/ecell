import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Twitter } from "lucide-react"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "President",
    team: "Core Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "john@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Vice President",
    team: "Core Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "jane@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Secretary",
    team: "Core Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "michael@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Treasurer",
    team: "Core Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "emily@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Marketing Lead",
    team: "Marketing Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "david@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 6,
    name: "Sarah Lee",
    position: "Events Coordinator",
    team: "Events Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sarah@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 7,
    name: "Robert Chen",
    position: "Technical Lead",
    team: "Technical Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "robert@example.com",
    twitter: "https://twitter.com",
  },
  {
    id: 8,
    name: "Lisa Wang",
    position: "Content Creator",
    team: "Content Team",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "lisa@example.com",
    twitter: "https://twitter.com",
  },
]

// Group team members by team
const groupedTeamMembers = teamMembers.reduce(
  (acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = []
    }
    acc[member.team].push(member)
    return acc
  },
  {} as Record<string, typeof teamMembers>,
)

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet the passionate individuals behind E-cell SVCE who are dedicated to fostering entrepreneurship.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {Object.entries(groupedTeamMembers).map(([team, members]) => (
            <div key={team} className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">{team}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                  <div key={member.id} className="team-card">
                    <div className="team-card-inner h-full">
                      {/* Front of card */}
                      <div className="team-card-front h-full">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                          <div className="aspect-square relative">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-muted-foreground">{member.position}</p>
                          </div>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div className="team-card-back h-full">
                        <div className="bg-primary text-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center h-full">
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="mb-2">{member.position}</p>
                          <p className="mb-6 text-primary-foreground/80">{member.team}</p>

                          <div className="flex gap-4 mb-4">
                            <Link
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Linkedin size={20} />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                              href={`mailto:${member.email}`}
                              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Mail size={20} />
                              <span className="sr-only">Email</span>
                            </Link>
                            <Link
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Twitter size={20} />
                              <span className="sr-only">Twitter</span>
                            </Link>
                          </div>

                          <Link
                            href={`/team/${member.id}`}
                            className="text-sm underline hover:text-white/80 transition-colors"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Joining Our Team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team. If you're interested in entrepreneurship
            and want to make a difference, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
