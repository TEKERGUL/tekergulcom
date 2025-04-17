"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="w-10 px-0"
      >
        🇬🇧
      </Button>
      <Button
        variant={language === "tr" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("tr")}
        className="w-10 px-0"
      >
        🇹🇷
      </Button>
    </div>
  )
}
