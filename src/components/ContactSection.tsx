import React, { useState } from 'react';
import { 
  MessageCircle, 
  Copy, 
  Check, 
  Phone, 
  Send, 
  Clock, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PlatformConfig } from '../config/appConfig';

interface ContactSectionProps {
  config: PlatformConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(config.whatsAppDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsAppUrl = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.whatsAppMessage)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200 mb-4">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
          <span>القناة الرسمية للتواصل</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-gray-950 mb-4 tracking-tight">
          تواصل معنا
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          فريق المنصة متاح للإجابة عن استفسارات فاعلي الخير وأصحاب الحوجة وتقديم الدعم الفني المتعلق بالتطبيق.
        </p>

        {/* Prominent WhatsApp Card */}
        <div className="bg-gradient-to-b from-[#14532D] to-[#0D381E] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-right border border-emerald-700/60">
          {/* Decorative subtle circles */}
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Info and Number */}
            <div className="space-y-4 text-center md:text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-800/90 text-amber-300 text-xs font-bold border border-emerald-700">
                خدمة المحادثة المباشرة
              </span>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                تواصل معنا عبر واتساب
              </h3>

              <p className="text-emerald-100/90 text-sm max-w-md leading-relaxed">
                يسعدنا تلقي استفساراتكم أو مقترحاتكم لتعزيز منظومة العمل الخيري في السودان.
              </p>

              {/* Number display with 1-click copy */}
              <div className="inline-flex items-center gap-3 bg-emerald-950/60 p-2.5 px-4 rounded-2xl border border-emerald-600/40">
                <span className="font-mono text-lg sm:text-xl font-bold text-amber-300 tracking-wider dir-ltr" dir="ltr">
                  {config.whatsAppDisplay}
                </span>

                <button
                  onClick={handleCopyNumber}
                  className="p-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white transition-colors cursor-pointer border border-emerald-600 flex items-center gap-1 text-xs"
                  title="نسخ الرقم"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-300" />
                      <span className="text-[11px] text-amber-200">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">نسخ</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Prominent Action Button */}
            <div className="shrink-0 flex flex-col items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-gray-950 font-black text-base shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 fill-current text-gray-950" />
                <span>فتح المحادثة على واتساب</span>
              </a>

              <span className="text-[11px] text-emerald-200/80 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-300" />
                <span>الرد خلال أوقات العمل الرسمية</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
