import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-sm",
            secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
            outline:
                "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900",
            ghost: "hover:bg-slate-100 text-slate-900",
        };

        const sizes = {
            sm: "h-9 px-3 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        const classes = cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            const { type, disabled, ...rest } = props;
            return (
                <Link href={href} className={classes} {...rest as any}>
                    {props.children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={classes} {...props} />
        );
    }
);

Button.displayName = "Button";

export default Button;
