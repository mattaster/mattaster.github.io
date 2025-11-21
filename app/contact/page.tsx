import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { Mail, Linkedin, Calendar } from "lucide-react";

export const metadata = {
    title: "Contact & Booking",
    description:
        "Book a consultation with Matt Aster. Discuss your marketing strategy and fractional CMO needs.",
};

export default function Contact() {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-navy-900 sm:text-6xl">
                            Get in Touch
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Ready to elevate your marketing strategy? Let&apos;s discuss how I can help your business grow.
                        </p>
                    </div>
                </div>
            </div>

            <SectionWrapper className="pt-0">
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                    <div className="bg-slate-50 rounded-2xl p-8 sm:p-10">
                        <h3 className="text-2xl font-serif font-bold tracking-tight text-navy-900">
                            Book a Discovery Call
                        </h3>
                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Schedule a free 30-minute consultation to discuss your current challenges and see if we&apos;re a good fit.
                        </p>
                        <div className="mt-8">
                            <Button href="https://calendly.com/" size="lg" className="w-full sm:w-auto">
                                <Calendar className="mr-2 h-5 w-5" />
                                Schedule via Calendly
                            </Button>
                        </div>
                    </div>

                    <div className="bg-navy-900 rounded-2xl p-8 sm:p-10 text-white">
                        <h3 className="text-2xl font-serif font-bold tracking-tight text-white">
                            Contact Information
                        </h3>
                        <dl className="mt-8 space-y-6 text-base leading-7 text-slate-300">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-slate-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-white" href="mailto:matt@mastermarketing.com">
                                        matt@mastermarketing.com
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">LinkedIn</span>
                                    <Linkedin className="h-7 w-6 text-slate-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-white" href="https://linkedin.com/in/mattaster">
                                        linkedin.com/in/mattaster
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
