import React from 'react';
import { 
  FileText, 
  SearchCheck, 
  HandHeart, 
  ClipboardCheck, 
  ArrowLeft, 
  Shield, 
  EyeOff, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "تقديم طلب المساعدة",
      shortSummary: "صاحب الحوجة يرفع طلبه عبر التطبيق",
      description: "يقوم صاحب الحوجة أو من ينوب عنه بتسجيل طلبه وتوضيح تفاصيل الاحتياج الأساسي ورفع المستندات المعززة عبر تطبيق المنصة في بيئة آمنة وسرية تماماً.",
      icon: FileText,
      tag: "خطوة المستفيد",
      highlights: ["بيانات مشفرة", "مستندات مؤيدة", "حفظ الخصوصية"],
    },
    {
      number: "02",
      title: "دراسة الحالة",
      shortSummary: "مراجعة وتدقيق وفق إجراءات التحقق",
      description: "تقوم المنصة بفحص البيانات المدخلة وتدقيق الوثائق والتواصل لتقييم الاحتياج وفق معايير الاستحقاق المعتمدة لضمان وصول المساعدة للمستحق الفعلي.",
      icon: SearchCheck,
      tag: "إجراءات التدقيق",
      highlights: ["فحص الوثائق", "تقييم الأولوية", "فريق مراجعة مستقل"],
    },
    {
      number: "03",
      title: "ربط فاعل الخير بالحالة",
      shortSummary: "عرض الحالات المعتمدة مع صون الكرامة",
      description: "تُعرض الحالات المؤهلة بعد اعتمادها لفاعلي الخير داخل التطبيق للمساهمة فيها بشكل منظم، مع الحجب الكامل لأي معلومات شخصية صوناً لكرامة المستفيدين.",
      icon: HandHeart,
      tag: "المساهمة المباشرة",
      highlights: ["حجب الهوية والبيانات", "مبالغ دقيقة ومحددة", "تيسير قنوات المساهمة"],
    },
    {
      number: "04",
      title: "متابعة المساعدة",
      shortSummary: "توثيق الإنجاز وإشعار الأطراف",
      description: "تتابع المنصة وصول المساعدة وتحديث سجلات الحالة بصورة موثقة لضمان الشفافية، مع إشعار فاعل الخير وصاحب الحوجة باكتمال الإجراء.",
      icon: ClipboardCheck,
      tag: "الشفافية والتوثيق",
      highlights: ["تحديث فوري للحالة", "توثيق التنفيذ", "تقارير واضحة"],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            <span>مسار العمل الرقمي</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
            كيف تعمل المنصة؟
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            أربعة مراحل محكمة تضمن انضباط العملية، وصون الكرامة الإنسانية، ووصول المساعدات إلى أصحابها بكل صدق وأمانة.
          </p>
        </div>

        {/* 4-Step Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.number}
                className="relative bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-3xl font-black text-emerald-900/20 font-mono group-hover:text-emerald-800/40 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mb-3">
                    {step.shortSummary}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Sub-highlights */}
                <div className="pt-4 border-t border-gray-100 space-y-1.5">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>

        {/* Informative Note Box */}
        <div className="mt-12 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5 text-amber-300" />
            </div>
            <div className="text-right">
              <h4 className="text-sm font-bold text-emerald-950">
                مبدأ صون الكرامة والخصوصية
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                لا نقوم بنشر صور المستفيدين أو أرقام هواتفهم أو وثائقهم الشخصية للعامة نهائياً. يتم التدقيق داخلياً فقط.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-emerald-900 bg-white px-4 py-2 rounded-xl border border-emerald-200 shrink-0">
            نظام تقني موحد ومؤمن
          </div>
        </div>

      </div>
    </section>
  );
};
