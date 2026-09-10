import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { BeneficiariesAndDonors } from './components/BeneficiariesAndDonors';
import { TrustAndTransparency } from './components/TrustAndTransparency';
import { QuranInspiration } from './components/QuranInspiration';
import { DownloadSection } from './components/DownloadSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { SudaneseAudioPromo } from './components/SudaneseAudioPromo';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PrivacyModal } from './components/PrivacyModal';
import { TermsModal } from './components/TermsModal';
import { ComplaintModal } from './components/ComplaintModal';
import { ApplyGuidanceModal } from './components/ApplyGuidanceModal';
import { DownloadGuideModal } from './components/DownloadGuideModal';
import { AdminConfigModal } from './components/AdminConfigModal';
import { getAppConfig, PlatformConfig } from './config/appConfig';

export default function App() {
  const [config, setConfig] = useState<PlatformConfig>(getAppConfig);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [isApplyGuidanceOpen, setIsApplyGuidanceOpen] = useState(false);
  const [isDownloadGuideOpen, setIsDownloadGuideOpen] = useState(false);
  const [isAdminConfigOpen, setIsAdminConfigOpen] = useState(false);

  useEffect(() => {
    const handleConfigUpdate = () => {
      setConfig(getAppConfig());
    };
    window.addEventListener('app_config_updated', handleConfigUpdate);
    return () => window.removeEventListener('app_config_updated', handleConfigUpdate);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'how-it-works', 'for-beneficiaries', 'for-donors', 'trust', 'download', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const url = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.whatsAppMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FBFDFB] text-[#19241E] flex flex-col font-sans selection:bg-emerald-800 selection:text-white pb-16 sm:pb-0" dir="rtl">
      
      {/* Top Navbar */}
      <Navbar
        config={config}
        onScrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          config={config}
          onOpenDownloadGuide={() => setIsDownloadGuideOpen(true)}
          onScrollToSection={scrollToSection}
        />

        {/* About Section */}
        <AboutSection />

        {/* How It Works (4-Step Visual Process) */}
        <HowItWorks />

        {/* For People in Need & For Donors (Dual Gateways) */}
        <BeneficiariesAndDonors
          onScrollToDownload={() => scrollToSection('download')}
          onOpenApplyModal={() => setIsApplyGuidanceOpen(true)}
        />

        {/* Trust & Transparency: "صدق وأمانة" */}
        <TrustAndTransparency
          onOpenComplaintModal={() => setIsComplaintOpen(true)}
        />

        {/* Quranic Inspiration */}
        <QuranInspiration />

        {/* The Requested Sudanese Dialect Advertising Voiceover Script & Player */}
        <SudaneseAudioPromo />

        {/* Dedicated Download Hub */}
        <DownloadSection
          config={config}
          onOpenAdminConfig={() => setIsAdminConfigOpen(true)}
        />

        {/* Contact Section via WhatsApp */}
        <ContactSection
          config={config}
        />

      </main>

      {/* Footer */}
      <Footer
        config={config}
        onScrollToSection={scrollToSection}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenAdminConfig={() => setIsAdminConfigOpen(true)}
      />

      {/* Sticky Mobile Bar */}
      <StickyMobileBar
        config={config}
        onScrollToDownload={() => scrollToSection('download')}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Modals & Dialogs */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      <ComplaintModal
        isOpen={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
        whatsAppDisplay={config.whatsAppDisplay}
      />

      <ApplyGuidanceModal
        isOpen={isApplyGuidanceOpen}
        onClose={() => setIsApplyGuidanceOpen(false)}
        config={config}
        onScrollToDownload={() => scrollToSection('download')}
      />

      <DownloadGuideModal
        isOpen={isDownloadGuideOpen}
        onClose={() => setIsDownloadGuideOpen(false)}
        config={config}
      />

      <AdminConfigModal
        isOpen={isAdminConfigOpen}
        onClose={() => setIsAdminConfigOpen(false)}
        currentConfig={config}
        onConfigUpdated={(newConfig) => setConfig(newConfig)}
      />

    </div>
  );
}
