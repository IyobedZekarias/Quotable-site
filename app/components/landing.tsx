import Image from "next/image"
import DownArrow from "./client/down-arrow"
import EmailButton from "./client/email-button"

export default function Landing() {
    return (
        <div className="flex flex-row-reverse w-screen h-screen items-center relative z-0">
            <Image
                src="/logo.svg"
                alt=""
                width={50}
                height={50}
                className="w-7/12 opacity-50 blur-lg transition-blur ease-in-out delay-[3000ms] hover:blur-none active:blur-none"
                priority
            />
            <div className="absolute inset-0 w-6/12 md:2/12 flex flex-col justify-center z-10">
                <span className="flex-1 ml-10 md:ml-40 mt-40 "></span>
                <p className="ml-10 md:ml-40 text-4xl md:text-5xl lg:text-7xl font-bold font-georgiaSerif text-pretty">A Focus on Truth for <i>Valuation+</i></p>
                <p className="ml-10 md:ml-40 text-sm md:text-xl lg:w-9/12 font-apple text-pretty">The AI + Knowledge Graph system enables <i>Quotable</i> insights for all parties involved in the selling of a company</p>
                <EmailButton text="Sign Up for Email Updates" />
                <DownArrow />
            
            </div>

        </div>
    )
}