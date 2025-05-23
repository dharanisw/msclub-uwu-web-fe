import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, BookOpen, ChevronRight } from "lucide-react"
import { HeroParallax } from "@/components/hero-parallax"
import { FeatureHighlight } from "@/components/feature-highlight"
import { EventsCarousel } from "@/components/events-carousel"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { StatsCounter } from "@/components/stats-counter"
import { PartnersGrid } from "@/components/partners-grid"
import { OrganizationSchema, WebPageSchema } from "@/components/structured-data"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
  description:
    "Join UWU's premier tech community to learn, connect, and build your future with Microsoft's cutting-edge tools and technologies.",
  alternates: {
    canonical: "https://msclub-uwu.netlify.app",
  },
  openGraph: {
    title: "MS Club UWU - Microsoft Student Club of Uva Wellassa University",
    description:
      "Join UWU's premier tech community to learn, connect, and build your future with Microsoft's cutting-edge tools and technologies.",
    url: "https://msclub-uwu.netlify.app",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema
        title="MS Club UWU - Microsoft Student Club of Uva Wellassa University"
        description="Join UWU's premier tech community to learn, connect, and build your future with Microsoft's cutting-edge tools and technologies."
        url="https://msclub-uwu.netlify.app"
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Parallax effect */}
        <HeroParallax />

        {/* Stats Section */}
        <section className="w-full py-12 relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
          <div className="container">
            <StatsCounter />
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-4 max-w-2xl">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Upcoming Events</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Next Events</h2>
                <p className="text-muted-foreground text-lg">
                  Expand your knowledge and network with our upcoming workshops, seminars, and hackathons.
                </p>
              </div>
              <Button asChild variant="outline" className="reveal motion-scale group">
                <Link href="/events" className="flex items-center">
                  View All Events
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            {/** upcoming events */}
            <EventsCarousel />
          </div>
        </section>

        {/* Feature Highlight Section */}
        <FeatureHighlight />

        {/* Key Features Section with Mica effect */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>

          <div className="container relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Why Join Us</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 italic">
              Inspiring Students to Innovate and Create with Microsoft Technologies
              </h2>
              <p className="text-muted-foreground text-lg">
                Our club offers unique opportunities to learn, connect, and grow with Microsoft technologies.
              </p>0.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CalendarDays className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Regular Events</h3>
                  <p className="text-muted-foreground">
                    We organize workshops, seminars, and tech talks to keep you updated with the latest in Microsoft
                    technologies. Our events feature industry experts and hands-on learning opportunities.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link href="/events" className="text-blue-600 font-medium flex items-center hover:underline">
                      Explore Events
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Networking</h3>
                  <p className="text-muted-foreground">
                    Connect with peers, industry professionals, and Microsoft experts to expand your professional
                    network. Build relationships that will help you throughout your career.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link href="/about" className="text-blue-600 font-medium flex items-center hover:underline">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-none depth-2 hover:depth-3 transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Learning Resources</h3>
                  <p className="text-muted-foreground">
                    Access exclusive learning materials, tutorials, and certifications guidance for Microsoft
                    technologies. Accelerate your learning journey with our curated resources.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link href="/resources" className="text-blue-600 font-medium flex items-center hover:underline">
                      View Resources
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="w-full py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">What Our Members Say</h2>
              <p className="text-muted-foreground text-lg">
                Hear from students who have benefited from being part of our community.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section> */}

        {/* Partners Section */}
        {/* <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Our Partners</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Trusted By Industry Leaders</h2>
              <p className="text-muted-foreground text-lg">
                We collaborate with leading tech companies to bring you the best opportunities.
              </p>
            </div>

            <PartnersGrid />
          </div>
        </section> */}

        {/* Blog Preview Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div className="space-y-4 max-w-2xl">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Latest Articles</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Our Blog</h2>
                <p className="text-muted-foreground text-lg">
                  Stay updated with the latest news, tutorials, and insights on Microsoft technologies.
                </p>
              </div>
              <Button asChild variant="outline" className="reveal motion-scale group">
                <Link href="/blog" className="flex items-center">
                  View All Posts
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 motion-fade group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/AzureFun.jpg"
                    alt="Azure Workshop"
                    fill
                    
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">Cloud</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>Mar 25, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Introduction to Azure Fundamentals: A Beginner’s Guide                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                  Imagine you need to run a powerful application, but your personal computer isn’t strong enough. Instead of buying expensive hardware, you can use cloud computing—where a company like Microsoft provides the necessary resources over the internet. Cloud computing allows businesses and individuals to access computing power, storage, and applications on demand, without the need for physical infrastructure.                  </p>
                  <Link href="https://medium.com/@rvihini/introduction-to-azure-fundamentals-a-beginners-guide-6cf86486d29f" className="text-blue-600 font-medium flex items-center hover:underline">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Blog Post 2 */}
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 motion-fade group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/CICD.jpg"
                    alt="Microsoft Certifications"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">Career</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>May 25, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  CI/CD Pipeline for Web App Deployment with Docker, Azure DevOps, and Azure Container Registry                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                  Are you looking to deploy your Projects to Azure? With Azure DevOps, you can automate your app’s build and deployment processes with continuous integration (CI) and continuous deployment (CD). This guide will walk you through the steps to set up CI/CD pipelines for both the frontend and backend of your project. Let’s dive in!                  </p>
                  <Link href="https://medium.com/@abhixsh__/ci-cd-pipeline-for-web-app-deployment-with-docker-azure-devops-and-azure-container-registry-fd385042b755" className="text-blue-600 font-medium flex items-center hover:underline">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Blog Post 3 */}
              <Card className="overflow-hidden depth-2 hover:depth-3 transition-all duration-300 motion-fade group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/Azurevr.jpg"
                    alt="Power Apps"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 hover:bg-blue-700 depth-1">Development</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>May 18, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  Creating Your First Azure Virtual Machine: A Beginner’s Guide                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                  In this article, I’ll walk you through creating an Azure Virtual Machine (VM) from scratch. Not only will you learn how to set up your VM, also, you’ll discover how to host a simple static web frontend such as a React web app from your GitHub repository on your newly created cloud virtual machine.                  </p>
                  <Link href="/blog/3" className="text-blue-600 font-medium flex items-center hover:underline">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none mb-4">Contact Us</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Let's Connect</h2>
              <p className="text-muted-foreground text-lg">
                Have questions or want to learn more about our club? Reach out to us and we'll get back to you soon.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Get In Touch</h3>
                  <p className="text-muted-foreground">
                    We'd love to hear from you! Whether you have questions about membership, upcoming events, or just
                    want to say hello, feel free to reach out.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">info@msclub.uwu.ac.lk</p>
                      <p className="text-muted-foreground">events@msclub.uwu.ac.lk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <p className="text-muted-foreground">+94 55 123456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">Uva Wellassa University</p>
                      <p className="text-muted-foreground">Badulla, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action with Acrylic effect */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#005A9E]"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-6">Join Our Community</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Become a member of our Microsoft Student Club and unlock a world of opportunities, resources, and
                connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="fluent" className="depth-2 motion-scale">
                  <Link href="/register">
                    Register Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-blue-600 hover:bg-white/20 depth-1 motion-scale"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}