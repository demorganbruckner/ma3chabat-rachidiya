import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/features/ProductCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Leaf, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-stone-50 rtl-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <Image
            src="/ma3chaba.jpeg"
            alt="Ma3chaba Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            أصالة الأعشاب الطبيعية<br />
            <span className="text-primary-light">من قلب الطبيعة المغربية</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-light">
            في معشبة الراشيدية، نجمع بين حكمة الأجداد وجودة الطبيعة لنقدم لكم منتجات تمنحكم التوازن والصحة المستدامة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/shop">
              <Button size="lg" className="text-lg px-12 w-full sm:w-auto shadow-xl hover:scale-105 transition-transform bg-primary hover:bg-primary-light border-none">
                تصفح المنتجات
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-12 w-full sm:w-auto text-white border-white hover:bg-white/10 hover:text-white">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Section className="bg-white relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">لماذا تختار معشبة الراشيدية؟</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-primary" />,
              title: "طبيعي 100%",
              desc: "منتجات خالية من الكيماويات، مستخلصة من أجود الأعشاب الطبيعية."
            },
            {
              icon: <Award className="w-10 h-10 text-primary" />,
              title: "جودة عالية",
              desc: "نضمن لكم فعالية المنتجات وجودتها من خلال انتقاء دقيق للمكونات."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-primary" />,
              title: "ثقة وأمانة",
              desc: "خبرة طويلة في مجال الأعشاب، وسمعة طيبة نفخر بها."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow border border-stone-100 group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section className="bg-stone-50">
        <div className="flex justify-between items-end mb-12 px-2">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">أحدث المنتجات</h2>
            <p className="text-stone-500">اكتشف مجموعتنا المختارة بعناية</p>
          </div>
          <Link href="/shop" className="hidden md:flex items-center gap-2 text-primary hover:text-primary-hover font-medium">
            <span>عرض الكل</span>
            <ArrowRight className="w-4 h-4 ml-1 rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/shop">
            <Button variant="outline" className="px-12">عرض كل المنتجات</Button>
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
