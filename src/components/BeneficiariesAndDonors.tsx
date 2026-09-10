import React from 'react';
import { 
  HeartHandshake, 
  HelpCircle, 
  ShieldAlert, 
  Sparkles, 
  Download, 
  ArrowRight, 
  Check, 
  Lock, 
  Search,
  FileText
} from 'lucide-react';

interface BeneficiariesAndDonorsProps {
  onScrollToDownload: () => void;
  onOpenApplyModal: () => void;
}

export const BeneficiariesAndDonors: React.FC<BeneficiariesAndDonorsProps> = ({
  onScrollToDownload,
  onOpenApplyModal,
}) => {
  return (
    <section className="py-20 bg-slate-50 relative border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Section 1: For People in Need ("هل لديك حوجة؟") */}
          <div 
            id="for-beneficiaries"
            className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-emerald-600 via-emerald-800 to-emerald-950" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100 mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>بوابة أصحاب الحوجة</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-3 tracking-tight">
                هل لديك حوجة؟
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                إذا كنت أنت أو أسرتك في حاجة ماسّة لمساعدة عاجلة (علاج، غذاء، إيواء، أو احتياجات ضرورية)، يمكنك تقديم طلبك بيسر وبطريقة رقمية كريمة تحفظ خصوصيتك عبر تطبيق المنصة.
              </p>

              {/* What beneficiary needs to know */}
              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>تعبئة نموذج الطلب وتوضيح الحالة بدقة عبر التطبيق.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>إرفاق المستندات المؤيدة (فواتير علاجية، تقارير، إفادات رسمية).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-3 h-3" />
                  </div>
                  <span>بياناتك الشخصية سرية ولن تنشر في أي منصة عامة.</span>
                </div>
              </div>

              {/* CRITICAL Mandate: Do not promise that every request will receive assistance */}
              <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs flex items-start gap-2.5 mb-6">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="block font-bold mb-0.5">تنويه هام للأمانة والشفافية:</strong>
                  تقديم الطلب لا يُعد وعداً أو التزاماً قاطعاً بالحصول على المساعدة، حيث تخضع جميع الطلبات لدراسة معايير الأولوية وإجراءات التحقق وتوافر مساهمات فاعلي الخير.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer border border-emerald-700"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>تقديم طلب مساعدة</span>
              </button>
            </div>
          </div>


          {/* Section 2: For الخير-Doers ("هل تريد أن تصنع أثراً؟") */}
          <div 
            id="for-donors"
            className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-amber-500 via-emerald-700 to-emerald-900" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>بوابة فاعلي الخير</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-3 tracking-tight">
                هل تريد أن تصنع أثراً؟
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                إذا كنت ترغب في مد يد العون لإخوانك داخل السودان، يتيح لك تطبيق المنصة استعراض الحالات التي استوفت شروط التدقيق والفحص المعتمدة، مع ضمان وصول كل مساهمة إلى مستحقها الفعلي.
              </p>

              {/* What donor gets */}
              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-gray-100 text-xs text-gray-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>الاطلاع على الحالات التي خضعت لتدقيق وثائقي وميداني صارم.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>تحديد الحالة التي ترغب في مساندتها وفق إمكانياتك واختيارك.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>متابعة حالة المساعدة حتى اكتمالها عبر إشعارات التطبيق الرسمية.</span>
                </div>
              </div>

              {/* Dignity & Respect Box */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-xs flex items-start gap-2.5 mb-6">
                <HeartHandshake className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="block font-bold mb-0.5">عطاء نقي يصون الكرامة:</strong>
                  تُعرض تفاصيل الاحتياج ومقدار التكلفة المعتمدة دون انتهاك ستر المستحقين أو تعريضهم لأي حرج اجتماعي.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onScrollToDownload}
                className="w-full py-3.5 px-6 rounded-xl bg-gray-900 hover:bg-black active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer border border-gray-800"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>ابدأ فعل الخير</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
