import Image from "next/image";
import DemoBubbles from "./client/demo-bubbles";
import EmailBox from "./client/email_box";

export default function Demo() {
    // if thinner than 500 will have to make adjustments
    const bubbles = [
        {
            heading: "Prompting",
            text: "Enter prompts to view the effects of adjustments",
            x: 53,
            y: 8,
            w: 30,
            h: 20,
        },
        {
            heading: "Valuation+ What?",
            text: "This includes due dilligence for a QoE plus ratios, and is expanded upon with the ability to visualize how changes in accounting approaches would affect the Valuation. Additionally, the model will query the company to find more information than ever before",
            x: 5,
            y: 15,
            w: 80,
            h: 23,
        },
        {
            heading: "Adjusted EBIDTA",
            text: "The adjusted EBIDTA to help better measure a company. This will be used as the basis for valuations",
            x: 2,
            y: 35,
            w: 35,
            h: 28,
        },
        {
            heading: "Calculations & Ratios",
            text: "Ratios like EV/ADJEBIDTA allow for deeper understandings of growth for the company on a moving basis. These values are calculated using the adjusted EBIDTA",
            x: 45,
            y: 53,
            w: 45,
            h: 30.5,
        },
        // {
        //     heading: "Model Explanations",
        //     text: "To give a better understanding of what's happening the model will explain the process in the context of the company",
        //     x: 25,
        //     y: 55,
        //     w: 45,
        //     h: 25.5,
        // },
        // {
        //     heading: "Delta",
        //     text: "Clearly see the delta between the changes that you make and the company as they reported",
        //     x: 61,
        //     y: 40,
        //     w: 30,
        //     h: 30,
        // },
        {
            heading: "AND ALOT MORE",
            text: "We have brought together a suite of AI enabled tools to create a focused source of truth. For any merger or acquisition Quotable drives not only actionable insights but also the ability for a buyer and seller to be on the same page from day one without additional parties involved. Follow along to find out when these tools will be available to you!",
            x: 23,
            y: 30,
            w: 45,
            h: 49,
        }
    ]
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-green-500 bg-opacity-25 shadow-inner">
            <span className="sticky top-[8em] w-11/12 p-3 mx-4 mb-10 bg-gradient-to-br from-green-600 via-violet-800 to-black rounded-lg z-1 shadow-2xl">
                <Image
                    src="/app_design.svg"
                    alt=""
                    width={1920}
                    height={1080}
                    className="w-12/12 rounded-lg"
                    priority
                    />
            </span>
            <div className="inset-0 h-full z-10">
                {bubbles.map((bubble, key) => {
                    return(
                        <DemoBubbles
                            key={key}
                            heading={bubble.heading}
                            text={bubble.text}
                            x_prop={bubble.x}
                            y_prop={bubble.y}
                            w_prop={bubble.w}
                            h_prop={bubble.h}
                        />
                    )
                })}
            </div>
        </div>
        
    );
}