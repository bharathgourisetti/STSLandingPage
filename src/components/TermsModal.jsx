import React, { useState } from 'react';
import { SHOP_CONFIG } from '../config/shopConfig';

export default function TermsModal({ isOpen, onClose, currentLang }) {
  const [activeTab, setActiveTab] = useState('offline');
  if (!isOpen) return null;
  const isTe = currentLang === 'te';
  const langKey = currentLang;

  const currentPoints = activeTab === 'offline' 
    ? (isTe ? SHOP_CONFIG.terms.offline.pointsTe : SHOP_CONFIG.terms.offline.pointsEn)
    : (isTe ? SHOP_CONFIG.terms.online.pointsTe : SHOP_CONFIG.terms.online.pointsEn);

  const tagHeader = activeTab === 'offline'
    ? (isTe ? SHOP_CONFIG.terms.offline.tagTe : SHOP_CONFIG.terms.offline.tagEn)
    : (isTe ? SHOP_CONFIG.terms.online.tagTe : SHOP_CONFIG.terms.online.tagEn);

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-[#FFFDF9] border-t-2 sm:border-2 border-[#D4AF37] w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl relative text-left">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div className="flex items-center space-x-2 mb-4">
          <svg className="w-5 h-5 text-[#7B1122]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-lg font-bold font-traditional text-[#7B1122]">
            {SHOP_CONFIG.ui.termsPoliciesBtn[langKey]}
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 rounded-xl bg-stone-200/80 mb-4">
          <button 
            onClick={() => setActiveTab('offline')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
              activeTab === 'offline' ? 'bg-[#FFFDF9] text-[#7B1122] shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>{SHOP_CONFIG.terms.tabs.offline[langKey]}</span>
          </button>
          <button 
            onClick={() => setActiveTab('online')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
              activeTab === 'online' ? 'bg-[#FFFDF9] text-[#7B1122] shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span>{SHOP_CONFIG.terms.tabs.online[langKey]}</span>
          </button>
        </div>

        {/* Terms Points */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">{tagHeader}</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {currentPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-[#8B1E2D] font-bold mt-0.5">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Info notice */}
        <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start space-x-2 text-xs text-amber-900">
          <svg className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <span>{SHOP_CONFIG.terms.notice[langKey]}</span>
        </div>

        <button 
          onClick={onClose} 
          className="mt-5 w-full py-2.5 rounded-xl bg-[#7B1122] text-white font-semibold text-sm hover:bg-[#630E1B] transition"
        >
          {SHOP_CONFIG.ui.gotItBtn[langKey]}
        </button>
      </div>
    </div>
  );
}