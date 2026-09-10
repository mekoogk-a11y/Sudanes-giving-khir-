import React from 'react';
import { Sparkles } from 'lucide-react';

export const QuranInspiration: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-950 via-[#0a2817] to-emerald-950 text-white relative overflow-hidden">
      {/* Subtle Islamic/geometric background ornamentation */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-star-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0L37 23L60 30L37 37L30 60L23 37L0 30L23 23Z" fill="none" stroke="#FDE68A" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Subtle decorative wheat & grain emblem */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="w-8 h-8 rounded-full bg-emerald-900 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>

        {/* Small header */}
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-amber-300/90 block">
          نبراس العطاء والنماء
        </span>

        {/* The Noble Verse in Elegant Typography */}
        <div className="py-4 px-3 sm:px-6 bg-emerald-900/30 rounded-3xl border border-amber-400/20 backdrop-blur-xs">
          <p className="text-2xl sm:text-3xl md:text-4xl text-amber-100 font-quran font-normal leading-[1.9] sm:leading-[2.1] tracking-wide">
            ﴿ مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ ﴾
          </p>
          
          <span className="block mt-4 text-xs font-medium text-amber-300/80 font-sans">
            [سورة البقرة: الآية 261]
          </span>
        </div>

        {/* Clear statement respecting user prompt: Do not claim that platform guarantees reward */}
        <p className="text-xs sm:text-sm text-emerald-200/70 max-w-2xl mx-auto leading-relaxed pt-2">
          تستلهم المنصة هذا المعنى القرآني العظيم في مضاعفة الخير ونمائه؛ ونؤكد أن المنصة مبادرة تنظيمية وتقنية للتيسير والربط، ولا تدعي ولا تضمن أي أجر ديني، فالقبول والجزاء عند الله وحده سبحانه.
        </p>

      </div>
    </section>
  );
};
