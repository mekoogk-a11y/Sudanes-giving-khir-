import React from 'react';
import { X, Smartphone, Download, Settings, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { PlatformConfig } from '../config/appConfig';

interface DownloadGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PlatformConfig;
}

export const DownloadGuideModal: React.FC<DownloadGuideModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    if (config.isApkAvailable && config.appDownloadUrl) {
      window.location.href = config.appDownloadUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh] text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-emerald-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">دليل تثبيت ملف APK على أجهزة أندرويد</h3>
              <span className="text-xs text-emerald-200">خطوات سهلة وسريعة لتشغيل التطبيق</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Steps */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-700 leading-relaxed">
          
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-950 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <p className="leading-relaxed">
              ملف التطبيق رسمي، آمن، وموقع بشهادة أمان رقمية ولا يحتوي على أي إعلانات أو برمجيات ضارة.
            </p>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm">بدء تحميل ملف التطبيق (APK)</h4>
                <p className="text-gray-600 leading-relaxed">
                  انقر على زر &quot;تحميل التطبيق&quot; ليبدأ تنزيل الملف وحجمه حوالي ({config.appSize}).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm">رسالة &quot;قد يكون الملف ضاراً&quot;</h4>
                <p className="text-gray-600 leading-relaxed">
                  هذه رسالة تحذيرية قياسية تظهر في نظام أندرويد لأي تطبيق يتم تحميله من خارج متجر جوجل بلاي. اضغط على <strong>&quot;تنزيل على أي حال&quot; (Download anyway)</strong> للمتابعة بأمان.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm">السماح بتثبيت التطبيقات غير المعروفة</h4>
                <p className="text-gray-600 leading-relaxed">
                  عند النقر على الملف بعد اكتمال تحميله، إذا طلب منك الهاتف الإذن، اختر <strong>&quot;الإعدادات&quot; (Settings)</strong> ثم فعّل <strong>&quot;السماح بتثبيت التطبيقات من هذا المصدر&quot; (Allow from this source)</strong>.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-bold flex items-center justify-center shrink-0 text-xs">
                4
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm">الضغط على تثبيت والفتح</h4>
                <p className="text-gray-600 leading-relaxed">
                  ارجع خطوة للخلف واضغط على <strong>&quot;تثبيت&quot; (Install)</strong>، ثم اضغط <strong>&quot;فتح&quot; (Open)</strong> لتبدأ استخدام التطبيق فوراً.
                </p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                handleDownload();
              }}
              className="w-full py-3 px-5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>تحميل ملف APK الآن ({config.appSize})</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
