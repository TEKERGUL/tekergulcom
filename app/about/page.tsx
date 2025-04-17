"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Target } from "lucide-react"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: language === "en" ? "Chief Engineer" : "Baş Mühendis",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        language === "en"
          ? "Over 15 years of experience in electrical engineering with expertise in power systems."
          : "Güç sistemleri uzmanlığı ile elektrik mühendisliğinde 15 yılı aşkın deneyim.",
    },
    {
      name: "Mehmet Kaya",
      position: language === "en" ? "Electronic Engineer" : "Elektronik Mühendisi",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        language === "en"
          ? "Specialized in embedded systems and IoT solutions for industrial applications."
          : "Endüstriyel uygulamalar için gömülü sistemler ve IoT çözümlerinde uzmanlaşmış.",
    },
    {
      name: "Ayşe Demir",
      position: language === "en" ? "Automation Specialist" : "Otomasyon Uzmanı",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        language === "en"
          ? "Expert in industrial automation and control systems with a focus on SCADA."
          : "SCADA odaklı endüstriyel otomasyon ve kontrol sistemleri uzmanı.",
    },
    {
      name: "Can Öztürk",
      position: language === "en" ? "Project Manager" : "Proje Yöneticisi",
      image: "/placeholder.svg?height=400&width=400",
      bio:
        language === "en"
          ? "Experienced project manager with a background in electrical engineering."
          : "Elektrik mühendisliği geçmişine sahip deneyimli proje yöneticisi.",
    },
  ]

  const stats = [
    {
      value: "20+",
      label: language === "en" ? "Years of Experience" : "Yıllık Deneyim",
    },
    {
      value: "500+",
      label: language === "en" ? "Projects Completed" : "Tamamlanan Proje",
    },
    {
      value: "50+",
      label: language === "en" ? "Team Members" : "Ekip Üyesi",
    },
    {
      value: "100+",
      label: language === "en" ? "Satisfied Clients" : "Memnun Müşteri",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t("about.title")}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("about.history.title")}</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t("about.history.text")}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">ISO 9001 Certified</h3>
                    <p className="text-slate-600">
                      {language === "en"
                        ? "We maintain the highest quality standards in all our operations."
                        : "Tüm operasyonlarımızda en yüksek kalite standartlarını koruyoruz."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {language === "en" ? "Certified Engineers" : "Sertifikalı Mühendisler"}
                    </h3>
                    <p className="text-slate-600">
                      {language === "en"
                        ? "Our team consists of certified professionals with extensive experience."
                        : "Ekibimiz, geniş deneyime sahip sertifikalı profesyonellerden oluşmaktadır."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Company history" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t("about.mission.title")}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">{t("about.mission.text")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t("about.vision.title")}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed">{t("about.vision.text")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t("about.team.text")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "en" ? "Our Values" : "Değerlerimiz"}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {language === "en"
                ? "These core values guide our approach to engineering and client relationships."
                : "Bu temel değerler, mühendislik ve müşteri ilişkilerine yaklaşımımıza rehberlik eder."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title={language === "en" ? "Excellence" : "Mükemmellik"}
              description={
                language === "en"
                  ? "We strive for excellence in every project we undertake, ensuring the highest quality standards."
                  : "Üstlendiğimiz her projede mükemmelliği hedefliyor, en yüksek kalite standartlarını sağlıyoruz."
              }
            />
            <ValueCard
              title={language === "en" ? "Innovation" : "Yenilikçilik"}
              description={
                language === "en"
                  ? "We embrace innovative thinking and cutting-edge technologies to deliver optimal solutions."
                  : "Optimal çözümler sunmak için yenilikçi düşünceyi ve en son teknolojileri benimsiyoruz."
              }
            />
            <ValueCard
              title={language === "en" ? "Integrity" : "Dürüstlük"}
              description={
                language === "en"
                  ? "We conduct our business with the highest level of integrity, transparency, and ethical standards."
                  : "İşimizi en yüksek dürüstlük, şeffaflık ve etik standartlarla yürütüyoruz."
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
