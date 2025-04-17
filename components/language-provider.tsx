"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "tr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    // Home Page
    "home.hero.title": "Engineering Excellence",
    "home.hero.subtitle": "Professional Electrical & Electronic Engineering Services",
    "home.hero.cta": "Our Services",
    "home.intro.title": "Welcome to Tekergül Engineering",
    "home.intro.text":
      "We provide comprehensive electrical and electronic engineering solutions for industrial, commercial, and residential projects. With our expertise and innovative approach, we deliver high-quality services tailored to your specific needs.",
    "home.services.title": "Our Services",
    "home.services.electrical.title": "Electrical Engineering",
    "home.services.electrical.description":
      "Design and implementation of electrical systems, power distribution, lighting, and control systems.",
    "home.services.electronic.title": "Electronic Engineering",
    "home.services.electronic.description":
      "Development of electronic circuits, embedded systems, and automation solutions.",
    "home.services.consulting.title": "Engineering Consulting",
    "home.services.consulting.description":
      "Expert advice on technical specifications, feasibility studies, and project management.",
    "home.services.automation.title": "Industrial Automation",
    "home.services.automation.description":
      "Design and implementation of automated control systems for industrial processes.",
    "home.why.title": "Why Choose Us",
    "home.why.experience": "Years of Experience",
    "home.why.expertise": "Technical Expertise",
    "home.why.quality": "Quality Assurance",
    "home.why.innovation": "Innovative Solutions",
    "home.cta.title": "Ready to Start Your Project?",
    "home.cta.text": "Contact us today to discuss your engineering needs and get a free consultation.",
    "home.cta.button": "Contact Us",

    // Services Page
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive Engineering Solutions",

    // Projects Page
    "projects.title": "Our Projects",
    "projects.subtitle": "Showcasing Our Engineering Excellence",
    "projects.filter.all": "All Projects",
    "projects.filter.electrical": "Electrical",
    "projects.filter.electronic": "Electronic",
    "projects.filter.automation": "Automation",
    "projects.view": "View Details",
    "projects.client": "Client",
    "projects.date": "Completion Date",
    "projects.category": "Category",

    // About Page
    "about.title": "About Us",
    "about.subtitle": "Our Story & Expertise",
    "about.history.title": "Our History",
    "about.history.text":
      "Founded in 2010, Tekergül Engineering has grown to become a leading provider of electrical and electronic engineering services. We have successfully completed numerous projects across various industries.",
    "about.mission.title": "Our Mission",
    "about.mission.text":
      "To deliver innovative and sustainable engineering solutions that exceed client expectations and contribute to technological advancement.",
    "about.vision.title": "Our Vision",
    "about.vision.text":
      "To be recognized as the industry leader in electrical and electronic engineering, known for excellence, innovation, and client satisfaction.",
    "about.team.title": "Our Team",
    "about.team.text":
      "Our team consists of highly qualified engineers with extensive experience in various aspects of electrical and electronic engineering.",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in Touch with Our Team",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.success": "Your message has been sent successfully!",
    "contact.error": "There was an error sending your message. Please try again.",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.services": "Services",
    "footer.projects": "Projects",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.services": "Hizmetler",
    "nav.projects": "Projeler",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",

    // Home Page
    "home.hero.title": "Mühendislikte Mükemmellik",
    "home.hero.subtitle": "Profesyonel Elektrik & Elektronik Mühendisliği Hizmetleri",
    "home.hero.cta": "Hizmetlerimiz",
    "home.intro.title": "Tekergül Mühendislik'e Hoş Geldiniz",
    "home.intro.text":
      "Endüstriyel, ticari ve konut projeleri için kapsamlı elektrik ve elektronik mühendisliği çözümleri sunuyoruz. Uzmanlığımız ve yenilikçi yaklaşımımızla, özel ihtiyaçlarınıza uygun yüksek kaliteli hizmetler sunuyoruz.",
    "home.services.title": "Hizmetlerimiz",
    "home.services.electrical.title": "Elektrik Mühendisliği",
    "home.services.electrical.description":
      "Elektrik sistemleri, güç dağıtımı, aydınlatma ve kontrol sistemlerinin tasarımı ve uygulaması.",
    "home.services.electronic.title": "Elektronik Mühendisliği",
    "home.services.electronic.description":
      "Elektronik devreler, gömülü sistemler ve otomasyon çözümlerinin geliştirilmesi.",
    "home.services.consulting.title": "Mühendislik Danışmanlığı",
    "home.services.consulting.description":
      "Teknik şartnameler, fizibilite çalışmaları ve proje yönetimi konularında uzman tavsiyesi.",
    "home.services.automation.title": "Endüstriyel Otomasyon",
    "home.services.automation.description":
      "Endüstriyel süreçler için otomatik kontrol sistemlerinin tasarımı ve uygulanması.",
    "home.why.title": "Neden Bizi Seçmelisiniz",
    "home.why.experience": "Yıllara Dayanan Deneyim",
    "home.why.expertise": "Teknik Uzmanlık",
    "home.why.quality": "Kalite Güvencesi",
    "home.why.innovation": "Yenilikçi Çözümler",
    "home.cta.title": "Projenize Başlamaya Hazır mısınız?",
    "home.cta.text":
      "Mühendislik ihtiyaçlarınızı görüşmek ve ücretsiz danışmanlık almak için bugün bizimle iletişime geçin.",
    "home.cta.button": "İletişime Geçin",

    // Services Page
    "services.title": "Hizmetlerimiz",
    "services.subtitle": "Kapsamlı Mühendislik Çözümleri",

    // Projects Page
    "projects.title": "Projelerimiz",
    "projects.subtitle": "Mühendislik Mükemmelliğimizi Sergileyen Çalışmalar",
    "projects.filter.all": "Tüm Projeler",
    "projects.filter.electrical": "Elektrik",
    "projects.filter.electronic": "Elektronik",
    "projects.filter.automation": "Otomasyon",
    "projects.view": "Detayları Gör",
    "projects.client": "Müşteri",
    "projects.date": "Tamamlanma Tarihi",
    "projects.category": "Kategori",

    // About Page
    "about.title": "Hakkımızda",
    "about.subtitle": "Hikayemiz & Uzmanlığımız",
    "about.history.title": "Tarihçemiz",
    "about.history.text":
      "2010 yılında kurulan Tekergül Mühendislik, elektrik ve elektronik mühendisliği hizmetlerinin önde gelen sağlayıcılarından biri haline gelmiştir. Çeşitli sektörlerde çok sayıda projeyi başarıyla tamamladık.",
    "about.mission.title": "Misyonumuz",
    "about.mission.text":
      "Müşteri beklentilerini aşan ve teknolojik ilerlemeye katkıda bulunan yenilikçi ve sürdürülebilir mühendislik çözümleri sunmak.",
    "about.vision.title": "Vizyonumuz",
    "about.vision.text":
      "Mükemmellik, yenilikçilik ve müşteri memnuniyeti ile tanınan, elektrik ve elektronik mühendisliğinde sektör lideri olarak tanınmak.",
    "about.team.title": "Ekibimiz",
    "about.team.text":
      "Ekibimiz, elektrik ve elektronik mühendisliğinin çeşitli alanlarında geniş deneyime sahip yüksek nitelikli mühendislerden oluşmaktadır.",

    // Contact Page
    "contact.title": "İletişim",
    "contact.subtitle": "Ekibimizle İletişime Geçin",
    "contact.form.name": "Ad Soyad",
    "contact.form.email": "E-posta Adresi",
    "contact.form.phone": "Telefon Numarası",
    "contact.form.subject": "Konu",
    "contact.form.message": "Mesajınız",
    "contact.form.submit": "Mesaj Gönder",
    "contact.info.title": "İletişim Bilgileri",
    "contact.info.address": "Adres",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-posta",
    "contact.success": "Mesajınız başarıyla gönderildi!",
    "contact.error": "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",

    // Footer
    "footer.rights": "Tüm hakları saklıdır",
    "footer.services": "Hizmetler",
    "footer.projects": "Projeler",
    "footer.about": "Hakkımızda",
    "footer.contact": "İletişim",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Şartları",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
