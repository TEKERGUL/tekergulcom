"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, CheckCircle, Cpu, Database, FlaskConical, Lightbulb, Settings, Zap } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Engineering background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{t("home.hero.title")}</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl">{t("home.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="/services">{t("home.hero.cta")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="/contact">{t("contact.title")}</Link>
            </Button>
          </div>
        </div>

        {/* Dalga Efekti */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-0 z-10 translate-y-1">
          <svg
            className="relative block w-full h-[70px] wave-animation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-12 pb-16 md:pb-24 bg-slate-50 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t("home.intro.title")}</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">{t("home.intro.text")}</p>
              <ul className="space-y-3">
                {[
                  "ISO 9001 Sertifikalı",
                  "20+ Yıllık Deneyim",
                  "Sertifikalı Mühendisler",
                  "Sertifika uyumlulukları",
                  "Son Teknoloji Çözümler",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Engineering team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t("home.services.title")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive engineering solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title={t("home.services.electrical.title")}
              description={t("home.services.electrical.description")}
            />
            <ServiceCard
              icon={<Cpu className="h-10 w-10 text-primary" />}
              title={t("home.services.electronic.title")}
              description={t("home.services.electronic.description")}
            />
            <ServiceCard
              icon={<FlaskConical className="h-10 w-10 text-primary" />}
              title={t("home.services.consulting.title")}
              description={t("home.services.consulting.description")}
            />
            <ServiceCard
              icon={<Settings className="h-10 w-10 text-primary" />}
              title={t("home.services.automation.title")}
              description={t("home.services.automation.description")}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services" className="flex items-center gap-2">
                {t("home.services.title")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t("home.why.title")}</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We combine technical expertise with innovative thinking to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Award className="h-12 w-12 text-primary" />}
              title={t("home.why.experience")}
              description="With over 20 years in the industry, we bring unparalleled experience to every project."
            />
            <FeatureCard
              icon={<Lightbulb className="h-12 w-12 text-primary" />}
              title={t("home.why.expertise")}
              description="Our team of certified engineers ensures the highest level of technical expertise."
            />
            <FeatureCard
              icon={<CheckCircle className="h-12 w-12 text-primary" />}
              title={t("home.why.quality")}
              description="We maintain rigorous quality standards throughout every phase of your project."
            />
            <FeatureCard
              icon={<Database className="h-12 w-12 text-primary" />}
              title={t("home.why.innovation")}
              description="We leverage cutting-edge technology to provide innovative engineering solutions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("home.cta.text")}</p>
          <Button asChild size="lg" variant="secondary" className="text-primary">
            <Link href="/contact">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  )
}
