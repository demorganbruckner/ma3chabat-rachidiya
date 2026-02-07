"use client";

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export function StickyContactButton() {
    return (
        <Link
            href="/contact"
            className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center gap-2 group animate-bounce-slow"
        >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-bold">تواصل معنا</span>
        </Link>
    );
}
