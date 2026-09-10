import React from 'react';
import { X, FileText, Download, CheckCircle, ShieldAlert, Smartphone } from 'lucide-react';
import { PlatformConfig } from '../config/appConfig';

interface ApplyGuidanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PlatformConfig;
  onScrollToDownload: () => void;
}

export const ApplyGuidanceModal: React.FC<ApplyGuidanceModalProps> = ({
  isOpen,
  onClose,
  config,
  onScrollToDownload,
}) => {
  if (!isOpen) return null;

  const handleDownloadApp = () => {
    onClose();
    if (config.isApkAvailable && config.appDownloadUrl) {
      window.location.href = config.appDownloadUrl;
    } else {
      onScrollToDownload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[88vh] text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-emerald-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">بوابة تقديم طلب المساعدة</h3>
              <span className="text-xs text-emerald-200">المنصة السودانية الخيرية للمساعدات الفردية</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-gray-700 leading-relaxed">
          
          {/* Sincere Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-sm mb-1">توضيح هام لأصحاب الحوجة:</strong>
              يتم تقديم كافة الطلبات ودراستها حصراً عبر <strong>تطبيق المنصة الرسمي</strong> للهواتف الذكية؛ حيث يتيح التطبيق بيئة مشفرة ترفع من خلالها الوثائق وتتابع حالة طلبك أولاً بأول.
              <br />
              <span className="text-amber-900 font-semibold block mt-1">
                * نلفت انتباهكم إلى أن تقديم الطلب لا يعني ضمان المساعدة تلقائياً، بل يخضع لضوابط التدقيق وأولويات الدعم المتاحة.
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-950 text-sm">المستندات والمعلومات المطلوب تجهيزها داخل التطبيق:</h4>
            <div className="space-y-2 text-xs text-gray-600 bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>إثبات الهوية (رقم وطني أو جواز أو بطاقة رسمية للمستفيد أو الولي).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>المستند المعزز للحاجة (روشتة علاج، تقرير طبي، فاتورة مستشفى، أو إفادة لجنة الطوارئ المحلية).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>تحديد الموقع الجغرافي التقريبي (الولاية والمحلية).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>رقم هاتف للتواصل والتحقق الداخلي فقط (لن يظهر لأي مستخدم آخر).</span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={handleDownloadApp}
              className="w-full py-3.5 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer border border-emerald-700"
            >
              <Download className="w-5 h-5 text-amber-300" />
              <span>تحميل تطبيق المنصة وبدء تقديم الطلب</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
