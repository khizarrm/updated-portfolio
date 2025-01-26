"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { User, Briefcase, FileText } from 'lucide-react'
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern"
import { HyperText } from "@/components/ui/hyper-text"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

export default function Home() {

  const navItems = [
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  const socials = [
    {
      name: "Instagram",
      image: "https://link-hover-lndev.vercel.app/instagram.png",
    },
    {
      name: "LinkedIn",
      image: "https://link-hover-lndev.vercel.app/linkedin.png",
    },
    {
      name: "Spotify",
      image: "https://link-hover-lndev.vercel.app/spotify.png",
    },
    {
      name: "TikTok",
      image: "https://link-hover-lndev.vercel.app/tiktok.png",
    },
  ]

  return (
    <div className="h-screen bg-black p-8 flex-col items-center justify-center">

      <div className="p-8">
      <NavBar items={navItems} />
      </div>

      <Card className="w-full h-[900px] bg-black/[0.96] relative overflow-hidden">
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-9xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, I'm Khizar
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>

    <div className="bg-black-500 flex items-center justify-center p-8">
      <HyperText
        className="text-4xl font-bold text-black dark:text-white"
        text="My Projects"
      />
    </div>

    <div className="flex justify-center content-center items-center grid grid-cols-3 gap-4">
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
    </div>

    <div className="p-8 bg-black block w-full">
      <StackedCircularFooter />
    </div>

    </div>
  );
}
