import React from 'react';
import { 
  Download, 
  HelpCircle, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  FileCheck,
  ChevronDown
} from 'lucide-react';
import { AppMockupPreview } from './AppMockupPreview';
import { QRCodePlaceholder } from './QRCodePlaceholder';
import { PlatformConfig } from '../config/appConfig';

interface HeroProps {
  config: PlatformConfig;
  onOpenDownloadGuide: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onOpenDownloadGuide,
  onScrollToSection,
}) => {
  const handleDirectDownload = () => {
    if (config.isApkAvailable && config.appDownloadUrl) {
      window.location.href = config.appDownloadUrl;
    } else {
      onScrollToSection('download');
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-white">
      {/* Background Decorative Sudanese / Humanitarian Accents */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))] pointer-events-none" />
      
      {/* Subtle wheat / geometric watermark */}
      <div className="absolute right-[-60px] top-24 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-[-60px] top-64 w-80 h-80 bg-amber-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy & Action Column */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Top Official Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-amber-700 font-bold">صدق وأمانة</span>
              <span className="text-gray-300">|</span>
              <span>البوابة الرسمية للمنصة الإنسانية الرقمية</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.25]">
                الخير يصل إلى <span className="text-emerald-800 underline decoration-amber-400 decoration-wavy decoration-from-font underline-offset-8">مستحقه</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl">
                منصة سودانية رقمية تربط فاعلي الخير بأصحاب الحوجة بطريقة منظمة، آمنة وشفافة.
              </p>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Download Button - Highly Visible */}
              <button
                id="hero-download-button"
                onClick={handleDirectDownload}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-emerald-900/20 transition-all cursor-pointer border border-emerald-700"
              >
                <div className="p-1 rounded-lg bg-emerald-700/80 text-amber-300 group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="block text-base leading-tight">حمّل التطبيق</span>
                  <span className="block text-[11px] text-emerald-200 font-normal">
                    {config.isApkAvailable ? `بصيغة APK مباشر (${config.appSize})` : 'سيتم توفير التطبيق قريباً'}
                  </span>
                </div>
              </button>

              {/* Secondary CTA: How it works */}
              <button
                onClick={() => onScrollToSection('how-it-works')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-base border border-gray-300/90 shadow-xs hover:border-gray-400 transition-all cursor-pointer"
              >
                <HelpCircle className="w-5 h-5 text-emerald-700" />
                <span>كيف تعمل المنصة؟</span>
              </button>
            </div>

            {/* Quick Guarantees & Features Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-600">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-emerald-100/90 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold text-gray-800">تحقق وتدقيق للحالات</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-emerald-100/90 shadow-2xs">
                <FileCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold text-gray-800">صون تام للكرامة والخصوصية</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-emerald-100/90 shadow-2xs">
                <Smartphone className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-semibold text-gray-800">تطبيق أندرويد سهل ومباشر</span>
              </div>
            </div>

            {/* Instructions Quick Link and QR Code Row */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenDownloadGuide}
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>شرح طريقة تثبيت تطبيق الأندرويد (APK) بالخطوات</span>
                <ChevronDown className="w-3.5 h-3.5 rotate-[-90deg]" />
              </button>

              <span className="text-xs text-gray-400">|</span>

              <span className="text-xs text-gray-500 font-mono">
                الإصدار الحالي: <span className="font-bold text-gray-800">{config.appVersion}</span>
              </span>
            </div>

            {/* QR Code Quick Scanner Card for Desktop users */}
            <div className="hidden sm:inline-flex pt-2">
              <QRCodePlaceholder
                downloadUrl={config.appDownloadUrl}
                version={config.appVersion}
                size={110}
              />
            </div>

          </div>

          {/* Phone Mockup Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <AppMockupPreview />
          </div>

        </div>
      </div>
    </section>
  );
};
