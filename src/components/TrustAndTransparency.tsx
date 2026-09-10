import React, { useState } from 'react';
import { 
  ShieldCheck, 
  EyeOff, 
  FileSearch, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Lock, 
  MessageSquareWarning,
  Activity,
  ChevronRight,
  Info
} from 'lucide-react';

interface TrustAndTransparencyProps {
  onOpenComplaintModal: () => void;
}

export const TrustAndTransparency: React.FC<TrustAndTransparencyProps> = ({
  onOpenComplaintModal,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: "verification",
      title: "دراسة وتدقيق الحالات",
      icon: FileSearch,
      subtitle: "إجراءات مراجعة متعددة المراحل",
      desc: "تخضع كل استمارة تُقدّم للمنصة لمراجعة وثائقية وفحص للأوراق الثبوتية والتقارير الطبية أو فواتير العلاج قبل اعتمادها، لضمان صحة الاحتياج ومطابقته للواقع.",
      points: [
        "مطابقة الهوية الوطنية والوثائق الرسمية للمستفيد أو ممثله.",
        "التأكد من التكاليف المادية عبر فواتير ومصادر خدمية معتمدة.",
        "فرز الحالات وفق درجات الاحتياج العاجل والأولوية الإنسانية.",
      ]
    },
    {
      id: "privacy",
      title: "حماية الخصوصية وصون الكرامة",
      icon: EyeOff,
      subtitle: "تشفير تام وحظر النشر العلني للهويات",
      desc: "نلتزم بأعلى معايير الأمان الرقمي والأخلاقي. لا يتم نشر أرقام الهواتف الشخصية، أو الحسابات البنكية، أو العناوين الدقيقة، أو صور المستفيدين على الإطلاق.",
      points: [
        "ترميز الحالات بأرقام مرجعية عشوائية مشفرة (مثل #SD-4091).",
        "حجب أي مستند يحوي رقماً وطنياً أو بيانات عائلية خاصة.",
        "وصول مقيد ومحصور بلجنة التدقيق المعتمدة فقط.",
      ]
    },
    {
      id: "status-tracking",
      title: "تتبع شفاف لمسار الحالة",
      icon: Activity,
      subtitle: "سجل علني لمراحل التقديم والدعم",
      desc: "يوفر النظام للمستفيد ولفاعل الخير سجلاً شفافاً يوضح انتقال الحالة من مرحلة المراجعة إلى مرحلة التحقق، ثم الربط، ثم تسليم المساعدة واكتمال الدعم.",
      points: [
        "إشعارات لحظية عبر التطبيق عند انتقال الحالة بين المراحل.",
        "تسجيل المبالغ المدفوعة وتوثيق إيصالات الإنجاز بالكامل.",
        "إغلاق الحالة فور اكتمال التكلفة المطلوبة لمنع الازدواجية.",
      ]
    },
    {
      id: "anti-fraud",
      title: "إجراءات مكافحة الاحتيال والازدواج",
      icon: ShieldCheck,
      subtitle: "أنظمة كشف التكرار والتدقيق الاستباقي",
      desc: "تعتمد المنصة آليات رقمية لاكتشاف الطلبات المكررة، ومطابقة البيانات لمنع استغلال العمل الخيري أو تقديم معلومات غير دقيقة.",
      points: [
        "كشف الحالات المكررة باستخدام خوارزميات التدقيق الداخلي.",
        "المطالبة بتأكيدات إضافية عند وجود أي ارتياب في صحة الوثائق.",
        "تجميد فوري لأي حساب أو طلب يثبت تزويره أو تلاعبه.",
      ]
    },
    {
      id: "complaint",
      title: "آلية البلاغات والشكاوى",
      icon: MessageSquareWarning,
      subtitle: "قناة مباشرة ومفتوحة للمساءلة والملاحظات",
      desc: "تتيح المنصة لكافة المستخدمين وفاعلي الخير تقديم بلاغ أو شكوى فورية في حال وجود أي شبهة أو ملاحظة على أي حالة، وتتم دراسة البلاغ بكل جدية واستقلالية.",
      points: [
        "معالجة سرية للبلاغات خلال مدة لا تتجاوز 48 ساعة.",
        "فريق مخصص للتحقق من الشكاوى وإعادة فحص الملفات.",
        "إيقاف الحالة احترازياً أثناء فترة فحص البلاغ لحماية التبرعات.",
      ]
    },
  ];

  return (
    <section id="trust" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Brand Slogan */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>ركائز الشفافية والأمانة</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
            صدقٌ وأمانة
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            النزاهة والوضوح هما عماد المنصة. نبني جسور الثقة من خلال مسارات عمل تقنية مدروسة تحمي حق المستحق وتضمن أمانة المتبرع.
          </p>
        </div>

        {/* Interactive Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Tabs (Left side on RTL) */}
          <div className="lg:col-span-5 space-y-2.5">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              const isSelected = selectedPillar === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(index)}
                  className={`w-full text-right p-4 rounded-2xl transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-800 shadow-md translate-x-1'
                      : 'bg-gray-50/80 text-gray-800 hover:bg-gray-100 border-gray-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-emerald-800 text-amber-300'
                          : 'bg-white text-emerald-800 border border-gray-200'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                        {pillar.title}
                      </h4>
                      <p className={`text-xs ${isSelected ? 'text-emerald-200' : 'text-gray-500'}`}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-300 rotate-180' : 'text-gray-400'
                    }`}
                  />
                </button>
              );
            })}

            {/* Direct Complaint Button Trigger */}
            <div className="pt-2">
              <button
                onClick={onOpenComplaintModal}
                className="w-full py-3 px-4 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-300/80 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquareWarning className="w-4 h-4 text-amber-700" />
                <span>فتح آلية البلاغات والشكاوى الرسمية</span>
              </button>
            </div>
          </div>

          {/* Detailed Content View (Right side on RTL) */}
          <div className="lg:col-span-7 bg-emerald-50/40 rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xs text-right space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center shadow-xs">
                {React.createElement(pillars[selectedPillar].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-bold text-amber-700 block">
                  معيار الأمانة رقم 0{selectedPillar + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  {pillars[selectedPillar].title}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {pillars[selectedPillar].desc}
            </p>

            {/* Key enforcement points */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-emerald-100/90 shadow-2xs">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                إجراءات التطبيق الصارمة:
              </h4>
              {pillars[selectedPillar].points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>

            {/* Mandatory Disclaimer from Prompt */}
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong>توضيح إجرائي صريح:</strong> يتم تنفيذ إجراءات التحقق والتدقيق وفق الآليات والسياسات الخاصة بالمنصة؛ وقد تقتضي الإجراءات طلب مستندات إضافية أو تأكيدات تكميلية قبل اعتماد أي حالة للتأكد التام من استحقاقها.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
