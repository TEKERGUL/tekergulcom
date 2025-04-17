"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface ProjectCardProps {
  project: {
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
    technologies: string[]
  }
  isAdmin: boolean
  onDelete: (id: string) => void
  language: "en" | "tr"
}

export function ProjectCard({ project, isAdmin, onDelete, language }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title[language]} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{project.title[language]}</CardTitle>
        <CardDescription>{project.description[language]}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {isAdmin && (
        <CardFooter className="border-t p-4">
          <Button variant="destructive" size="sm" onClick={() => onDelete(project.id)} className="ml-auto">
            <Trash2 className="h-4 w-4 mr-2" />
            {language === "en" ? "Delete" : "Sil"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
