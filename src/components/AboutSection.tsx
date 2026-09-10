import React from 'react';
import { Sparkles, Shield, Heart } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>الهوية والأهداف</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-gray-950 text-center mb-8 tracking-tight">
          عن المنصة
        </h2>

        {/* Main Content Card */}
        <div className="bg-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xs relative">
          
          {/* Logo center display */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" showSlogan={true} />
          </div>

          {/* Official Exact Text as explicitly requested by user */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-800 leading-[2.1] font-normal text-center sm:text-justify">
              المنصة السودانية الخيرية للمساعدات الفردية هي مبادرة رقمية تهدف إلى تنظيم عملية الوصول إلى المساعدة وربط فاعلي الخير بأصحاب الحوجة من خلال أدوات تقنية تساعد على دراسة الحالات ومتابعتها.
            </p>
          </div>

          {/* Core Values row (Pillars without fake numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-emerald-200/60">
            <div className="p-4 rounded-2xl bg-white border border-emerald-100/90 text-center">
              <span className="text-amber-700 font-black text-base block mb-1">الصدق والأمانة</span>
              <span className="text-xs text-gray-600">تحري الدقة الكاملة في كل خطوة وإجراء</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-100/90 text-center">
              <span className="text-emerald-800 font-black text-base block mb-1">صون الكرامة</span>
              <span className="text-xs text-gray-600">حماية خصوصية المستفيدين دون أي حرج</span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-emerald-100/90 text-center">
              <span className="text-gray-900 font-black text-base block mb-1">الربط المنظم</span>
              <span className="text-xs text-gray-600">منظومة تقنية حديثة تدعم التتبع والتوثيق</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
