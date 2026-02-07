import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ProductGallery } from '@/components/features/ProductGallery';
import { Phone, CheckCircle, ShieldCheck, Truck, Package } from 'lucide-react';

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug);
    if (!product) notFound();

    return (
        <main className="min-h-screen bg-stone-50 rtl-grid">
            <Navbar />
            <div className="h-24 md:h-32 bg-stone-900" /> {/* Spacer */}

            <Section className="py-12">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <ProductGallery images={product.images || [product.image]} />

                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-4 border-b border-stone-200 pb-8">
                            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">{product.name}</h1>
                            <div className="flex items-center justify-between">
                                <p className="text-3xl text-primary font-bold">{product.price} درهم</p>
                                <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">متوفر حالياً</span>
                            </div>
                        </div>

                        <div className="prose prose-stone leading-relaxed text-lg text-stone-600">
                            <p className="font-medium text-stone-800">{product.description}</p>
                            <div className="whitespace-pre-line mt-6 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                                {product.longDescription}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: <CheckCircle className="text-green-600 w-5 h-5" />, text: "منتج طبيعي 100% ومضمون" },
                                { icon: <Truck className="text-blue-600 w-5 h-5" />, text: "توصيل سريع لجميع المدن المغربية" },
                                { icon: <ShieldCheck className="text-stone-600 w-5 h-5" />, text: "دفع آمن عند الاستلام" },
                                { icon: <Package className="text-amber-600 w-5 h-5" />, text: "تغليف سري ومحكم" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-stone-700 bg-white px-4 py-3 rounded-xl border border-stone-50">
                                    {item.icon}
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="sticky bottom-4 md:static z-20 pt-4">
                            <a href={`https://wa.me/212600000000?text=أريد طلب ${product.name} - السعر ${product.price} درهم`} target="_blank">
                                <Button size="lg" className="w-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 h-16 gap-3 animate-pulse-slow">
                                    <Phone className="w-6 h-6 ml-2" />
                                    <span>اشترِ عبر واتساب</span>
                                </Button>
                            </a>
                            <p className="text-center text-sm text-stone-500 mt-3 font-medium">✨ الطلب سهل وسريع - لا نحتاج لبطاقة بنكية</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                {product.testimonials && product.testimonials.length > 0 && (
                    <div className="mt-20 border-t border-stone-200 pt-16">
                        <h2 className="text-2xl font-bold text-center mb-10">آراء زبائننا الكرام</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.testimonials.map((t, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative overflow-hidden">
                                    <div className="flex gap-1 mb-4 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={i < t.rating ? "text-amber-400" : "text-stone-300"}>★</span>
                                        ))}
                                    </div>
                                    <p className="text-stone-600 mb-4 leading-relaxed">"{t.comment}"</p>
                                    <p className="font-bold text-stone-800 text-sm">- {t.name}</p>
                                    <div className="absolute top-0 left-0 w-16 h-16 bg-primary/5 rounded-br-full -translate-x-8 -translate-y-8" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Section>
            <Footer />
        </main >
    );
}
