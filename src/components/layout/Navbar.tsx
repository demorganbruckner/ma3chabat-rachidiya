"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'منتجاتنا', href: '/shop' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => setIsOpen(false), [pathname]);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur-md shadow-sm py-2 border-stone-100"
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden p-2 text-stone-800 hover:bg-stone-100 rounded-full"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="relative h-12 w-32 md:h-14 md:w-40">
                        <Image
                            src="/rachidiya logo.png"
                            alt="Ma3chabat Rachidiya"
                            fill
                            className="object-contain object-right"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-primary relative group",
                                    pathname === link.href ? "text-primary" : "text-stone-600"
                                )}
                            >
                                {link.name}
                                <span className={clsx(
                                    "absolute -bottom-1 right-0 h-0.5 bg-primary transition-all duration-300",
                                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="https://wa.me/212600000000" target="_blank">
                            <Button size="sm" className="gap-2">
                                <Phone className="w-4 h-4" />
                                <span>اطلب عبر واتساب</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Cart/Contact Icon (Optional) */}
                    <Link href="/shop" className="md:hidden p-2 text-stone-800">
                        <ShoppingBag className="w-6 h-6" />
                    </Link>

                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 md:hidden shadow-2xl p-6 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-lg font-bold text-primary">القائمة</span>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-stone-100 rounded-full">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={clsx(
                                            "text-lg font-medium p-2 rounded-lg transition-colors",
                                            pathname === link.href ? "bg-primary/10 text-primary" : "text-stone-600 hover:bg-stone-50"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-auto">
                                <Link href="https://wa.me/212600000000" target="_blank" className="block">
                                    <Button className="w-full gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>تواصل معنا</span>
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
