import React from 'react';
import { X, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[85vh] text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-amber-300">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">الشروط والأحكام التنظيمية</h3>
              <span className="text-xs text-gray-300">المنصة السودانية الخيرية للمساعدات الفردية</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed">
          
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
            <h4 className="font-bold text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-800" />
              <span>طبيعة عمل المنصة وحدود المسؤولية</span>
            </h4>
            <p className="text-xs leading-relaxed">
              المنصة السودانية الخيرية هي وسيلة تقنية تنظيمية تهدف لتسهيل دراسة الحالات وتنسيق الدعم المباشر بين فاعلي الخير والمحتاجين، ولا تضمن الحصول التلقائي على المساعدات.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">1. شروط تقديم الطلبات:</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>أن تكون البيانات والمستندات المرفقة صحيحة ومطابقة للواقع تماماً.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>الموافقة على قيام فريق التدقيق بفحص المستندات والتحقق منها.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>إدراك أن تقديم الطلب لا يعني الموافقة الحتمية، بل يخضع لنتائج التحقق وأولويات الاحتياج.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">2. ضوابط المساهمة والتبرع:</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>يتم توجيه المساهمات حصراً للحالات المؤهلة والمعتمدة بعد التحقق.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>تلتزم المنصة بتسجيل وتوثيق تسليم المساعدات بشفافية تامة عبر التطبيق.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">3. مكافحة التزوير والاحتيال:</h4>
            <p className="text-xs text-gray-600">
              يُحظر تقديم أي معلومات كاذبة أو مضللة أو وثائق مزورة. تحتفظ المنصة بحق الرفض الفوري والحظر لأي حساب يثبت تلاعبه مع اتخاذ الإجراءات النظامية الملائمة.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
