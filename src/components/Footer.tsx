import React from 'react';
import { Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { PlatformConfig } from '../config/appConfig';

interface FooterProps {
  config: PlatformConfig;
  onScrollToSection: (id: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdminConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onScrollToSection,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAdminConfig,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white relative pt-16 pb-12 overflow-hidden border-t border-gray-900 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Logo size="lg" showSlogan={true} invertWhite={true} />
            
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed pt-2">
              منظومة إنسانية رقمية لربط فاعلي الخير بأصحاب الحوجة في السودان وفق معايير دقيقة تحفظ الكرامة وتضمن شفافية العطاء.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-bold">شعارنا الراسخ: صدقٌ وأمانة</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gray-200">
              روابط المنصة
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onScrollToSection('hero')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('about')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  عن المنصة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('how-it-works')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  كيف تعمل؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('download')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  حمّل التطبيق
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policies Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gray-200">
              الأمان والخصوصية
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right block"
                >
                  الخصوصية وصون الكرامة
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right block"
                >
                  الشروط والأحكام التنظيمية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('trust')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right block"
                >
                  إجراءات مكافحة الاحتيال والتحقق
                </button>
              </li>
              <li>
                <span className="text-[11px] text-gray-500 font-mono block pt-2">
                  إصدار التطبيق: v{config.appVersion}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>جميع الحقوق محفوظة للمنصة السودانية الخيرية للمساعدات الفردية</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdminConfig}
              className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors"
            >
              لوحة الإدارة
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              title="العودة لأعلى الصفحة"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
