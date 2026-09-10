import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  FileCheck, 
  Settings, 
  HelpCircle, 
  Check, 
  ExternalLink, 
  AlertCircle,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { PlatformConfig } from '../config/appConfig';
import { QRCodePlaceholder } from './QRCodePlaceholder';

interface DownloadSectionProps {
  config: PlatformConfig;
  onOpenAdminConfig: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  config,
  onOpenAdminConfig,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleDownload = () => {
    if (config.isApkAvailable && config.appDownloadUrl) {
      window.location.href = config.appDownloadUrl;
    }
  };

  const handleCopyLink = () => {
    if (config.appDownloadUrl) {
      navigator.clipboard.writeText(config.appDownloadUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="download" className="py-20 md:py-28 bg-[#F8FAF9] relative border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
            <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
            <span>بوابة التحميل الرقمية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
            حمّل تطبيق المنصة
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            الوصول المباشر لكافة خدمات المنصة؛ تقديم الطلبات، دراسة الحالات، والتبرع الآمن متاح من خلال تطبيق الأندرويد الرسمي.
          </p>
        </div>

        {/* Main Download Hub Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main Column: Download Actions & Specs */}
            <div className="lg:col-span-8 text-right space-y-6">
              
              {/* Version & Specs Bar */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-lg bg-emerald-800 text-white font-mono font-bold">
                  الإصدار: {config.appVersion}
                </span>
                <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">
                  الحجم: {config.appSize}
                </span>
                <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 font-medium">
                  تاريخ التحديث: {config.appReleaseDate}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                  نظام أندرويد 7.0 فما فوق
                </span>
              </div>

              {/* Download Buttons Area */}
              <div className="space-y-4">
                {config.isApkAvailable && config.appDownloadUrl ? (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    {/* Large Primary Android APK Button */}
                    <button
                      onClick={handleDownload}
                      className="flex-1 py-4 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-base shadow-lg shadow-emerald-900/15 flex items-center justify-center gap-3 transition-all cursor-pointer border border-emerald-700"
                    >
                      <Download className="w-6 h-6 text-amber-300" />
                      <div className="text-right">
                        <span className="block text-base leading-tight font-extrabold">
                          تحميل ملف الـ APK المباشر
                        </span>
                        <span className="block text-[11px] text-emerald-200 font-normal">
                          تثبيت سريع وآمن على هاتف الأندرويد ({config.appSize})
                        </span>
                      </div>
                    </button>

                    {/* Copy direct link */}
                    <button
                      onClick={handleCopyLink}
                      className="py-4 px-5 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center gap-2 border border-gray-200 transition-colors cursor-pointer"
                      title="نسخ رابط التحميل المباشر"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>تم نسخ الرابط!</span>
                        </>
                      ) : (
                        <>
                          <span>نسخ الرابط</span>
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  /* Fallback when APK is not yet configured or temporarily unavailable */
                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">سيتم توفير التطبيق قريباً</h4>
                      <p className="text-xs text-amber-800 mt-0.5">
                        يجري حالياً رفع وتجهيز الإصدار المعتمد. يمكنك التواصل معنا عبر واتساب لمعرفة موعد الإتاحة الفوري.
                      </p>
                    </div>
                  </div>
                )}

                {/* Google Play Future Badge (Strictly labeled as coming soon) */}
                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                      <Smartphone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">
                        متجر Google Play
                      </span>
                      <span className="text-[11px] text-gray-500">
                        سيتم نشر التطبيق على متجر جوجل بلاي قريباً
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-gray-200 text-gray-700 text-[10px] font-bold">
                    قريباً
                  </span>
                </div>
              </div>

              {/* Quick Security Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>تطبيق موثوق ومفحوص أمنياً ضد البرمجيات الضارة</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>لا يطلب صلاحيات وصول غير ضرورية</span>
                </div>
              </div>

            </div>

            {/* Right Column: QR Code Box */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <QRCodePlaceholder
                downloadUrl={config.appDownloadUrl}
                version={config.appVersion}
                size={135}
                label="المسح السريع للتحميل"
              />
            </div>

          </div>
        </div>

        {/* Step-by-Step Installation Instructions (How to install APK on Android) */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6 text-emerald-900">
            <HelpCircle className="w-5 h-5 text-emerald-700" />
            <h3 className="text-lg sm:text-xl font-bold">
              طريقة تثبيت التطبيق على هاتف الأندرويد (دليل الخطوات البسيطة)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h4 className="font-bold text-gray-900 text-sm">
                تحميل الملف (APK)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                اضغط على زر &quot;تحميل ملف الـ APK&quot; في الأعلى وانتظر حتى يكتمل التنزيل في متصفحك.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h4 className="font-bold text-gray-900 text-sm">
                السماح بالتثبيت من المتصفح
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                إذا ظهر تنبيه الأمان، اختر &quot;الإعدادات&quot; ثم فعّل خيار &quot;السماح بالتثبيت من هذا المصدر&quot; (جراء أمان قياسي في أندرويد).
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h4 className="font-bold text-gray-900 text-sm">
                فتح التطبيق وبدء الاستخدام
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                اضغط على &quot;تثبيت&quot;، وبمجرد الانتهاء ستجد أيقونة المنصة على شاشة هاتفك جاهزة للاستخدام المباشر.
              </p>
            </div>

          </div>

          {/* Admin Control Link */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onOpenAdminConfig}
              className="text-xs text-gray-400 hover:text-gray-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>إعدادات رابط وإصدار التطبيق (لوحة الإدارة)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
