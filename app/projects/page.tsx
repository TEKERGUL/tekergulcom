"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, User } from "lucide-react"

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: {
        en: "Industrial Automation System",
        tr: "Endüstriyel Otomasyon Sistemi",
      },
      description: {
        en: "Design and implementation of a comprehensive automation system for a manufacturing plant, including PLC programming, SCADA integration, and HMI development.",
        tr: "Bir üretim tesisi için kapsamlı bir otomasyon sisteminin tasarımı ve uygulanması, PLC programlama, SCADA entegrasyonu ve HMI geliştirme dahil.",
      },
      image: "/placeholder.svg?height=600&width=800",
      category: "automation",
      client: "ABC Manufacturing",
      date: "2023-05-15",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: "2",
      title: {
        en: "Power Distribution System",
        tr: "Güç Dağıtım Sistemi",
      },
      description: {
        en: "Design and installation of a high-voltage power distribution system for a commercial complex, ensuring efficient and reliable power supply.",
        tr: "Bir ticari kompleks için yüksek voltajlı güç dağıtım sisteminin tasarımı ve kurulumu, verimli ve güvenilir güç kaynağı sağlanması.",
      },
      image: "/placeholder.svg?height=600&width=800",
      category: "electrical",
      client: "XYZ Commercial Properties",
      date: "2023-02-10",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: "3",
      title: {
        en: "Smart Building Control System",
        tr: "Akıllı Bina Kontrol Sistemi",
      },
      description: {
        en: "Development of an integrated smart building control system, including lighting, HVAC, security, and energy management.",
        tr: "Aydınlatma, HVAC, güvenlik ve enerji yönetimi dahil olmak üzere entegre bir akıllı bina kontrol sisteminin geliştirilmesi.",
      },
      image: "/placeholder.svg?height=600&width=800",
      category: "electronic",
      client: "123 Office Tower",
      date: "2022-11-20",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: "4",
      title: {
        en: "Renewable Energy Integration",
        tr: "Yenilenebilir Enerji Entegrasyonu",
      },
      description: {
        en: "Integration of solar power systems with existing electrical infrastructure for a manufacturing facility, reducing energy costs and carbon footprint.",
        tr: "Bir üretim tesisi için mevcut elektrik altyapısına güneş enerjisi sistemlerinin entegrasyonu, enerji maliyetlerini ve karbon ayak izini azaltma.",
      },
      image: "/placeholder.svg?height=600&width=800",
      category: "electrical",
      client: "Green Manufacturing Co.",
      date: "2022-09-05",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: "5",
      title: {
        en: "Industrial IoT Monitoring System",
        tr: "Endüstriyel IoT İzleme Sistemi",
      },
      description: {
        en: "Development of an IoT-based monitoring system for industrial equipment, enabling real-time monitoring, predictive maintenance, and data analytics.",
        tr: "Endüstriyel ekipman için IoT tabanlı bir izleme sisteminin geliştirilmesi, gerçek zamanlı izleme, öngörücü bakım ve veri analitiği sağlanması.",
      },
      image: "/placeholder.svg?height=600&width=800",
      category: "automation",
      client: "Industrial Solutions Ltd.",
      date: "2022-07-15",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    {
      id: "6",
      title: {
        en: "Custom Electronic Control System",
        tr: "Özel Elektronik Kontrol Sistemi",
      },
      description: {
        en: "Design and development of a custom electronic control system for specialized manufacturing equipment, improving efficiency and precision.",
        tr: "Özel üretim ekipmanı için özel bir elektronik kontrol sisteminin tasarımı ve geliştirilmesi, verimlilik ve hassasiyetin artırılması.",
      },
      image: "/placeholder.svg?height=600&width=800",
      category: "electronic",
      client: "Precision Manufacturing Inc.",
      date: "2022-05-20",
      gallery: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t("projects.title")}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("projects.subtitle")}</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Filter Tabs */}
          <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-md mx-auto">
              <TabsTrigger value="all">{t("projects.filter.all")}</TabsTrigger>
              <TabsTrigger value="electrical">{t("projects.filter.electrical")}</TabsTrigger>
              <TabsTrigger value="electronic">{t("projects.filter.electronic")}</TabsTrigger>
              <TabsTrigger value="automation">{t("projects.filter.automation")}</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title[language]}</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {selectedProject.client}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {new Date(selectedProject.date).toLocaleDateString()}
                    </Badge>
                    <Badge>
                      {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                    </Badge>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="relative h-[300px] md:h-[400px] w-full rounded-md overflow-hidden my-4">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title[language]}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-slate-600 mb-6">{selectedProject.description[language]}</p>

              <div className="grid grid-cols-3 gap-4">
                {selectedProject.gallery.map((image, index) => (
                  <div key={index} className="relative h-24 rounded-md overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface Project {
  id: string
  title: {
    en: string
    tr: string
  }
  description: {
    en: string
    tr: string
  }
  image: string
  category: string
  client: string
  date: string
  gallery: string[]
}

function ProjectCard({ project, language, onClick }: { project: Project; language: "en" | "tr"; onClick: () => void }) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title[language]} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          <Badge>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
        <p className="text-slate-600 line-clamp-3">{project.description[language]}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button variant="outline" className="w-full" onClick={onClick}>
          {t("projects.view")} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
