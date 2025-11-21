import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({
    children,
    className,
    id,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",
                className
            )}
        >
            {children}
        </section>
    );
}
