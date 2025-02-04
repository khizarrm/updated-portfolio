"use client"

import Image from "next/image";
import { Header1 } from "@/components/ui/header";
import { GridBackground } from "@/components/ui/glowing-card";
import GitHubGraph from "@/components/ui/githubGraph";
import ProjectsSection from "@/components/ui/projects";
import Footer from "@/components/ui/footer";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-noise-gradient">
      <Header1 />
      <div className="container mx-auto">
        <GridBackground 
          title="Khizar Malik" 
          description="an aspiring and anbitious software engineer" 
          className="mt-20 py-48 flex justify-center items-center"
        />
      </div>
      <div className="container flex items-center justify-center mx-auto mt-8">
        <GitHubGraph></GitHubGraph> 
      </div>
      <ProjectsSection></ProjectsSection>
      <Footer></Footer>
    </div>
  );
}