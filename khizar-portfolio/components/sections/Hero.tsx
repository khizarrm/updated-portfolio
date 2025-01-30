import { Card } from "../ui/card";
import { SplineScene } from "../ui/splite";
import { Spotlight } from "../ui/spotlight";

export default function Hero(){
    return (
        <Card className="w-full h-[900px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi, I'm Khizar
          </h1>
          <p className="mt-4 text-neutral-300 max-w-full">
          An ambitious Computer Science student specializing in AI and full-stack development. Passionate about exploring cutting-edge technologies and building innovative solutions. Currently seeking Winter 2025 co-op opportunities to make meaningful contributions in tech.
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
    )
}