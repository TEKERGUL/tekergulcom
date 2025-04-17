"use client"

import type React from "react"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Battery, Cpu, FlaskConical, Lightbulb, Settings, Zap } from "lucide-react"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      id: "electrical",
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: t("home.services.electrical.title"),
      description: t("home.services.electrical.description"),
      details: [
        {
          title: "Power Distribution Systems",
          description:
            "Design and implementation of efficient power distribution systems for industrial and commercial facilities.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Lighting Design",
          description:
            "Energy-efficient lighting solutions for various environments, including industrial, commercial, and residential spaces.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Electrical Safety Systems",
          description: "Implementation of safety systems to protect personnel and equipment from electrical hazards.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "electronic",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: t("home.services.electronic.title"),
      description: t("home.services.electronic.description"),
      details: [
        {
          title: "Circuit Design",
          description: "Custom electronic circuit design for specific applications and requirements.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Embedded Systems",
          description:
            "Development of embedded systems for various applications, including IoT devices and control systems.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "PCB Design",
          description: "Professional PCB design and prototyping services for electronic products.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "consulting",
      icon: <FlaskConical className="h-10 w-10 text-primary" />,
      title: t("home.services.consulting.title"),
      description: t("home.services.consulting.description"),
      details: [
        {
          title: "Technical Specifications",
          description: "Development of detailed technical specifications for engineering projects.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Feasibility Studies",
          description: "Comprehensive feasibility studies to evaluate the viability of engineering projects.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Project Management",
          description: "Professional project management services to ensure successful project completion.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "automation",
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: t("home.services.automation.title"),
      description: t("home.services.automation.description"),
      details: [
        {
          title: "PLC Programming",
          description: "Programming of Programmable Logic Controllers (PLCs) for industrial automation.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "SCADA Systems",
          description:
            "Implementation of Supervisory Control and Data Acquisition (SCADA) systems for industrial processes.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Industrial IoT",
          description: "Integration of Internet of Things (IoT) technologies in industrial environments.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t("services.title")}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service) => (
              <Card key={service.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services */}
          <Tabs defaultValue="electrical" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-sm md:text-base">
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid gap-8">
                  {service.details.map((detail, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                      <div className={index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"}>
                        <h3 className="text-2xl font-semibold mb-4">{detail.title}</h3>
                        <p className="text-slate-600 mb-4">{detail.description}</p>
                      </div>
                      <div className={index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"}>
                        <div className="relative h-[300px] rounded-lg overflow-hidden">
                          <Image
                            src={detail.image || "/placeholder.svg"}
                            alt={detail.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Additional Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We offer a range of specialized services to meet your specific engineering needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SpecializedServiceCard
              icon={<Lightbulb className="h-8 w-8 text-primary" />}
              title="Energy Efficiency"
              description="Energy audits and efficiency improvement solutions for industrial and commercial facilities."
            />
            <SpecializedServiceCard
              icon={<Battery className="h-8 w-8 text-primary" />}
              title="Renewable Energy"
              description="Design and implementation of renewable energy systems, including solar and wind power."
            />
            <SpecializedServiceCard
              icon={<Settings className="h-8 w-8 text-primary" />}
              title="Maintenance Services"
              description="Preventive and corrective maintenance services for electrical and electronic systems."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function SpecializedServiceCard({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
