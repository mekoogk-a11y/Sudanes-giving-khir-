import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[85vh] text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-emerald-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">سياسة الخصوصية وصون الكرامة</h3>
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
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-700 leading-relaxed">
          
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-950 space-y-2">
            <h4 className="font-bold text-base flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-800" />
              <span>مبدأ الأمان المطلق وحجب الهويات الشخصية</span>
            </h4>
            <p className="text-xs leading-relaxed">
              تلتزم المنصة بأقصى درجات السرية والمسؤولية الأخلاقية. إن حماية كرامة المستفيدين وخصوصيتهم هي التزام مبدئي لا تهاون فيه.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">1. البيانات المحظور نشرها علناً بالكامل:</h4>
            <p className="text-xs text-gray-600">
              تمنع سياسات المنصة منعاً باتاً نشر أو إظهار أي من المعلومات التالية للعامة أو عبر واجهات التطبيق المفتوحة:
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>الأرقام الوطنية:</strong> لا تظهر في أي تقرير أو بطاقة حالة.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>العناوين الدقيقة والمنازل:</strong> يقتصر العرض على الولاية أو المنطقة العامة فقط.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>أرقام الهواتف الشخصية:</strong> تخزن في خوادم مشفرة وتستخدم للاتصال الإداري فقط.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>التقارير الطبية الكاملة:</strong> تدقق داخلياً ويتم تلخيص الحاجة فقط دون كشف السجلات الحساسة.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>بيانات الحسابات البنكية الخاصة:</strong> تدار عبر مسارات التحويل الموثقة المعتمدة.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">2. نطاق استخدام البيانات:</h4>
            <p className="text-xs text-gray-600">
              تُستخدم المعلومات المقدمة لغرض واحد فقط وهو: دراسة الاحتياج، التحقق من الوثائق، وتنسيق إيصال المساعدة من خلال مسارات العمل المعتمدة رسمياً داخل المنصة.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-base">3. التشفير وصلاحيات الوصول:</h4>
            <p className="text-xs text-gray-600">
              تخضع قاعدة البيانات لبروتوكولات تشفير قياسية، وتقتصر صلاحية مراجعة المستندات على فريق التحقق المخول فقط بموجب اتفاقيات سرية صارمة.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            إغلاق ومتابعة
          </button>
        </div>
      </div>
    </div>
  );
};
