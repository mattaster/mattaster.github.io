"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Layout, Zap, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-navy-900 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
              Bridge the Gap Between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                Vision and Execution.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
              Fractional CMO and Strategic Advisory for companies ready to scale, but lacking the leadership to get there.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href="/contact" size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-900/20">
                Book a Consultation
              </Button>
              <Button
                href="/expertise"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600"
              >
                View Expertise
              </Button>
            </div>
          </motion.div>

          {/* Glassmorphism Card CTA / Social Proof Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 mx-auto max-w-4xl"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
              <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold mb-6">
                Trusted by leadership teams at
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for Logos */}
                <span className="text-xl font-bold text-white">[TechCorp]</span>
                <span className="text-xl font-bold text-white">[FinStart]</span>
                <span className="text-xl font-bold text-white">[GrowthIO]</span>
                <span className="text-xl font-bold text-white">[ScaleUp]</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <SectionWrapper className="bg-white">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">
            You have a product. You have sales. <br />
            <span className="text-slate-500">But your marketing engine is sputtering.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Growth has stalled. Your team is reactive, not proactive. You're spending money on ads, agencies, and tools, but you can't see the ROI. You don't need another "hacker"—you need a strategist who can own the number.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Methodology Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
              The MAster Methodology
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A proven framework to diagnose, prescribe, and execute.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: BarChart3,
                title: "1. Audit",
                desc: "Deep dive into your data, team, and tech stack to identify bottlenecks.",
              },
              {
                icon: Layout,
                title: "2. Strategy",
                desc: "Building the roadmap, positioning, and go-to-market plan for scalable growth.",
              },
              {
                icon: Zap,
                title: "3. Execution",
                desc: "Leading the charge, managing the team, and optimizing for peak performance.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-6 text-navy-900">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link
              href="/expertise"
              className="inline-flex items-center text-navy-900 font-semibold hover:text-blue-700 transition-colors"
            >
              Explore My Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
