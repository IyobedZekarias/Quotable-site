'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

export default function LandingImage() {
    const [scrollLevel, setScroll] = useState(0)

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        if (scrollPosition < 20) {
            setScroll(0)
        } else if (scrollPosition < 40) {
            setScroll(1)
        } else if (scrollPosition < 60) {
            setScroll(2)
        } else if (scrollPosition < 80) {
            setScroll(3)
        } else if (scrollPosition < 100) {
            setScroll(4)
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Image
            src="/logo.svg"
            alt=""
            width={50}
            height={50}
            className={`w-7/12 opacity-50 ${scrollLevel == 0 ? "blur-lg" :
                scrollLevel == 1 ? "blur-md" :
                    scrollLevel == 2 ? "blur" :
                        scrollLevel == 3 ? "blur-sm" : "blur-none"} transition-blur ease-in-out delay-[3000ms] active:blur-none`}
            priority
        />
    )
}