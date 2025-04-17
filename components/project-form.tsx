"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ProjectFormProps {
  onSubmit: (project: any) => void
  language: "en" | "tr"
}

export function ProjectForm({ onSubmit, language }: ProjectFormProps) {
  const [titleEn, setTitleEn] = useState("")
  const [titleTr, setTitleTr] = useState("")
  const [descriptionEn, setDescriptionEn] = useState("")
  const [descriptionTr, setDescriptionTr] = useState("")
  const [image, setImage] = useState("/placeholder.svg?height=300&width=400")
  const [technologies, setTechnologies] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const project = {
      title: {
        en: titleEn,
        tr: titleTr,
      },
      description: {
        en: descriptionEn,
        tr: descriptionTr,
      },
      image,
      technologies: technologies.split(",").map((tech) => tech.trim()),
    }

    onSubmit(project)

    // Reset form
    setTitleEn("")
    setTitleTr("")
    setDescriptionEn("")
    setDescriptionTr("")
    setImage("/placeholder.svg?height=300&width=400")
    setTechnologies("")
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>{language === "en" ? "Add New Project" : "Yeni Proje Ekle"}</CardTitle>
          <CardDescription>
            {language === "en"
              ? "Fill in the details to add a new project to your portfolio"
              : "Portfolyonuza yeni bir proje eklemek için ayrıntıları doldurun"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="titleEn">{language === "en" ? "Title (English)" : "Başlık (İngilizce)"}</Label>
            <Input id="titleEn" value={titleEn} onChange={(e) => setTitleEn(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="titleTr">{language === "en" ? "Title (Turkish)" : "Başlık (Türkçe)"}</Label>
            <Input id="titleTr" value={titleTr} onChange={(e) => setTitleTr(e.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descriptionEn">
              {language === "en" ? "Description (English)" : "Açıklama (İngilizce)"}
            </Label>
            <Textarea
              id="descriptionEn"
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descriptionTr">{language === "en" ? "Description (Turkish)" : "Açıklama (Türkçe)"}</Label>
            <Textarea
              id="descriptionTr"
              value={descriptionTr}
              onChange={(e) => setDescriptionTr(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">{language === "en" ? "Image URL" : "Görsel URL"}</Label>
            <Input
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-sm text-muted-foreground">
              {language === "en"
                ? "Leave default for a placeholder image"
                : "Varsayılan yer tutucu görsel için boş bırakın"}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">
              {language === "en" ? "Technologies (comma separated)" : "Teknolojiler (virgülle ayrılmış)"}
            </Label>
            <Input
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="React, Node.js, MongoDB"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">{language === "en" ? "Add Project" : "Proje Ekle"}</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
