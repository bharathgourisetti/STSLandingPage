import React from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function AboutModal({ isOpen, onClose, currentLang }) {
  if (!isOpen) return null;
  const isTe = currentLang === 'te';
  const langKey = currentLang;

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-[#FFFDF9] border-t-2 sm:border-2 border-[#D4AF37] w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl relative text-left">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#7B1122] text-white flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-traditional text-[#7B1122]">
              {isTe ? SHOP_CONFIG.aboutUs.titleTe : SHOP_CONFIG.aboutUs.titleEn}
            </h2>
            <p className="text-xs text-stone-500">{SHOP_CONFIG.names[langKey]} - {SHOP_CONFIG.subtitles[langKey]}</p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>{isTe ? SHOP_CONFIG.aboutUs.paragraph1Te : SHOP_CONFIG.aboutUs.paragraph1En}</p>
          <p>{isTe ? SHOP_CONFIG.aboutUs.paragraph2Te : SHOP_CONFIG.aboutUs.paragraph2En}</p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 gap-2.5 mt-5">
          {SHOP_CONFIG.aboutUs.highlights.map((hl, i) => (
            <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-[#FAF5EB] border border-[#EEDBCA]">
              <div className="p-1.5 rounded-lg bg-[#7B1122] text-white mt-0.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#7B1122]">{isTe ? hl.titleTe : hl.titleEn}</h4>
                <p className="text-xs text-stone-600">{isTe ? hl.descTe : hl.descEn}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={onClose} 
          className="mt-6 w-full py-2.5 rounded-xl bg-[#7B1122] text-white font-semibold text-sm hover:bg-[#630E1B] transition"
        >
          {SHOP_CONFIG.ui.closeBtn[langKey]}
        </button>
      </div>
    </div>
  );
}