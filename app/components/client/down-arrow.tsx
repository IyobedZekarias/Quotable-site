'use client'
import { useState, useEffect } from "react"


export default function DownArrow() {
    const [pulse, setPulse] = useState(true)

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        if (scrollPosition == 0.0) {
            setPulse(true)
        } else {
            setPulse(false)
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
        <p className={`flex items-end self-end flex-1 mb-10 ${pulse ? "animate-fade animate-infinite animate-duration-2000 animate-ease-in-out" : "animate-fade animate-once animate-duration-2000 animate-ease-out animate-reverse"}`}>▼</p>
    )
}