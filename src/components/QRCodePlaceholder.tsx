import React, { useState } from 'react';
import { QrCode, Check, Copy, Download, Smartphone } from 'lucide-react';

interface QRCodePlaceholderProps {
  downloadUrl: string;
  size?: number;
  label?: string;
  version?: string;
}

export const QRCodePlaceholder: React.FC<QRCodePlaceholderProps> = ({
  downloadUrl,
  size = 140,
  label = "امسح بالهاتف للتحميل المباشر",
  version = "1.2.0",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (downloadUrl) {
      navigator.clipboard.writeText(downloadUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm flex flex-col items-center text-center max-w-[220px]">
      <div className="relative p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100/80 mb-2.5">
        {/* Stylized QR Code SVG representing digital connection */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 140 140"
          className="text-emerald-900"
          fill="currentColor"
        >
          {/* Outer finder patterns */}
          {/* Top-Left */}
          <rect x="10" y="10" width="36" height="36" rx="4" fill="#14532D" />
          <rect x="16" y="16" width="24" height="24" rx="2" fill="#FFFFFF" />
          <rect x="22" y="22" width="12" height="12" rx="1" fill="#14532D" />

          {/* Top-Right */}
          <rect x="94" y="10" width="36" height="36" rx="4" fill="#14532D" />
          <rect x="100" y="16" width="24" height="24" rx="2" fill="#FFFFFF" />
          <rect x="106" y="22" width="12" height="12" rx="1" fill="#14532D" />

          {/* Bottom-Left */}
          <rect x="10" y="94" width="36" height="36" rx="4" fill="#14532D" />
          <rect x="16" y="100" width="24" height="24" rx="2" fill="#FFFFFF" />
          <rect x="22" y="106" width="12" height="12" rx="1" fill="#14532D" />

          {/* Timing patterns and data modules */}
          <rect x="52" y="14" width="6" height="6" rx="1" fill="#15803D" />
          <rect x="64" y="14" width="6" height="6" rx="1" fill="#15803D" />
          <rect x="76" y="14" width="6" height="6" rx="1" fill="#D97706" />

          <rect x="52" y="26" width="6" height="6" rx="1" fill="#15803D" />
          <rect x="64" y="26" width="6" height="6" rx="1" fill="#14532D" />
          <rect x="76" y="26" width="6" height="6" rx="1" fill="#15803D" />

          <rect x="52" y="38" width="6" height="6" rx="1" fill="#047857" />
          <rect x="76" y="38" width="6" height="6" rx="1" fill="#14532D" />

          {/* Center Badge with Seed Accent */}
          <rect x="46" y="46" width="48" height="48" rx="8" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
          <circle cx="70" cy="70" r="16" fill="#14532D" />
          {/* Sprout inside center */}
          <path d="M70 77V65M67 69C64 68 62 65 65 62C68 63 69 66 70 67M73 69C76 68 78 65 75 62C72 63 71 66 70 67" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />

          {/* Bottom data bits */}
          <rect x="52" y="102" width="8" height="8" rx="1" fill="#15803D" />
          <rect x="66" y="102" width="6" height="6" rx="1" fill="#14532D" />
          <rect x="80" y="102" width="8" height="8" rx="1" fill="#D97706" />
          <rect x="100" y="60" width="8" height="8" rx="1" fill="#15803D" />
          <rect x="114" y="60" width="6" height="6" rx="1" fill="#15803D" />
          <rect x="100" y="76" width="6" height="6" rx="1" fill="#047857" />
          <rect x="114" y="76" width="8" height="8" rx="1" fill="#14532D" />
          <rect x="104" y="98" width="16" height="6" rx="1" fill="#15803D" />
          <rect x="100" y="112" width="8" height="8" rx="1" fill="#D97706" />
          <rect x="116" y="112" width="8" height="8" rx="1" fill="#14532D" />
        </svg>

        <span className="absolute bottom-1 right-1 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
          v{version}
        </span>
      </div>

      <div className="flex items-center gap-1 text-xs font-semibold text-emerald-900 mb-1">
        <Smartphone className="w-3.5 h-3.5 text-emerald-700" />
        <span>{label}</span>
      </div>
      <p className="text-[11px] text-gray-500 mb-2.5">
        وجّه كاميرا هاتفك للتحميل الفوري
      </p>

      <button
        onClick={handleCopyLink}
        className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-medium rounded-lg transition-colors border border-emerald-200"
        title="نسخ رابط التحميل"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-emerald-600" />
            <span>تم نسخ الرابط!</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3 text-emerald-700" />
            <span>نسخ رابط الـ APK</span>
          </>
        )}
      </button>
    </div>
  );
};
