import React from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { PlatformConfig } from '../config/appConfig';

interface StickyMobileBarProps {
  config: PlatformConfig;
  onScrollToDownload: () => void;
  onOpenWhatsApp: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  config,
  onScrollToDownload,
  onOpenWhatsApp,
}) => {
  const handleDownload = () => {
    if (config.isApkAvailable && config.appDownloadUrl) {
      window.location.href = config.appDownloadUrl;
    } else {
      onScrollToDownload();
    }
  };

  return (
    <aside aria-label="شريط التحميل السريع للموبايل" className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 shadow-lg flex items-center gap-2.5">
      {/* Primary Sticky Download Button */}
      <button
        onClick={handleDownload}
        className="flex-1 py-3 px-4 rounded-xl bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm border border-emerald-700"
      >
        <Download className="w-4 h-4 text-amber-300" />
        <span>حمّل التطبيق ({config.appSize})</span>
      </button>

      {/* Direct WhatsApp Quick chat */}
      <button
        onClick={onOpenWhatsApp}
        className="p-3 rounded-xl bg-[#25D366] text-gray-950 font-bold flex items-center justify-center shadow-xs"
        aria-label="تواصل عبر واتساب"
        title="تواصل عبر واتساب"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </button>
    </aside>
  );
};
