"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header1() {



    const ContactButton = () => {
        const handleContact = () => {
        window.location.href = "mailto:khizarmalik@cmail.carleton.ca";
        };
    
        return <Button onClick={handleContact}>Contact Me</Button>;
    };

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 top-0 left-0 bg-transparent">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold">KM</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button variant="ghost" className="hidden md:inline" onClick={() => window.open('/resume.pdf', '_blank')}>
                        Download CV
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>
            </div>
        </header>
    );
}

export { Header1 };