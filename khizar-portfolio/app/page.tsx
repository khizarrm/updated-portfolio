"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/Hero";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { User, Briefcase, FileText } from 'lucide-react'
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern"
import { HyperText } from "@/components/ui/hyper-text"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import ProjectGrid from "@/components/sections/ProjectGrid";

export default function Home() {

  const navItems = [
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  return (
    <div className="h-screen bg-background p-8 flex-col items-center justify-center">
      <div className="p-8">
        <NavBar className="p-8" items={navItems} />
      </div>


      <Hero />
      <div className="flex justify-center items-center p-8">
        <HyperText
          className="text-4xl flex items-center justify-center font-bold text-foreground"
          text="My Projects"
        />
      </div>
  


    <div >
      <ProjectGrid />
    </div>

    <div className="p-8 block w-full">
      <StackedCircularFooter />
    </div>

    </div>
  );
}
