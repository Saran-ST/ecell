"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import emailjs from "emailjs-com"

// ✅ Replace with your actual EmailJS keys:
const SERVICE_ID = "service_vd0ii0q"
const TEMPLATE_ID = "template_oyw8f12"
const USER_ID = "hCjvfCDEpONRdKs2B"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      alert("❌ Failed to send message. Please try again later.")
      console.error("EMAILJS ERROR:", error)
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="pt-20">
      {/* Contact Form Section */}
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
                  <address className="not-italic text-muted-foreground">
                    <strong>Our Location</strong>
                    <br />
                    Sri Venkateswara College of Engineering<br />
                    Post Bag No.1, Pennalur Village<br />
                    Chennai - Bengaluru High Road<br />
                    Sriperumbudur Tk, Tamil Nadu 602117
                  </address>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Mail className="text-secondary h-6 w-6" />
                  </div>
                  <div>
                    <strong>Email Us</strong>
                    <p className="text-muted-foreground">ecell@svce.ac.in</p>
                    <p className="text-muted-foreground">info.ecellsvce@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <strong>Call Us</strong>
                    <p className="text-muted-foreground">+91 9876543210</p>
                    <p className="text-muted-foreground">+91 9876543211</p>
                  </div>
                </div>
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
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Suggestions">Suggestions</option>
                  <option value="Confessions">Confessions</option>
                  <option value="Queries">Queries</option>
                </select>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
