"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, TrendingUp, GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function About() {
    return (
        <>
            {/* Hero / Intro */}
            <section className="bg-navy-900 py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        15+ Years of Mastering the Market
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 leading-relaxed"
                    >
                        I believe marketing isn't just about noise—it's about craftsmanship, data, and sustainable growth.
                        My journey has taken me from the trenches of agency life to the boardrooms of high-growth startups.
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Section */}
            <SectionWrapper className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                            Why "MAster" Marketing?
                        </h2>
                        <div className="space-y-4 text-slate-600 text-lg">
                            <p>
                                The name isn't just a play on words—it's a commitment to the craft. In a world of "growth hacks" and fleeting trends, I focus on the fundamentals that actually drive revenue.
                            </p>
                            <p>
                                <strong>Mastery means:</strong>
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Deep understanding of customer psychology.</li>
                                <li>Rigorous attention to data and analytics.</li>
                                <li>Unwavering focus on ROI, not vanity metrics.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-80 bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200"
                    >
                        {/* Placeholder Image */}
                        <div className="text-center p-6">
                            <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">📷</span>
                            </div>
                            <p className="text-slate-500 font-medium">[INSERT: Photo of Matt speaking at event]</p>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Career Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-16">
                        The Journey
                    </h2>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 space-y-12 md:space-y-0">
                        {[
                            {
                                year: "2020 - Present",
                                role: "Founder & Fractional CMO",
                                company: "MAster Marketing and Strategy",
                                desc: "Partnering with B2B/B2C founders to build scalable marketing engines.",
                                icon: Award,
                            },
                            {
                                year: "2016 - 2020",
                                role: "VP of Marketing",
                                company: "[In-House Tech Co]",
                                desc: "Led a team of 15, grew ARR from $5M to $25M, orchestrated rebrand.",
                                icon: TrendingUp,
                            },
                            {
                                year: "2012 - 2016",
                                role: "Senior Strategist",
                                company: "[Top Tier Agency]",
                                desc: "Managed multi-million dollar ad spends for Fortune 500 clients.",
                                icon: Briefcase,
                            },
                            {
                                year: "2008 - 2012",
                                role: "Marketing Specialist",
                                company: "[Early Career]",
                                desc: "Cut my teeth on SEO, content, and email marketing.",
                                icon: GraduationCap,
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative md:grid md:grid-cols-5 md:gap-8 items-start group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] md:left-auto md:right-0 md:col-start-2 md:col-end-3 top-0 w-4 h-4 rounded-full bg-white border-4 border-navy-900 group-hover:scale-125 transition-transform" />

                                {/* Date (Left on desktop) */}
                                <div className="pl-8 md:pl-0 md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
                                    <span className="text-navy-600 font-bold text-lg">{item.year}</span>
                                </div>

                                {/* Content (Right on desktop) */}
                                <div className="pl-8 md:pl-0 md:col-span-3 md:ml-8 pb-12 md:pb-0">
                                    <h3 className="text-xl font-bold text-navy-900">{item.role}</h3>
                                    <p className="text-slate-500 font-medium mb-2">{item.company}</p>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
