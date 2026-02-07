"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export function ProductGallery({ images }: { images: string[] }) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="space-y-4 top-24 md:sticky">
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden bg-white border border-stone-100 shadow-sm">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[activeImage]}
                            alt="Product Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={clsx(
                            "relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0",
                            activeImage === idx ? "border-primary ring-2 ring-primary/20 scale-105" : "border-stone-100 opacity-70 hover:opacity-100 hover:border-primary/50"
                        )}
                    >
                        <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}
