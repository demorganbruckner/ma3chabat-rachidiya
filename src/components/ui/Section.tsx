import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={twMerge("py-16 md:py-24 relative overflow-hidden", className)}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
