import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-stone-50 rtl-grid">
            <Navbar />
            <div className="bg-secondary text-white py-24 text-center relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">تواصل معنا</h1>
                    <p className="text-white/80 text-lg">نحن هنا للإجابة على جميع استفساراتكم</p>
                </div>
                <div className="absolute inset-0 bg-[url('/ma3chaba.jpeg')] opacity-20 bg-cover bg-center mix-blend-overlay" />
            </div>

            <Section>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

                    <div className="space-y-8 order-2 md:order-1">
                        <h2 className="text-3xl font-bold text-primary">معلومات الاتصال</h2>
                        <p className="text-stone-600">يسعدنا استقبال طلباتكم واستفساراتكم طوال أيام الأسبوع.</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Phone className="w-6 h-6" /></div>
                                <div>
                                    <p className="font-bold text-stone-800">الهاتف / واتساب</p>
                                    <p dir="ltr" className="text-right text-stone-600 font-medium">+212 600 000 000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Mail className="w-6 h-6" /></div>
                                <div>
                                    <p className="font-bold text-stone-800">البريد الإلكتروني</p>
                                    <p className="text-stone-600">contact@ma3chabat.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-stone-100">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"><MapPin className="w-6 h-6" /></div>
                                <div>
                                    <p className="font-bold text-stone-800">العنوان</p>
                                    <p className="text-stone-600">أكادير، المغرب</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg border border-stone-100 order-1 md:order-2 space-y-6 text-center">
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-4">
                            <img
                                src="/image 2.png"
                                alt="تواصل معنا"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <h3 className="text-xl font-bold text-stone-800">تحدث معنا مباشرة</h3>
                        <p className="text-stone-500">فريقنا جاهز للإجابة على أسئلتكم وتقديم النصائح</p>

                        <a href="https://wa.me/212600000000" target="_blank" className="block">
                            <Button size="lg" className="w-full text-lg shadow-xl shadow-green-500/20 hover:shadow-green-500/40 h-14 gap-3">
                                <Phone className="w-5 h-5 ml-2" />
                                <span>تواصل عبر واتساب</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
