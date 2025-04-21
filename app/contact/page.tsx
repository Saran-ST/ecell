"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for any inquiries, collaborations, or to join our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about E-cell SVCE or interested in collaborating with us? Feel free to reach out to us
                using the contact information below or fill out the contact form.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <address className="not-italic text-muted-foreground">
                      Sri Venkateswara College of Engineering
                      <br />
                      Post Bag No.1, Pennalur Village
                      <br />
                      Chennai - Bengaluru High Road
                      <br />
                      Sriperumbudur Tk, Tamil Nadu 602117
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Mail className="text-secondary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">ecell@svce.ac.in</p>
                    <p className="text-muted-foreground">info.ecellsvce@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 9876543210</p>
                    <p className="text-muted-foreground">+91 9876543211</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border border-border/50">
                <h3 className="font-bold text-lg mb-4">Office Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-border/50">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry about E-cell"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at our campus location to learn more about our initiatives and programs.
            </p>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-muted-foreground">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-xl font-bold mb-3">How can I join E-cell SVCE?</h3>
              <p className="text-muted-foreground">
                You can join E-cell SVCE by filling out the application form on our website or by contacting us
                directly. We welcome students from all departments who are passionate about entrepreneurship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-xl font-bold mb-3">What events does E-cell organize?</h3>
              <p className="text-muted-foreground">
                E-cell SVCE organizes various events including workshops, seminars, competitions, hackathons, and our
                annual entrepreneurship summit. Check our events page for more details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-xl font-bold mb-3">Can alumni participate in E-cell activities?</h3>
              <p className="text-muted-foreground">
                Yes, alumni are welcome to participate in our events and can also contribute as mentors or speakers. We
                value the experience and insights that our alumni can provide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-xl font-bold mb-3">How can I collaborate with E-cell SVCE?</h3>
              <p className="text-muted-foreground">
                If you're interested in collaborating with us for events, workshops, or other initiatives, please reach
                out to us through our contact form or email us directly at ecell@svce.ac.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
