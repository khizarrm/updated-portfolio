import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from 'lucide-react';
import thirdspace  from "../../images/thirdspace.png";
import cuhack from "../../images/cuhacking.png";
import leethub from '../../images/leethub.png';
import { url } from 'inspector';

const projects = [
  {
    title: "thirdspace",
    description: "An app to help students share experiences with one another. Currently at 700+ users and ranked 70th in the app store.",
    tags: ["Expo Go", "RabbitMQ", "TypeScript", "PostgreSQL", "MySql"],
    demo: "https://thirdspace.so/",
    image: thirdspace.src
  },
  {
    title: "CUHacking",
    description: "A hackathon project submission platform for Carleton University students.",
    tags: ["React/Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "Three.js", "pnpm"],
    github: "https://github.com/khizarrm/2025",
    demo: "https://cuhacking.ca/",
    image: cuhack.src
  },
  {
    title: "LeetHub",
    description: "A chrome extension which automatically uploads your correct LeetCode submissions to GitHub.",
    tags: ["JavaScript", "React", "Github Rest API"],
    github: "https://github.com/khizarrm/LeetHub",
    image: leethub.src,
  },
];

const ProjectsSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-8 mt-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          console.log(project.image),
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
                {project.github && (
                  <Button onClick = {() => window.open(project.github)}variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-800 hover:text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
                {project.demo && (  
                  <Button onClick = {() => window.open(project.demo)}variant="ghost" size="sm" className="text-gray-300 hover:bg-gray-800 hover:text-white">
                    <Globe className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;