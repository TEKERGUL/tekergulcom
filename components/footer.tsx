"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span>Tekergül</span>
            </Link>
            <p className="text-slate-400 mb-4">{t("home.intro.text").substring(0, 120)}...</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary">
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-primary">
                  {t("footer.projects")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("home.services.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary">
                  {t("home.services.electrical.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary">
                  {t("home.services.electronic.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary">
                  {t("home.services.consulting.title")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-primary">
                  {t("home.services.automation.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("contact.info.title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-slate-400">Ataşehir, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-slate-400">+90 (555) 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@tekergul.com" className="text-slate-400 hover:text-primary">
                  info@tekergul.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Tekergül Mühendislik. {t("footer.rights")}.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-primary">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-primary">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
