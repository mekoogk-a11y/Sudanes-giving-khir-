import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Heart, 
  ArrowLeft, 
  ChevronLeft,
  FileText,
  UserCheck,
  EyeOff,
  Sparkles,
  HelpCircle,
  Share2
} from 'lucide-react';

export const AppMockupPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'browse' | 'apply' | 'track'>('browse');

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px]">
      {/* Glow aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600/20 via-amber-500/10 to-emerald-400/20 rounded-[44px] blur-xl opacity-75"></div>

      {/* Phone chassis */}
      <div className="relative rounded-[40px] bg-gray-950 p-3 shadow-2xl border-[3px] border-gray-800 text-right">
        {/* Speaker & camera notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-gray-900 rounded-full flex items-center justify-center gap-2 z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-950 border border-gray-800"></div>
          <div className="w-10 h-1 rounded-full bg-gray-800"></div>
        </div>

        {/* Screen container */}
        <div className="relative rounded-[32px] overflow-hidden bg-slate-50 border border-gray-100 flex flex-col h-[570px]">
          {/* Status Bar */}
          <div className="pt-2 px-5 pb-1 flex justify-between items-center text-[10px] text-gray-500 bg-white border-b border-gray-100 select-none">
            <span className="font-mono font-bold text-gray-700">09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold text-emerald-800">4G</span>
              <div className="w-4 h-2 rounded-xs border border-gray-400 p-0.5 flex items-center">
                <div className="w-2.5 h-full bg-emerald-600 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-emerald-900 text-white px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-800 border border-emerald-700 flex items-center justify-center">
                  <span className="text-amber-300 font-bold text-xs">ص</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-none">المنصة الخيرية</h4>
                  <span className="text-[10px] text-emerald-200">صدق وأمانة</span>
                </div>
              </div>
              <span className="bg-emerald-800/80 border border-emerald-700 text-amber-300 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-amber-300" />
                نظام موثّق
              </span>
            </div>
          </div>

          {/* Screen Switcher Inside Mockup */}
          <div className="bg-white border-b border-gray-200 px-2 py-1.5 flex gap-1 justify-around text-[11px] font-medium">
            <button
              onClick={() => setActiveTab('browse')}
              className={`py-1 px-2 rounded-lg transition-colors flex items-center gap-1 ${
                activeTab === 'browse'
                  ? 'bg-emerald-50 text-emerald-900 font-bold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>الحالات المعتمدة</span>
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`py-1 px-2 rounded-lg transition-colors flex items-center gap-1 ${
                activeTab === 'apply'
                  ? 'bg-emerald-50 text-emerald-900 font-bold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>طلب إعانة</span>
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`py-1 px-2 rounded-lg transition-colors flex items-center gap-1 ${
                activeTab === 'track'
                  ? 'bg-emerald-50 text-emerald-900 font-bold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>تتبع الحالة</span>
            </button>
          </div>

          {/* Screen Content Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50/70 text-right">
            {activeTab === 'browse' && (
              <div className="space-y-2.5">
                {/* Dignity Privacy Alert in App */}
                <div className="bg-amber-50/80 border border-amber-200/70 rounded-xl p-2 flex items-center gap-2 text-[10px] text-amber-900">
                  <EyeOff className="w-4 h-4 text-amber-700 shrink-0" />
                  <p className="leading-tight">
                    <strong>صون الكرامة:</strong> الهوية والبيانات الشخصية للمستفيدين مشفرة ومحمية بالكامل.
                  </p>
                </div>

                {/* Case Card 1 */}
                <div className="bg-white rounded-xl p-3 border border-gray-200/90 shadow-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      تم التحقق الميداني
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">#SD-4091</span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-gray-900">مساعدة أدوية ومستلزمات علاجية</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 mt-0.5">
                      حالة مرضية مستقرة بحاجة لعلاج شهري للأمراض المزمنة في ولاية الجزيرة.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      ولاية الجزيرة
                    </span>
                    <span className="text-emerald-800 font-bold">المبلغ المطلوب: محدد بالفاتورة</span>
                  </div>

                  <button className="w-full mt-1 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-[11px] font-bold rounded-lg shadow-xs flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 fill-amber-300 text-amber-300" />
                    المساهمة في الدعم
                  </button>
                </div>

                {/* Case Card 2 */}
                <div className="bg-white rounded-xl p-3 border border-gray-200/90 shadow-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-blue-100 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                      جاري استكمال التكلفة
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">#SD-3812</span>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-gray-900">سلة غذائية لأسر نازحة</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                      تأمين مواد تموينية أساسية لأسرة متضررة في ولاية نهر النيل.
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[65%] h-full bg-emerald-600 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-[9px] text-gray-500">
                      <span>تمت تغطية 65%</span>
                      <span className="text-emerald-700 font-bold">باقي القليل</span>
                    </div>
                  </div>

                  <button className="w-full mt-1 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-[11px] font-bold rounded-lg border border-emerald-200 flex items-center justify-center gap-1">
                    <span>عرض التفاصيل المعتمدة</span>
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'apply' && (
              <div className="space-y-2.5">
                <div className="bg-emerald-800 text-white rounded-xl p-2.5">
                  <h5 className="text-xs font-bold mb-0.5">بوابة أصحاب الحوجة</h5>
                  <p className="text-[10px] text-emerald-100">
                    تقديم الطلب متاح لجميع الأسر والأفراد المحتاجين داخل السودان.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-3 border border-gray-200 space-y-2 text-[11px]">
                  <div className="space-y-1">
                    <label className="block text-gray-700 font-bold text-[10px]">نوع المساعدة المطلوبة</label>
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200 text-gray-600 text-[10px]">
                      علاج ورعاية صحية / غذاء / إيواء
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-gray-700 font-bold text-[10px]">الولاية والمحلية</label>
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200 text-gray-600 text-[10px]">
                      السودان - تحديد الموقع الآمن
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[10px] text-emerald-900">
                    <p className="leading-snug">
                      🔒 <strong>ضمان السرية:</strong> لا يتم نشر هويتك أو صورك على العلن بأي شكل.
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 text-[10px] text-gray-500">
                    ⚠️ تقديم الطلب يخضع لإجراءات التحقق ولا يعني بالضرورة الاستحقاق التلقائي.
                  </div>

                  <button className="w-full py-2 bg-emerald-800 text-white text-[11px] font-bold rounded-lg shadow-xs">
                    إرسال الطلب للتدقيق والمراجعة
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'track' && (
              <div className="space-y-2.5">
                <div className="bg-white rounded-xl p-3 border border-gray-200 space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <h5 className="text-xs font-bold text-gray-900">مسار تتبع الحالة #SD-210</h5>
                      <span className="text-[10px] text-gray-500">تحديث لحظي لخطوات الدعم</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded">
                      نشطة
                    </span>
                  </div>

                  {/* Vertical Timeline */}
                  <div className="relative pr-4 space-y-3 text-[10px] before:absolute before:right-1.5 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-emerald-200">
                    <div className="relative">
                      <span className="absolute -right-4 top-0.5 w-3 h-3 rounded-full bg-emerald-600 border-2 border-white"></span>
                      <p className="font-bold text-gray-900">تقديم الطلب والمستندات</p>
                      <p className="text-gray-400 text-[9px]">تم الاستلام عبر التطبيق</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -right-4 top-0.5 w-3 h-3 rounded-full bg-emerald-600 border-2 border-white"></span>
                      <p className="font-bold text-gray-900">مرحلة دراسة الحالة والتحقق</p>
                      <p className="text-gray-400 text-[9px]">تم التأكد من الوثائق الرسمية</p>
                    </div>

                    <div className="relative">
                      <span className="absolute -right-4 top-0.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-white animate-pulse"></span>
                      <p className="font-bold text-amber-800">ربط الحالة بفاعل الخير</p>
                      <p className="text-gray-500 text-[9px]">جاري التنسيق المباشر</p>
                    </div>

                    <div className="relative opacity-50">
                      <span className="absolute -right-4 top-0.5 w-3 h-3 rounded-full bg-gray-300 border-2 border-white"></span>
                      <p className="font-bold text-gray-600">اكتمال الدعم والتوثيق المالي</p>
                      <p className="text-gray-400 text-[9px]">إشعار الإتمام للمتبرع والمستفيد</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* App Bottom Navigation Bar */}
          <div className="bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center text-[10px] text-gray-500">
            <div className="flex flex-col items-center text-emerald-800 font-bold">
              <span className="w-1.5 h-1.5 bg-emerald-800 rounded-full mb-0.5"></span>
              <span>الرئيسية</span>
            </div>
            <div className="flex flex-col items-center hover:text-emerald-800 cursor-pointer">
              <Lock className="w-3.5 h-3.5 mb-0.5" />
              <span>الأمان</span>
            </div>
            <div className="flex flex-col items-center hover:text-emerald-800 cursor-pointer">
              <FileText className="w-3.5 h-3.5 mb-0.5" />
              <span>طلباتي</span>
            </div>
            <div className="flex flex-col items-center hover:text-emerald-800 cursor-pointer">
              <HelpCircle className="w-3.5 h-3.5 mb-0.5" />
              <span>المساعدة</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
