import { ProductCard } from '@/components/features/ProductCard';
import { Section } from '@/components/ui/Section';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { products } from '@/lib/data';

export default function Shop() {
    return (
        <main className="min-h-screen bg-stone-50 rtl-grid">
            <Navbar />
            <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">متجرنا</h1>
                    <p className="text-primary-100 text-lg">تصفح جميع منتجاتنا الطبيعية وطلباتك تصلك إلى باب منزلك</p>
                </div>
                <div className="absolute inset-0 bg-[url('/ma3chaba.jpeg')] opacity-10 bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
            </Section>
            <Footer />
        </main>
    );
}
