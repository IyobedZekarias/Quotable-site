'use client'

import { RefObject, useRef, useEffect, useState } from "react"

export function useIsVisible(ref: RefObject<Element>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {

        const options = {
            root: null, 
            rootMargin: "0px",
            threshold: 0.2
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (isIntersecting === false) {
                setIntersecting(entry.isIntersecting)
            }
        }, options );
      
        observer.observe(ref.current!);
        return () => {
            observer.disconnect();
        };
    }, [ref, isIntersecting]);
    
    return isIntersecting;
}


export default function Why_Animated({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);

    return (
        <div ref={ref} className="h-[80vh] mt-[20vh] mb-[25vh]">
            {isVisible && 
            <div className="bg-green-300 dark:bg-green-800 flex flex-col justify-around px-5 pt-3 pb-10 ml-10 mr-10 animate-fade-up animate-once animate-duration-[1500ms] animate-ease-out animate-normal rounded-xl shadow-xl">
                {children}
            </div>
            }
        </div>
        
    );
}