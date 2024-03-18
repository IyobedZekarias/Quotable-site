'use client'

import { useState, useEffect, useRef, RefObject } from "react"


function useOutsideAlerter(ref: RefObject<Element>, handleClose: CallableFunction) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}



function EmailModal(props: { openEmailModal: CallableFunction }) {
    const [email, setEmail] = useState("")
    const [startTime, setStartTime] = useState(Date.now())
    const [totTime, setTotTime] = useState(Date.now())
    const [animation, setAnimation] = useState("transition-opacity ease-in delay-0 duration-150 md:opacity-0 active:opacity-100")
    const wrapperRef = useRef(null);


    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        if (!animation.includes('delay-0')) {
            sleep(300).then(() => {
                props.openEmailModal(false)
            })
        }
        
    }, [animation, props])

    useEffect(() => {
        if (startTime != totTime) {
            setAnimation(`transition-opacity ease-in delay-[${totTime}ms] duration-150 opacity-0`)
        }
    }, [totTime, startTime])

    const handleClose = () => {
        setTotTime(Date.now() - startTime)
    }

    useOutsideAlerter(wrapperRef, handleClose);
    
    return (
        <div
            className={`flex flex-col justify-center items-center m-0 my-3 ml-10 md:ml-40 ${animation}`}
            onMouseEnter={() => {
                setStartTime(Date.now())
                setTotTime(Date.now())
                setAnimation("transition-opacity ease-in delay-0 duration-150 opacity-100")
            }}
            ref={wrapperRef}
        >
            <div className="flex flex-col justify-center items-center gap-5 border-4 p-5 rounded-lg border-black bg-gradient-to-bl from-slate-950 from-55% to-slate-700">
                <p className="lg:text-4xl md:text-2xl font-bold font-georgiaSerif text-white">Enter Your Email</p>
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
                        className="flex-auto text-white bg-green-600 hover:bg-gradient-to-br hover:from-green-600 hover:from-30% hover:to-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-no-wrap me-2 mb-2 hover:animate-wiggle hover:animate-infinite hover:animate-duration-[400ms] hover:animate-ease-in-out"
                        onClick={e => {
                            

                            e.preventDefault()
                            handleClose()
                        }}>
                        Sign Up
                    </button>
                    <button
                        type="submit"
                        className="flex-auto text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
                        onClick={e => {
                            e.preventDefault()
                            handleClose()
                        }}>
                        Cancel
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default function EmailButton(props: { text: string }) {
    const [emailModal, openEmailModal] = useState(false)
    return (
        <>
            {
                emailModal && <EmailModal openEmailModal={openEmailModal}/>
            }
            {!emailModal && <button
                className="transition-all ease-in-out bg-green-600 hover:bg-green-700 rounded-lg hover:rounded-sm duration-500 my-3 p-2 ml-10 md:ml-40 mb-48"
                onClick={e => {
                    e.preventDefault()
                    openEmailModal(true)
                }}>
                <p className="text-white mono">{props.text}</p>
            </button>}
        </>
    )
}