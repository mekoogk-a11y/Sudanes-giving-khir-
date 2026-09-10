import React, { useState, useEffect } from 'react';
import { X, Settings, Save, RotateCcw, Check, AlertTriangle, Link2, Smartphone } from 'lucide-react';
import { PlatformConfig, DEFAULT_CONFIG, saveAppConfig } from '../config/appConfig';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: PlatformConfig;
  onConfigUpdated: (newConfig: PlatformConfig) => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({
  isOpen,
  onClose,
  currentConfig,
  onConfigUpdated,
}) => {
  const [downloadUrl, setDownloadUrl] = useState(currentConfig.appDownloadUrl);
  const [version, setVersion] = useState(currentConfig.appVersion);
  const [size, setSize] = useState(currentConfig.appSize);
  const [releaseDate, setReleaseDate] = useState(currentConfig.appReleaseDate);
  const [isApkAvailable, setIsApkAvailable] = useState(currentConfig.isApkAvailable);
  const [whatsAppDisplay, setWhatsAppDisplay] = useState(currentConfig.whatsAppDisplay);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDownloadUrl(currentConfig.appDownloadUrl);
      setVersion(currentConfig.appVersion);
      setSize(currentConfig.appSize);
      setReleaseDate(currentConfig.appReleaseDate);
      setIsApkAvailable(currentConfig.isApkAvailable);
      setWhatsAppDisplay(currentConfig.whatsAppDisplay);
      setSavedSuccess(false);
    }
  }, [isOpen, currentConfig]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveAppConfig({
      appDownloadUrl: downloadUrl.trim(),
      appVersion: version.trim(),
      appSize: size.trim(),
      appReleaseDate: releaseDate.trim(),
      isApkAvailable,
      whatsAppDisplay: whatsAppDisplay.trim(),
    });
    onConfigUpdated(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1500);
  };

  const handleResetToDefault = () => {
    const reset = saveAppConfig(DEFAULT_CONFIG);
    onConfigUpdated(reset);
    setDownloadUrl(DEFAULT_CONFIG.appDownloadUrl);
    setVersion(DEFAULT_CONFIG.appVersion);
    setSize(DEFAULT_CONFIG.appSize);
    setReleaseDate(DEFAULT_CONFIG.appReleaseDate);
    setIsApkAvailable(DEFAULT_CONFIG.isApkAvailable);
    setWhatsAppDisplay(DEFAULT_CONFIG.whatsAppDisplay);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh] text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-amber-300">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">لوحة إدارة روابط وتفاصيل التطبيق</h3>
              <span className="text-xs text-gray-400">تحكم فوري في متغيرات التحميل دون إعادة بناء الموقع</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 text-xs">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2 font-bold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>تم حفظ وتحديث الإعدادات بنجاح!</span>
            </div>
          )}

          {/* Toggle APK Availability */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
            <div>
              <label className="font-bold text-gray-900 block text-sm">
                حالة توفر ملف الـ APK (IS_APK_AVAILABLE)
              </label>
              <span className="text-gray-500 text-[11px] block mt-0.5">
                عند إلغاء التفعيل، سيظهر تلقائياً للمستخدمين: &quot;سيتم توفير التطبيق قريباً&quot;
              </span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={isApkAvailable} 
                onChange={(e) => setIsApkAvailable(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-700"></div>
            </label>
          </div>

          {/* APP_DOWNLOAD_URL */}
          <div>
            <label className="block font-bold text-gray-800 mb-1">
              رابط تحميل ملف التطبيق (APP_DOWNLOAD_URL)
            </label>
            <div className="relative">
              <input
                type="text"
                dir="ltr"
                value={downloadUrl}
                onChange={(e) => setDownloadUrl(e.target.value)}
                placeholder="https://example.com/downloads/app-release.apk"
                className="w-full p-3 rounded-xl border border-gray-300 font-mono text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 pl-8"
              />
              <Link2 className="w-4 h-4 text-gray-400 absolute left-2.5 top-3.5" />
            </div>
            <p className="text-[11px] text-gray-400 mt-1">
              ضع رابط التنزيل المباشر المتاح على سيرفر التخزين أو GitHub Releases.
            </p>
          </div>

          {/* Grid of Version, Size, Date */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-bold text-gray-800 mb-1">
                رقم الإصدار (APP_VERSION)
              </label>
              <input
                type="text"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder="1.2.0 (مستقر)"
                className="w-full p-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-800 mb-1">
                حجم الملف (APP_SIZE)
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="18.4 ميجابايت"
                className="w-full p-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-800 mb-1">
                تاريخ الإصدار (APP_RELEASE_DATE)
              </label>
              <input
                type="text"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                placeholder="سبتمبر 2026"
                className="w-full p-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>
          </div>

          {/* WhatsApp Display Number */}
          <div>
            <label className="block font-bold text-gray-800 mb-1">
              رقم واتساب المعروض (WHATSAPP_DISPLAY)
            </label>
            <input
              type="text"
              dir="ltr"
              value={whatsAppDisplay}
              onChange={(e) => setWhatsAppDisplay(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-gray-300 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3.5 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>استعادة الافتراضي</span>
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>حفظ الإعدادات</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
