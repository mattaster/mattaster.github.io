"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Target, Users, Rocket } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function Expertise() {
    return (
        <>
            <section className="bg-navy-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl">
                            Expertise & Engagement Models
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Flexible partnership tiers designed to meet you where you are—whether you need a full-time leader, a strategic guide, or a tactical specialist.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper className="bg-slate-50">
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Tier 1: Fractional CMO (Featured - Spans 2 cols on large screens) */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="md:col-span-2 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-navy-900 rounded-lg text-white">
                                    <Users size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-navy-900">Fractional CMO</h2>
                            </div>

                            <p className="text-xl font-serif text-navy-800 italic mb-6">
                                "I join your Slack, I lead your standups, I own the number."
                            </p>

                            <p className="text-slate-600 mb-8 max-w-lg">
                                For companies that need a marketing executive but aren't ready for a full-time hire. I embed myself in your organization to drive strategy, manage the team, and execute on revenue goals.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Team Leadership & Mentorship",
                                    "Budget Management & P&L Ownership",
                                    "Agency Auditing & Management",
                                    "Marketing Ops & Tech Stack",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-700">
                                        <Check className="text-green-600 h-5 w-5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Button href="/contact" size="lg" className="w-full sm:w-auto">
                                Inquire for Availability
                            </Button>
                        </div>
                    </motion.div>

                    {/* Tier 2: Strategic Advisor */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-navy-900 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-white/10 rounded-lg text-white">
                                    <Target size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Strategic Advisor</h2>
                            </div>

                            <p className="text-lg font-serif text-slate-300 italic mb-6">
                                "High-level guidance for Founders & CEOs."
                            </p>

                            <ul className="space-y-4 mb-8 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <Check className="text-blue-400 h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <span>Positioning & Messaging</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="text-blue-400 h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <span>Go-to-Market Strategy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="text-blue-400 h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <span>Pitch Deck Refinement</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative z-10">
                            <Button href="/contact" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-900">
                                Book Advisory Call
                            </Button>
                        </div>
                    </motion.div>

                    {/* Tier 3: Growth Projects */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="flex-shrink-0 p-4 bg-blue-50 rounded-full text-blue-600">
                            <Rocket size={32} />
                        </div>

                        <div className="flex-grow text-center md:text-left">
                            <h2 className="text-2xl font-bold text-navy-900 mb-2">Growth Projects</h2>
                            <p className="text-slate-600 mb-4">
                                Tactical injection of expertise for specific, high-impact initiatives. Perfect for when you need a problem solved fast.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {["Website Relaunches", "CRM Implementation", "Audit & Roadmap", "Campaign Launch"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <Button href="/contact" variant="secondary">
                                Discuss a Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </SectionWrapper>
        </>
    );
}
