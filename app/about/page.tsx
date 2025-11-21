import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";

export const metadata = {
    title: "About Matt Aster",
    description:
        "Learn more about Matt Aster, founder of MAster Marketing and Strategy. Experienced marketing leader and strategic advisor.",
};

export default function About() {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-navy-900 sm:text-6xl">
                            About Matt Aster
                        </h1>
                        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-700 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    I founded MAster Marketing and Strategy with a simple mission: to provide high-growth companies with the executive marketing leadership they need, without the overhead of a full-time C-suite hire.
                                </p>
                                <p className="mt-8">
                                    With over a decade of experience leading marketing teams in B2B SaaS and tech-enabled services, I bring a data-driven, revenue-focused approach to every engagement. I don't just advise; I help you build the systems and teams that drive sustainable growth.
                                </p>
                            </div>
                            <div>
                                <p>
                                    My philosophy is rooted in the belief that marketing is not a cost center, but a revenue engine. By aligning marketing initiatives with business objectives, we can create measurable impact that resonates with your board and investors.
                                </p>
                                <p className="mt-8">
                                    Whether you need to overhaul your go-to-market strategy, optimize your demand generation engine, or prepare for a fundraise, I partner with you to navigate the complexities of scaling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
