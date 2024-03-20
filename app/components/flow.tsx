'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import FlowDark from "./serverRender/flow-dark";
import FlowLight from "./serverRender/flow-light";



export default function Flow() {
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true)
        }   
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme === "dark") {
            setDarkMode(true)
        }
        else {
            setDarkMode(false)
        }
    });
    }, [setDarkMode])


    return (
        <div className="flex flex-col items-center p-3 lg:p-28 gap-3 rounded-2xl">
            <p className="text-2xl md:text-4xl font-semibold font-georgiaSerif text-pretty border-b-4">Understanding the Process</p>
            {
                darkMode ?
                    <FlowDark />
                    : <FlowLight />
            }
            <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 justify-between bg-green-300 dark:bg-green-600 p-6 px-8 rounded-xl shadow-xl">
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold text-pretty">Sell Side</p>
                    <ol className="list-decimal">
                        <li className="text-md text-pretty">{`Feed data into the model for it to build the it's knowledge base and draw all the necessary information.`}</li>
                        <li className="text-md text-pretty">Answer necessary questions from the model then prompt the model to view how accounting changes affect company valuation.</li>
                        <li className="text-md text-pretty">List your company for sellers to find</li>
                    </ol>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold text-pretty">Buy Side</p>
                    <ol className="list-decimal">
                        <li className="text-md text-pretty">Set preferences on what type of company to buy, anything from the industry to business model</li>
                        <li className="text-md text-pretty">Gather candidate companies from the listings</li>
                        <li className="text-md text-pretty">Discuss aspects about the company that you either like or dislike, get access to their data, and negotiate a deal.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}