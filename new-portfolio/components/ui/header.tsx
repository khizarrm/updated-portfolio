"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "About",
            href: "/about",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 top-0 left-0 bg-transparent">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <div className="flex justify-start gap-4 flex-row">
                        {navigationItems.map((item) => (
                            <Link href={item.href} key={item.title}>
                                <Button variant="ghost">{item.title}</Button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold">KM</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button variant="ghost" className="hidden md:inline">
                        Download CV
                    </Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button>Contact Me</Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex justify-between items-center"
                                >
                                    <span className="text-lg">{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };