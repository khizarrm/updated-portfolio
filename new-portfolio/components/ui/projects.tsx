import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: "thirdspace",
    description: "Full-stack e-commerce platform built with Next.js, TypeScript, and PostgreSQL. Features include user authentication, shopping cart, and payment integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo-link.com",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features. Built using React, Firebase, and Material-UI.",
    tags: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com/yourusername/project2",
    demo: "https://demo-link2.com",
    image: "/api/placeholder/600/400"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features. Built using React, Firebase, and Material-UI.",
    tags: ["React", "Firebase", "Material-UI", "Redux"],
    github: "https://github.com/yourusername/project2",
    demo: "https://demo-link2.com",
    image: "/api/placeholder/600/400"
  },
];

const ProjectsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-background backdrop-blur-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-white">{project.title}</CardTitle>
              <CardDescription className="text-gray-400">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-gray-800 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Globe className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;