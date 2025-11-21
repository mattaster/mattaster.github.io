import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata = {
  title: "Fractional CMO & Strategic Marketing Advisory",
  description:
    "Drive sustainable growth with expert fractional CMO services. Matt Aster helps companies scale through strategic marketing leadership.",
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matt Aster",
    jobTitle: "Fractional CMO",
    url: "https://mattaster.github.io",
    sameAs: ["https://linkedin.com/in/mattaster"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <div className="hidden sm:mb-10 sm:flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-white/10 hover:ring-white/20">
                Accepting new advisory clients for Q4 2025.{" "}
                <Link href="/contact" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Get in touch <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl">
              Strategic Marketing Leadership for Growth-Stage Companies
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I help B2B and B2C companies scale revenue, optimize marketing operations, and build high-performance teams as a Fractional CMO and Strategic Advisor.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/contact" size="lg">
                Book a Consultation
              </Button>
              <Link href="/expertise" className="text-sm font-semibold leading-6 text-white">
                View Expertise <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-navy-700">Why Partner with a Fractional CMO?</h2>
          <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-navy-900 sm:text-4xl">
            Executive Expertise, Flexible Engagement
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Get the strategic vision and leadership of a seasoned CMO without the full-time headcount cost. I bridge the gap between strategy and execution.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-navy-900">
                <TrendingUp className="h-5 w-5 flex-none text-navy-600" aria-hidden="true" />
                Revenue Growth
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">
                  Align marketing strategies with business goals to drive measurable revenue growth and ROI.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-navy-900">
                <Users className="h-5 w-5 flex-none text-navy-600" aria-hidden="true" />
                Team Leadership
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">
                  Mentor and manage your existing marketing team, or help you build one from scratch.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-navy-900">
                <CheckCircle2 className="h-5 w-5 flex-none text-navy-600" aria-hidden="true" />
                Operational Efficiency
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">
                  Streamline processes, select the right martech stack, and eliminate wasted spend.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </SectionWrapper>
    </>
  );
}
