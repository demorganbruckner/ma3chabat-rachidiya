import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { ShieldCheck, Leaf, Heart } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-stone-50 rtl-grid">
            <Navbar />

            {/* Hero Section */}
            <div className="bg-secondary text-white py-24 text-center relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">من نحن</h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">قصة شغف بالطبيعة وعراقة التداوي بالأعشاب من قلب الراشيدية</p>
                </div>
                <div className="absolute inset-0 bg-[url('/ma3chaba.jpeg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
            </div>

            <Section className="py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                        <h2 className="text-3xl font-bold text-primary mb-4">أصل الحكاية</h2>
                        <p>
                            تأسست "معشبة الراشيدية" من إيمان عميق بقوة الطبيعة والكنوز التي تخفيها صحراء المغرب. نحن لسنا مجرد متجر، بل نحن ورثة لتقاليد أجدادنا في التداوي بالأعشاب الطبيعية.
                        </p>
                        <p>
                            من قلب مدينة الراشيدية، بوابة الصحراء، نجمع لكم أجود الأعشاب والنباتات الطبية، ونحضر خلطات طبيعية 100% تجمع بين العلم والتجربة المتوارثة.
                        </p>
                        <p>
                            هدفنا هو تقديم بدائل طبيعية وصحية لتعزيز نمط حياتكم، مع الالتزام التام بالجودة والأمانة.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/ma3chaba.jpeg"
                            alt="متجر معشبة الراشيدية"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Values Section */}
            <Section className="bg-stone-100 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-stone-800">قيمنا</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <Leaf className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-stone-800">طبيعي 100%</h3>
                        <p className="text-stone-600">نلتزم بتقديم منتجات خالية تماماً من المواد الكيميائية والحافظة.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-stone-800">الجودة والأمانة</h3>
                        <p className="text-stone-600">نختار مكوناتنا بعناية فائقة ونضمن لكم جودة عالية في كل منتج.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-stone-800">رضاكم غايتنا</h3>
                        <p className="text-stone-600">نحن هنا لخدمتكم وتقديم الاستشارة والنصيحة بكل صدق.</p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
