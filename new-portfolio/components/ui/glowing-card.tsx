"use client" 

import * as React from "react"
import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  title: string
  description: string
  showAvailability?: boolean
  className: string
}

export function GridBackground({
  title,
  description,
  showAvailability = true,
  className,
}: GridBackgroundProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'px-10 py-20 mt-12 rounded-md relative mx-18 flex items-center justify-center overflow-hidden',
        className
      )}
      style={{
        backgroundColor: 'hsl(199 10% 8% / 0.97)',
        backgroundSize: '100% 100%',
      }}
    >
      
      {/* Animated grid pattern that follows mouse */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(hsla(199, 89%, 48%, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsla(199, 89%, 48%, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div 
        className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-primary z-10 bg-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `
        }}
      />

      <div 
        className="absolute inset-0 border-2 rounded-md"
        style={{
          animation: 'border-color-change 6s linear infinite',
          boxShadow: '0 0 40px hsla(199, 89%, 48%, 0.07) inset'
        }}
      />

      <div className="relative z-20 text-center max-w-7xl">
        <h1 className='text-6xl font-bold'>{title}</h1>
        {description && (
          <p className='text-md mt-5 text-gray-300'>{description}</p>
        )}
        
        <div className="flex justify-center gap-6 mt-8">
          {/* Your existing social icons */}
        </div>

        {showAvailability && (
          <div className="available-now text-[#20bb5a] text-sm flex items-center justify-center mt-5">
            <div className="w-2 h-2 bg-[#20bb5a] rounded-full inline-block mr-2 animate-pulse shadow-[0_0_8px_#20bb5a]" />
            Call Now
          </div>
        )}
      </div>
    </div>
  )
}