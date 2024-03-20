import Image from "next/image"
import DownArrow from "./client/down-arrow"
import EmailButton from "./client/email-button"
import LandingImage from "./client/landing-image"

export default function Landing() {
    return (
        <div className="flex flex-row-reverse w-screen h-screen items-center relative z-0">
            <LandingImage />
            <div className="absolute inset-0 w-6/12 md:2/12 flex flex-col justify-center z-10">
                <span className="flex-1 ml-10 md:ml-40 mt-40 "></span>
                <p className="ml-10 md:ml-40 text-4xl md:text-5xl lg:text-7xl font-bold font-georgiaSerif text-pretty">A Focus on Truth for <i>Valuation+</i></p>
                <p className="ml-10 md:ml-40 text-sm md:text-xl lg:w-9/12 font-apple text-pretty"><b><i>Quotable</i></b> provides each company with AI enabled insights to streamline the acquisition process for both buyers and sellers.</p>
                <EmailButton text="Sign Up for Email Updates" />
                <DownArrow />
            
            </div>

        </div>
    )
}