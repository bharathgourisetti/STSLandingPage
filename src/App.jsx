import { useEffect, useState } from 'react';
import { SHOP_CONFIG } from './config/shopConfig';
import Header from './components/Header';
import BrandHero from './components/BrandHero';
import SocialMediaGrid from './components/SocialMediaGrid';
import ShowroomDetails from './components/ShowroomDetails';
import QrModal from './components/QrModal';
import AboutModal from './components/AboutModal';
import TermsModal from './components/TermsModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [modalState, setModalState] = useState({ qr: false, about: false, terms: false });
  const [toastMsg, setToastMsg] = useState(null);

  const langKey = currentLang;

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleCopyAddress = () => {
    const text = `${SHOP_CONFIG.names[langKey]} (${SHOP_CONFIG.subtitles[langKey]})\n${SHOP_CONFIG.location.shopNo[langKey]}\n${SHOP_CONFIG.ui.landmarkLabel[langKey]} ${SHOP_CONFIG.location.landmark[langKey]}\n${SHOP_CONFIG.location.area[langKey]}, ${SHOP_CONFIG.location.district[langKey]}, ${SHOP_CONFIG.location.state[langKey]} - ${SHOP_CONFIG.location.pincode}\nPhone: ${SHOP_CONFIG.contact.phoneDisplay}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(SHOP_CONFIG.ui.toastAddressCopied[langKey]);
      });
    } else {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      triggerToast(SHOP_CONFIG.ui.toastAddressCopied[langKey]);
    }
  };

  const handleShare = () => {
    const shareUrl = SHOP_CONFIG.landingPageUrl;
    if (navigator.share) {
      navigator.share({
        title: `${SHOP_CONFIG.names[langKey]} - ${SHOP_CONFIG.subtitles[langKey]}`,
        text: `${SHOP_CONFIG.taglines[langKey]} • Ph: ${SHOP_CONFIG.contact.phoneDisplay}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        triggerToast(SHOP_CONFIG.ui.toastLinkCopied[langKey]);
      });
    }
  };

  return (
    <div className={`min-h-screen text-[#382315] antialiased selection:bg-[#7B1122] selection:text-white relative ${currentLang === 'te' ? 'font-telugu' : ''}`}>
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-gradient-to-b from-[#FAF6ED] via-transparent to-[#EFE3C6]"></div>

      {/* Main Container */}
      <main className="relative mx-auto max-w-lg min-h-screen flex flex-col px-3 sm:px-5 py-4 sm:py-6">
        <Header 
          currentLang={currentLang} 
          onToggleLang={toggleLanguage} 
          onOpenQr={() => setModalState({ ...modalState, qr: true })}
          onShare={handleShare}
        />

        <BrandHero currentLang={currentLang} />

        <SocialMediaGrid currentLang={currentLang} />

        <ShowroomDetails 
          currentLang={currentLang}
          onCopyAddress={handleCopyAddress}
          onOpenQr={() => setModalState({ ...modalState, qr: true })}
        />

        {/* About Us & Terms & Conditions Action Buttons */}
        <section className="mt-4 grid grid-cols-2 gap-3">
          <button 
            onClick={() => setModalState({ ...modalState, about: true })}
            className="flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/70 text-stone-800 hover:bg-[#FAF4E9] shadow-sm transition active:scale-95 text-xs sm:text-sm font-bold font-traditional"
          >
            <svg className="w-4 h-4 text-[#B8860B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>{SHOP_CONFIG.ui.aboutLoomsBtn[langKey]}</span>
          </button>

          <button 
            onClick={() => setModalState({ ...modalState, terms: true })}
            className="flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/70 text-stone-800 hover:bg-[#FAF4E9] shadow-sm transition active:scale-95 text-xs sm:text-sm font-bold font-traditional"
          >
            <svg className="w-4 h-4 text-[#7B1122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{SHOP_CONFIG.ui.termsPoliciesBtn[langKey]}</span>
          </button>
        </section>

        {/* Footer */}
        <footer className="mt-8 mb-4 text-center text-xs text-stone-500">
          <div className="flex items-center justify-center space-x-2 mb-2 select-none">
            <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            <span className="text-[#B8860B]">❖</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
          </div>
          <p className="font-traditional font-bold text-[#7B1122] text-sm">
            {SHOP_CONFIG.names[langKey]} • {SHOP_CONFIG.subtitles[langKey]}
          </p>
          <p className="text-[11px] text-stone-600 mt-0.5">
            {/* {SHOP_CONFIG.established[langKey]} • {SHOP_CONFIG.location.area[langKey]}, {SHOP_CONFIG.location.district[langKey]}, {SHOP_CONFIG.location.state[langKey]} */}
            {SHOP_CONFIG.location.area[langKey]}, {SHOP_CONFIG.location.district[langKey]}, {SHOP_CONFIG.location.state[langKey]}
          </p>
          <p className="text-[10px] text-stone-400 mt-2">
            {SHOP_CONFIG.footerNote[langKey]}
          </p>
        </footer>
      </main>

      {/* Modals */}
      <QrModal 
        isOpen={modalState.qr} 
        onClose={() => setModalState({ ...modalState, qr: false })}
        currentLang={currentLang}
        onShare={handleShare}
      />

      <AboutModal 
        isOpen={modalState.about} 
        onClose={() => setModalState({ ...modalState, about: false })}
        currentLang={currentLang}
      />

      <TermsModal 
        isOpen={modalState.terms} 
        onClose={() => setModalState({ ...modalState, terms: false })}
        currentLang={currentLang}
      />

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#7B1122] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-2xl flex items-center space-x-2 border border-[#D4AF37]">
          <svg className="w-4 h-4 text-[#E5C158]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}