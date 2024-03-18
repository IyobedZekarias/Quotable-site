'use client'

import { useState } from "react";

export default function EmailBox() {
    const [email, setEmail] = useState("")
    return (
        <div className={`min-h-[25vh] min-w-[35vw] my-[45vh] p-10 flex flex-col justify-center items-center bg-white dark:bg-gray-800 shadow-2xl z-10 rounded-lg relative z-100`}>
            <div className="flex flex-col justify-center items-center gap-5 border-4 p-5 rounded-lg border-black bg-gradient-to-br from-slate-950 from-55% to-slate-700 shadow-2xl">
                <p className="text-4xl font-bold font-georgiaSerif text-white">Enter Your Email</p>
                <input
                    name="email"
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com"
                    value={email}
                />
                <div className="flex gap-1 w-full">
                    <button
                        type="submit"
                        className="flex-auto text-white bg-green-600 hover:bg-gradient-to-br hover:from-green-600 hover:from-30% hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:animate-wiggle hover:animate-infinite hover:animate-duration-[400ms] hover:animate-ease-in-out"
                        onClick={e => {
                            e.preventDefault()
                        }}>
                        Sign Up
                    </button>
                    <button
                        type="submit"
                        className="flex-auto text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
                        onClick={e => {
                            e.preventDefault()
                        }}>
                        Cancel
                    </button>
                </div>
                
            </div>
        </div>
    );
}