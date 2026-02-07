import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 py-16 text-sm">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right rtl-grid">

                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">معشبة الراشيدية</h3>
                    <p className="leading-relaxed text-stone-400">
                        نقدم لكم خلاصة الطبيعة المغربية في منتجات عشبية طبيعية 100%. نهتم بصحتكم وتوازنكم بأمانة ومصداقية.
                    </p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white">روابط سريعة</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link></li>
                        <li><Link href="/shop" className="hover:text-primary transition-colors">منتجاتنا</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">من نحن</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white">معلومات الاتصال</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 justify-end">
                            <span>+212 600 000 000</span>
                            <Phone className="w-4 h-4 text-primary" />
                        </li>
                        <li className="flex items-center gap-3 justify-end">
                            <span>contact@ma3chabat.com</span>
                            <Mail className="w-4 h-4 text-primary" />
                        </li>
                        <li className="flex items-center gap-3 justify-end">
                            <span>أكادير، المغرب</span>
                            <MapPin className="w-4 h-4 text-primary" />
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white">تابعونا</h4>
                    <div className="flex gap-4 justify-end">
                        <Link href="#" className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-all">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 bg-stone-800 rounded-full hover:bg-primary hover:text-white transition-all">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="border-t border-stone-800 mt-16 pt-8 text-center text-stone-500">
                <p>&copy; {new Date().getFullYear()} معشبة الراشيدية. جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
}
