'use client'

import { RefObject, useRef, useEffect, useState } from "react"

export function useIsVisible(ref: RefObject<Element>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {

        const options = {
            root: null, 
            rootMargin: "0px",
            threshold: 0.4
        }
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
            
        }, options );
      
        observer.observe(ref.current!);
        return () => {
            observer.disconnect();
        };
    }, [ref, isIntersecting]);
  
    return isIntersecting;
  }

export default function DemoBubbles({ heading, text, x_prop, y_prop, w_prop, h_prop}: { heading: string, text: string, x_prop: number, y_prop: number, w_prop: number, h_prop: number}) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    const [x, setX] = useState(x_prop)
    const [y, setY] = useState(y_prop)
    const [w, setW] = useState(w_prop)
    const [h, setH] = useState(h_prop)
    const [useWindow, setUseWindow] = useState(true) 
    
  
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 500) {
                setX(-1)
                setY(35)
                setW(80)
                setH(55)
                setUseWindow(false)
            } else {
                setX(x_prop)
                setY(y_prop)
                setW(w_prop)
                setH(h_prop)
                setUseWindow(true)
            }
        }
        
        window.addEventListener("resize", handleResize)
        
        handleResize()
        
        return () => { 
            window.removeEventListener("resize", handleResize)
        }
    }, [setX, setY, setW, setH, setUseWindow, x_prop, y_prop, h_prop, w_prop])


    return (
        <div ref={ref} className={`flex flex-row flex-shrink ${useWindow ? "min-h-[98vh]" : "h-[51vh] sticky top-[49vh]"}`} style={{marginLeft: `${x+2}vw`, marginTop: `${y}vh`}}>
            <div
                className={`flex-none bg-white p-2 rounded-lg transition-opacity ease-in duration-1200 shadow-2xl ${isVisible ? `opacity-100` : "opacity-0"}`}
                style={{
                    width: `${w}vw`, height: `${h}vh`,
                    position: 'sticky',
                    top: `${y+8}vh`
                }}
            >
                <div className="flex flex-col overflow-hidden h-full gap-2 p-3 rounded-lg bg-gray-100 shadow-xl">
                    <div className="flex flex-row gap-2 items-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-600 via-violet-600 to-black">
                            <p className="flex-initial text-xl md:text-3xl font-bold font-georgiaSerif text-pretty">{heading}</p>
                        </span>
                    </div>
                    
                    <p className="flex-none text-wrap text-sm md:text-base lg:text-lg text-pretty text-black leading-tight">{text}</p>
                </div>
            </div>
        </div>
    );
}