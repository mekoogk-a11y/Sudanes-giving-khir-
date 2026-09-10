/**
 * Configuration for the Platform and Application Distribution
 * 
 * Administrators can easily change the download URL, version, size, and availability
 * without restructuring the entire application.
 */

export interface PlatformConfig {
  appName: string;
  slogan: string;
  headline: string;
  subheadline: string;
  appDownloadUrl: string;
  appVersion: string;
  appSize: string;
  appReleaseDate: string;
  isApkAvailable: boolean;
  googlePlayUrl: string | null;
  whatsAppNumber: string;
  whatsAppDisplay: string;
  whatsAppMessage: string;
}

export const DEFAULT_CONFIG: PlatformConfig = {
  appName: "المنصة السودانية الخيرية للمساعدات الفردية",
  slogan: "صدق وأمانة",
  headline: "الخير يصل إلى مستحقه",
  subheadline: "منصة سودانية رقمية تربط فاعلي الخير بأصحاب الحوجة بطريقة منظمة، آمنة وشفافة.",
  
  // Easily replaceable APK download link:
  // Can be set to a direct URL (e.g., https://storage.googleapis.com/.../app-release.apk) or empty string
  appDownloadUrl: "https://github.com/sudanese-charity-platform/releases/download/v1.2.0/sudan-charity-v1.2.0.apk",
  appVersion: "1.2.0 (إصدار مستقر)",
  appSize: "18.4 ميجابايت",
  appReleaseDate: "سبتمبر 2026",
  isApkAvailable: true,
  
  // Future Google Play store link
  googlePlayUrl: null,
  
  // Contact info
  whatsAppNumber: "249919980435",
  whatsAppDisplay: "00249919980435",
  whatsAppMessage: "السلام عليكم ورحمة الله، أود الاستفسار بخصوص المنصة السودانية الخيرية للمساعدات الفردية.",
};

const STORAGE_KEY = "sudan_charity_config_override";

export function getAppConfig(): PlatformConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error("Failed to read config from localStorage", e);
  }
  return DEFAULT_CONFIG;
}

export function saveAppConfig(newConfig: Partial<PlatformConfig>): PlatformConfig {
  const current = getAppConfig();
  const updated = { ...current, ...newConfig };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("app_config_updated"));
  } catch (e) {
    console.error("Failed to save config to localStorage", e);
  }
  return updated;
}
