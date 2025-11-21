import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const navigation = {
    main: [
        { name: "Expertise", href: "/expertise" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    social: [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/mattaster", // Placeholder
            icon: Linkedin,
        },
        {
            name: "Email",
            href: "mailto:matt@mastermarketing.com", // Placeholder
            icon: Mail,
        },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav
                    className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer"
                >
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link href={item.href} className="text-sm leading-6 text-slate-300 hover:text-white">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <Link key={item.name} href={item.href} className="text-slate-400 hover:text-slate-300">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>
                <div className="mt-10 text-center text-xs leading-5 text-slate-400">
                    &copy; {new Date().getFullYear()} MAster Marketing and Strategy LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
