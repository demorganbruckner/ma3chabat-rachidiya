"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    slug: string;
}

export function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 text-right relative">
                <h3 className="font-bold text-xl mb-2 text-primary group-hover:text-primary-hover transition-colors">{product.name}</h3>
                <p className="text-stone-500 text-sm line-clamp-2 mb-6 leading-relaxed">{product.description}</p>
                <Link href={`/product/${product.slug}`} className="block">
                    <Button variant="outline" className="w-full group/btn justify-between">
                        <span>اكتشف المنتج</span>
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
