import SectionWrapper from "@/components/ui/SectionWrapper";
import { Check } from "lucide-react";

export const metadata = {
    title: "Expertise & Services",
    description:
        "Fractional CMO services, strategic advisory, and marketing leadership for B2B and B2C companies.",
};

const services = [
    {
        title: "Fractional CMO",
        description:
            "Full-stack marketing leadership on a retainer basis. I integrate with your leadership team to drive strategy and execution.",
        features: [
            "Marketing Strategy & Roadmap",
            "Team Management & Hiring",
            "Budgeting & Forecasting",
            "Go-to-Market Strategy",
        ],
    },
    {
        title: "Strategic Advisory",
        description:
            "High-level guidance for founders and CEOs who need a sounding board for critical marketing decisions.",
        features: [
            "Brand Positioning",
            "Market Expansion Strategy",
            "Audit & Optimization",
            "Vendor Selection",
        ],
    },
    {
        title: "Project-Based Consulting",
        description:
            "Focused engagements to solve specific marketing challenges or launch new initiatives.",
        features: [
            "Website Redesign Leadership",
            "CRM & Martech Implementation",
            "Product Launch Campaigns",
            "Sales & Marketing Alignment",
        ],
    },
];

export default function Expertise() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Marketing Consulting",
        provider: {
            "@type": "Organization",
            name: "MAster Marketing and Strategy",
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Consulting Services",
            itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                },
            })),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <div className="bg-navy-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl">
                            Expertise & Services
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Flexible engagement models tailored to your company's stage and needs.
                        </p>
                    </div>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.title} className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-slate-200 xl:p-10 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-serif font-bold tracking-tight text-navy-900">
                                {service.title}
                            </h3>
                            <p className="mt-4 flex-auto text-base leading-7 text-slate-600">
                                {service.description}
                            </p>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-navy-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
