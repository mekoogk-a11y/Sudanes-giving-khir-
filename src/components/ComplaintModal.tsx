import React, { useState } from 'react';
import { X, MessageSquareWarning, ShieldAlert, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ComplaintModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsAppDisplay: string;
}

export const ComplaintModal: React.FC<ComplaintModalProps> = ({ 
  isOpen, 
  onClose,
  whatsAppDisplay 
}) => {
  const [complaintType, setComplaintType] = useState('suspicion');
  const [caseNumber, setCaseNumber] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setDetails('');
    setCaseNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh] text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-amber-700 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-800 flex items-center justify-center text-amber-200">
              <MessageSquareWarning className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">آلية البلاغات والشكاوى الرسمية</h3>
              <span className="text-xs text-amber-100">صدق وأمانة - رقابة ومساءلة مستمرة</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-amber-100 hover:text-white hover:bg-amber-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">تم استلام بلاغكم بنجاح</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                شكراً لمساهمتكم في صون الأمانة. سيقوم فريق المراجعة والتدقيق المستقل بدراسة الملاحظة وإعادة فحص الملف بشكل فوري وسري.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-900 transition-colors"
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  تتعامل المنصة مع كافة البلاغات والشكاوى بمنتهى الجدية والسرية التامة لحماية نزاهة العمل الخيري وضمان عدم المساس بالكرامة الإنسانية.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  نوع البلاغ أو الشكوى
                </label>
                <select
                  value={complaintType}
                  onChange={(e) => setComplaintType(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                >
                  <option value="suspicion">شبهة عدم صحة بيانات أو وثائق لحالة معينة</option>
                  <option value="duplicate">اشتباه في تكرار حالة أو ازدواجية طلب</option>
                  <option value="technical">مشكلة تقنية أو خطأ في تطبيق المنصة</option>
                  <option value="conduct">ملاحظة على إجراءات التدقيق أو المتابعة</option>
                  <option value="other">ملاحظة أو استفسار تنظيمي عام</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  رقم الحالة المعنية (إن وجد - مثلاً: #SD-4091)
                </label>
                <input
                  type="text"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder="#SD-XXXX أو اتركه فارغاً إذا كان البلاغ عاماً"
                  className="w-full p-3 rounded-xl border border-gray-300 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1.5">
                  تفاصيل البلاغ أو الملاحظة <span className="text-red-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="يرجى كتابة التفاصيل والقرائن بوضوح لمساعدة فريق التدقيق في التحري السريع..."
                  className="w-full p-3 rounded-xl border border-gray-300 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 leading-relaxed"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>إرسال البلاغ للتدقيق</span>
                </button>
                <span className="text-[11px] text-gray-400">
                  أو مباشرة عبر واتساب: {whatsAppDisplay}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
