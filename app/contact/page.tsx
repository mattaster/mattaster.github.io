"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Calendar, ArrowRight, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function Contact() {
    return (
        <>
            <section className="bg-navy-900 py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        Let's Discuss Your Growth Strategy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 leading-relaxed"
                    >
                        Ready to scale? Here's how we'll work together.
                    </motion.p>
                </div>
            </section>

            <SectionWrapper className="bg-white">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* The Process */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
                            What to Expect
                        </h2>

                        <div className="space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Book a Discovery Call",
                                    desc: "We'll spend 30 minutes discussing your current challenges and 12-month goals. No pitch, just a conversation.",
                                    icon: Calendar,
                                },
                                {
                                    step: "02",
                                    title: "Strategy Roadmap",
                                    desc: "If there's a fit, I'll provide a high-level roadmap proposal outlining how we can bridge the gap between vision and execution.",
                                    icon: MessageSquare,
                                },
                                {
                                    step: "03",
                                    title: "Partnership Kickoff",
                                    desc: "We align on the engagement model (Retainer or Project) and I get to work immediately.",
                                    icon: ArrowRight,
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center font-bold text-lg border border-navy-100">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Options */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 h-fit"
                    >
                        <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
                        <p className="text-slate-600 mb-8">
                            I accept a limited number of advisory clients each quarter to ensure high-touch service.
                        </p>

                        <div className="space-y-6">
                            <Button href="mailto:matt@mastermarketing.com" size="lg" className="w-full justify-start pl-6">
                                <Mail className="mr-3 h-5 w-5" />
                                matt@mastermarketing.com
                            </Button>

                            <Button href="https://linkedin.com/in/mattaster" variant="outline" size="lg" className="w-full justify-start pl-6 bg-white">
                                <Linkedin className="mr-3 h-5 w-5 text-[#0077b5]" />
                                Connect on LinkedIn
                            </Button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm text-slate-500">
                                Based in [City, State]. Serving clients globally.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </SectionWrapper>
        </>
    );
}
