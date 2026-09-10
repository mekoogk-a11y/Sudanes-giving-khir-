import React, { useState, useEffect } from 'react';
import { Menu, X, Download, MessageCircle, Globe, Shield } from 'lucide-react';
import { Logo } from './Logo';
import { PlatformConfig } from '../config/appConfig';

interface NavbarProps {
  config: PlatformConfig;
  onScrollToSection: (id: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  onScrollToSection,
  activeSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'about', label: 'عن المنصة' },
    { id: 'how-it-works', label: 'كيف تعمل؟' },
    { id: 'trust', label: 'صدق وأمانة' },
    { id: 'download', label: 'حمّل التطبيق' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="cursor-pointer"
          >
            <Logo size="sm" showSlogan={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'text-emerald-900 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Quick link */}
            <button
              onClick={() => handleNavClick('contact')}
              className="p-2.5 rounded-xl text-emerald-800 hover:bg-emerald-50 border border-emerald-200 transition-colors cursor-pointer"
              title="تواصل عبر واتساب"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Primary Download CTA button */}
            <button
              onClick={() => handleNavClick('download')}
              className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer border border-emerald-700"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>حمّل التطبيق</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('download')}
              className="p-2 rounded-xl bg-emerald-800 text-white text-xs font-bold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px]">تحميل</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5 text-right">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-right px-4 py-3 rounded-xl text-sm font-bold transition-colors block ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-900 font-extrabold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('download')}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>حمّل تطبيق المنصة (APK)</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-800 font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-800" />
                <span>تواصل معنا عبر واتساب ({config.whatsAppDisplay})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
