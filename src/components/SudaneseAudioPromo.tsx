import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Square, 
  Copy, 
  Check, 
  Sparkles, 
  Radio, 
  Mic2,
  Share2
} from 'lucide-react';

export const SudaneseAudioPromo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isSupported, setIsSupported] = useState(true);

  // The authentic, enthusiastic Sudanese advertising voiceover script (Man's voice)
  const scriptText = `يا زول الخير فيك وفِينا! أهلنا ديل سندنا، والبلد دي ما بنقيف فيها إلا لما نكون يد واحدة!
عشان كدا، الليلة جبنا ليكم (المنصة السودانية الخيرية للمساعدات الفردية)..
منصة تقنية منظمة، بتحفظ كرامة المحتاجين، وبتوصل صدقتك وزكاتك للمستحق الحقيقي بالمليم!
مافي صور مكسورة.. ولا وجع رأس.. شغل كله (صدق وأمانة)!
لو عندك حوجة.. ارفع طلبك بكل عزة وكرامة.
ولو باسط إيدك للخير.. خش التطبيق وشوف الحالات الموثقة بنظام شفاف.
حمّل التطبيق هسي على تلفونك.. وخلي سهمك في الخير ينبت سبع سنابل!
المنصة السودانية الخيرية.. الخير يصل إلى مستحقه!`;

  useEffect(() => {
    if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
      setIsSupported(false);
    }
  }, []);

  const handleTogglePlay = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(scriptText);
    utterance.lang = 'ar-SA'; // Arabic voice
    utterance.rate = speechRate;
    utterance.pitch = 0.95; // Slightly deeper man's pitch

    // Try finding Arabic voice
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar') || v.lang.includes('ar'));
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-emerald-50/30 border-t border-b border-emerald-100/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        
        {/* Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-bold border border-amber-200">
            <Radio className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>الصوت الإعلاني الترويجي (لهجة سودانية حماسية)</span>
          </div>

          <span className="text-xs text-gray-500 font-medium">
            صوت رجالي إذاعي للدعاية والحملات المجتمعية
          </span>
        </div>

        {/* Script Card & Player */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                <Mic2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900">
                  نص الإعلان الصوتي الحماسي
                </h3>
                <p className="text-xs text-gray-500">
                  مخصص للتسجيل الصوتي، فيديوهات الواتساب، والترويج للتطبيق
                </p>
              </div>
            </div>

            {/* Play/Listen Controls */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleTogglePlay}
                className={`flex-1 sm:flex-initial py-2.5 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs ${
                  isPlaying 
                    ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                    : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>إيقاف الصوت</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-amber-300" />
                    <span>استمع للإعلان الآن (صوت تجريبي)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyScript}
                className="py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
                title="نسخ النص للتسجيل"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-600" />
                    <span>نسخ النص</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Script Display */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100 text-right space-y-4">
            <p className="text-base sm:text-lg text-gray-900 leading-[2.1] whitespace-pre-line font-medium font-sans">
              {scriptText}
            </p>
          </div>

          {/* Audio Direction Notes for Recording */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>نبرة الأداء: حماسية، دافئة، أصيلة، تعكس المروءة والشهامة السودانية.</span>
            </div>
            <span className="font-mono text-emerald-800 font-bold text-[11px]">
              المدة المقدرة: 35 ثانية
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
